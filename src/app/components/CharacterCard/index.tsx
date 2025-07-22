'use client'

import styles from './CharacterCard.module.css'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'

export default function CharacterCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>RICK</h3>
      <Image
        src="/images/backgrounds/background.jpg"
        alt="Character"
        width={145}
        height={145}
        className={styles.image}
      />
      <div className={styles.like}>
        <FaHeart className={styles.heartIcon} />
        <span>Like</span>
      </div>
    </div>
  )
}
