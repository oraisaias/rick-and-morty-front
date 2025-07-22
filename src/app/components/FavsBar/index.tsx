'use client'

import { useEffect } from 'react'
import styles from './FavsBar.module.css'

export default function FavsBar({ show, setShow }: { show: boolean, setShow: (show: boolean) => void }) {
  const favorites = ['RICK', 'MORTY', 'SUMMER', 'PICKLE RICK']
  return (
    <div className={`${styles.bar} ${show ? styles.show : styles.hide}`}>
      {favorites.map((name) => (
        <div key={name} className={styles.item} onClick={() => setShow(false)}>
          {name}
        </div>
      ))}
    </div>
  )
}
