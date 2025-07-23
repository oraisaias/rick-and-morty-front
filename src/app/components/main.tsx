
// src/app/page.tsx
'use client'

import SearchBar from './SearchBar'
import styles from '../page.module.css'
import CharacterCard from './CharacterCard'
import CharacterDetail from './CharacterDetail'
import FavsBar from './FavsBar'
import FavsBarTab from './FavsBar/FavsBarTab'
import Image from 'next/image'
import ScrollArrow from './ScrollArrow'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useAppDispatch } from '@/store'
import { fetchCharacters } from '@/store/slices/charactersSlice'

export default function Main() {
  const gridRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  const scroll = (direction: 'up' | 'down') => {
    if (gridRef.current) {
      const scrollAmount = 200
      gridRef.current.scrollBy({
        top: direction === 'down' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      })
    }
  }
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
  const [showFavsBar, setShowFavsBar] = useState(false)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  return (
    <div className={styles.page}>
      {/* Fondo visual completo */}
      <div className={styles.background}>
        <div className={styles.backgroundImage} />
        {!isMobile && <div className={styles.greenGrass} />}
      </div>

      {/* Logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/images/logo/rickandmorty.png"
          alt="Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
      </div>

      {/* Contenido principal */}
      <div className={styles.content}>
        {isMobile && (
          <div className={styles.greenGrass}>
            <FavsBarTab
              className={styles.favsBarTab}
              onClick={() => {
                setShowFavsBar(!showFavsBar)
              }}
            />
            <FavsBar className={styles.favsBar} show={showFavsBar} setShow={setShowFavsBar} />
          </div>
        )}

        <div className={styles.detailSection}>
          {isMobile &&  <ScrollArrow
            direction="up"
            className={`${styles.arrowUp} ${styles.arrowUpMobile}`}
            onClick={() => scroll('up')}
          />}
          {isMobile && 
          <ScrollArrow
            direction="down"
            className={`${styles.arrowDown} ${styles.arrowDownMobile}`}
            onClick={() => scroll('down')}
          />}
          <CharacterDetail />
        </div>
        <div className={styles.listSection}>
          <div className={styles.searchWrapper}>
            <SearchBar />
          </div>
          {/* scroll arrows */}
          <div className={styles.arrowsContainer}>
            {!isMobile && (
              <div className={styles.scrollArrows}>
                <ScrollArrow
                  direction="up"
                  className={styles.arrowUp}
                  onClick={() => scroll('up')}
                />
                <ScrollArrow
                  direction="down"
                  className={styles.arrowDown}
                  onClick={() => scroll('down')}
                />
              </div>
            )}
            <div className={styles.cardGrid} ref={gridRef}>
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
            {!isMobile && (
              <div className={styles.favsBarContainer}>
                <FavsBarTab
                  className={styles.favsBarTab}
                  onClick={() => setShowFavsBar(!showFavsBar)}
                />
                <FavsBar className={styles.favsBar} show={showFavsBar} setShow={setShowFavsBar} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
