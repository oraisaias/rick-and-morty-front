'use client'

import styles from './FavsBar.module.css'

export default function FavsBar() {
  const favorites = ['RICK', 'MORTY', 'SUMMER', 'PICKLE RICK']

  return (
    <div className={styles.bar}>
      {favorites.map((name) => (
        <div key={name} className={styles.item}>
          {name}
        </div>
      ))}
    </div>
  )
}
