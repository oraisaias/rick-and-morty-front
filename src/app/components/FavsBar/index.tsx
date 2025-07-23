'use client'

import styles from './FavsBar.module.css'

export default function FavsBar({ show, setShow, className }: { show: boolean, setShow: (show: boolean) => void, className: string }) {
  const favorites = ['RICK', 'MORTY', 'SUMMER', 'PICKLE RICK']
  return (
    <div className={`${styles.bar} ${show ? styles.show : styles.hide} ${className}`}>
      {favorites.map((name) => (
        <div key={name} className={styles.item} onClick={() => {
          console.log('clicked')
          setShow(false)
        }}>
          {name}
        </div>
      ))}
    </div>
  )
}
