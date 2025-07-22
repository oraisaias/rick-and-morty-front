'use client'

import styles from '../FavsBar.module.css'

export default function FavsBarTab({ onClick }: { onClick: () => void }) {
  return <div className={styles.tab} onClick={onClick}>FAVS</div>
}
