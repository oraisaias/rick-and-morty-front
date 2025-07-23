'use client'

import styles from './CharacterCard.module.css'
import Image from 'next/image'
import Heart from './heart.svg'
import React, { useMemo } from 'react';
import { Character } from 'rickmortyapi';
import { RootState, useAppDispatch } from '@/store';
import { addLikedCharacter, removeLikedCharacter, setSelectedCharacter } from '@/store/slices/charactersSlice';
import { useSelector } from 'react-redux';
export default function CharacterCard({character}: {character: Character}) {
  const likedCharacters = useSelector((state: RootState) => state.characters.likedCharacters)

  const isLiked =  likedCharacters.some(likedCharacter => likedCharacter.id === character.id)

  const dispatch = useAppDispatch()
  return (
    <div className={styles.card} onClick={() => dispatch(setSelectedCharacter(character))}>
        <h3 className={styles.name}>{character?.name}</h3>
      <Image
        src={character?.image ?? ''}
        alt="Character"
        width={145}
        height={145}
        className={styles.image}
      />
      <div className={styles.like} onClick={() => isLiked ? dispatch(removeLikedCharacter(character)) : dispatch(addLikedCharacter(character))} style={{cursor: 'pointer'}}>
        <Heart width={16} height={16} className={isLiked ? `${styles.heartIcon} ${styles.heartActive}` : styles.heartIcon} />
        <span>Like</span>
      </div>
    </div>
  )
}
