'use client'

import { RootState, useAppDispatch } from '@/store'
import styles from './FavsBar.module.css'
import { useSelector } from 'react-redux'
import { removeLikedCharacter, setSelectedCharacter } from '@/store/slices/charactersSlice'
import { FaTrashAlt } from 'react-icons/fa'

export default function FavsBar({ show, setShow, className }: { show: boolean, setShow: (show: boolean) => void, className: string }) {
  const likedCharacters = useSelector((state: RootState) => state.characters.likedCharacters)
  const dispatch = useAppDispatch()
  if (likedCharacters.length === 0) {
    return null
  }
  return (
    <div className={`${styles.bar} ${show ? styles.show : styles.hide} ${className}`}>
      {likedCharacters.map((character) => (
        <div key={character.id} className={styles.item} onClick={() => {
          setShow(false)
          dispatch(setSelectedCharacter(character))
        }}>
          {character.name}

         <FaTrashAlt onClick={(e) => {
          e.stopPropagation()
          dispatch(removeLikedCharacter(character))
        }}  style={{cursor: 'pointer'}} />
        </div>
      ))}
    </div>
  )
}
