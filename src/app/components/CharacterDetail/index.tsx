'use client'

import styles from './CharacterDetail.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export default function CharacterDetail() {
  const selectedCharacter = useSelector((state: RootState) => state.characters.selectedCharacter)
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <Image
          src={
            selectedCharacter?.status === 'Alive'
              ? '/images/icons/live-icon.png'
              : '/images/icons/dead-icon.png'
          }
          alt="Live"
          width={15}
          height={15}
        />
        <span className={styles.statusText}>{selectedCharacter?.status}</span>
      </div>

      <Image
        src={selectedCharacter?.image ?? 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        alt="Character"
        width={300}
        height={400}
        className={styles.image}
      />

      <div className={styles.infoOverlay}>
        <div className={styles.infoOverlayContent}>
          <h3 className={styles.name}>{selectedCharacter?.name}</h3>
          <p className={styles.subinfo}>{selectedCharacter?.species}</p>
        </div>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.label}>Origin</span>
            <span className={styles.value}>{selectedCharacter?.origin?.name}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Location</span>
            <span className={styles.value}>{selectedCharacter?.location?.name}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Gender</span>
            <span className={styles.value}>{selectedCharacter?.gender}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.label}>Episodes</span>
            <span className={styles.value}>{selectedCharacter?.episode.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
