'use client'

import Image from 'next/image'
import styles from './CharacterDetail.module.css'
import { Character } from 'rickmortyapi'

interface CharacterDetailProps {
  selectedCharacter: Character | null
}

export default function CharacterDetail({ selectedCharacter }: CharacterDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <Image
          src={
            selectedCharacter?.status === 'Alive'
              ? '/images/icons/live-icon.png'
              : '/images/icons/dead-icon.png'
          }
          aria-label="Live"
          alt="Live"
          width={15}
          height={15}
        />
        <span className={styles.statusText}>{selectedCharacter?.status}</span>
      </div>

      <Image
        src={selectedCharacter?.image ?? 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        alt="Character"
        aria-label="Character image"
        width={300}
        height={400}
        className={styles.image}
      />

      <section aria-labelledby="character-name" className={styles.infoOverlay}>
        <header className={styles.infoOverlayContent}>
          <h2 id="character-name" className={styles.name}>{selectedCharacter?.name}</h2>
          <p className={styles.subinfo}>{selectedCharacter?.species}</p>
        </header>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span data-testid="origin-label" className={styles.label}>Origin</span>
            <span data-testid="origin-value" className={styles.value}>{selectedCharacter?.origin?.name}</span>
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
      </section>
    </div>
  )
}
