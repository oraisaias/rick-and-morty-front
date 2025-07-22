// src/app/page.tsx
'use client'
import SearchBar from './components/SearchBar'
import styles from './page.module.css'
import CharacterCard from './components/CharacterCard'
import CharacterDetail from './components/CharacterDetail'
import FavsBar from './components/FavsBar'
import FavsBarTab from './components/FavsBar/FavsBarTab'
import Image from 'next/image'
import ScrollArrow from './components/ScrollArrow'
import { useRef, useState } from 'react'

export default function Home() {
  const gridRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'up' | 'down') => {
    if (gridRef.current) {
      const scrollAmount = 200
      gridRef.current.scrollBy({
        top: direction === 'down' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const [showFavsBar, setShowFavsBar] = useState(false)

  return (
    <div className={styles.page}>
      {/* Fondo visual completo */}
      <div className={styles.background}>
        <div className={styles.backgroundImage} />
        <div className={styles.greenGrass} />
      </div>
      <div className={styles.logoContainer}>
        <Image
          src="/images/logo/rickandmorty.png"
          alt="Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
      </div>
      {/* Contenedor central negro */}
      <div className={styles.content}>
        {/* Aquí insertaremos componentes luego */}
        <div className={styles.detailSection}>
          <CharacterDetail />
        </div>
        <div className={styles.listSection}>
          <div className={styles.searchWrapper}>
            <SearchBar />
          </div>
          {/* scroll arrows */}
          <div className={styles.arrowsContainer}>
            <div className={styles.scrollArrows}>
              <ScrollArrow direction="up" className={styles.arrowUp} onClick={() => scroll('up')} />
              <ScrollArrow
                direction="down"
                className={styles.arrowDown}
                onClick={() => scroll('down')}
              />
            </div>
            <div className={styles.cardGrid} ref={gridRef}>
              {/* Por ahora 4 tarjetas estáticas, luego haremos mapping */}
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
            </div>
            <FavsBarTab onClick={() => setShowFavsBar(!showFavsBar)} />
            <FavsBar show={showFavsBar} setShow={setShowFavsBar} />
          </div>
        </div>
      </div>
    </div>
  )
}
