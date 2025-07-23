'use client'

import styles from '../FavsBar.module.css'

export default function FavsBarTab({ onClick, className }: { onClick: () => void, className: string }) {
  return <div className={`${styles.tab} ${className}`} onClick={onClick}>FAVS</div>
}
