'use client'

import styles from './CharacterCard.module.css'
import Image from 'next/image'
import Heart from './heart.svg'
import React, { useState } from 'react';
export default function CharacterCard() {
  const [liked, setLiked] = useState(false);
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
      <div className={styles.like} onClick={() => setLiked(l => !l)} style={{cursor: 'pointer'}}>
        <Heart width={16} height={16} className={liked ? `${styles.heartIcon} ${styles.heartActive}` : styles.heartIcon} />
        <span>Like</span>
      </div>
    </div>
  )
}
