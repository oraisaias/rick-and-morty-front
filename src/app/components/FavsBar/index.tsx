'use client'
import { useSelector } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'
import { RootState, useAppDispatch } from '@/store'
import {
  removeLikedCharacter,
  setSelectedCharacter,
} from '@/store/slices/charactersSlice'
import styles from './FavsBar.module.css'
import { Character } from 'rickmortyapi'

export default function FavsBar({ show, setShow, className }: { show: boolean, setShow: (show: boolean) => void, className: string }) {
  const likedCharacters = useSelector((state: RootState) => state.characters.likedCharacters)
  const dispatch = useAppDispatch()
  const handleSelect = (character: Character) => {
    setShow(false)
    dispatch(setSelectedCharacter(character))
  }
  const handleRemove = (e: React.MouseEvent, character: Character) => {
    e.stopPropagation()
    dispatch(removeLikedCharacter(character))
  }
  return likedCharacters.length === 0 ? null : (
    <div className={`${styles.bar} ${show ? styles.show : styles.hide} ${className}`}>
      {likedCharacters.map((character) => (
        <div key={character.id} className={styles.item} onClick={() => handleSelect(character)}>
          {character.name}
         <FaTrashAlt onClick={(e) => handleRemove(e, character)} style={{cursor: 'pointer'}} />
        </div>
      ))}
    </div>
  )
}
