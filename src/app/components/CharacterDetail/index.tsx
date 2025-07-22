'use client'

import styles from './CharacterDetail.module.css'
import Image from 'next/image'

export default function CharacterDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <Image src="/images/icons/live-icon.png" alt="Live" width={15} height={15} />
        <span className={styles.statusText}>LIVE</span>
      </div>

      <Image
        src="/images/rick.jpg"
        alt="Character"
        width={300}
        height={400}
        className={styles.image}
      />

      <div className={styles.infoOverlay}>
        <div className={styles.infoOverlayContent}> 
        <h3 className={styles.name}>Rick Sánchez</h3>
        <p className={styles.subinfo}>Human R Toxic Side</p>
        </div>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.label}>Origin</span>
            <span className={styles.value}>Alien Spa</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Location</span>
            <span className={styles.value}>Earth</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Gender</span>
            <span className={styles.value}>Male</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Episodes</span>
            <span className={styles.value}>132</span>
          </div>
        </div>
      </div>
    </div>
  )
}
