'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './MainLayout.module.css'
import { CardGrid, FavsBar, FavsBarTab, ScrollArrow, SearchBar, CharacterDetail } from '../'
import { useAppDispatch } from '@/store'
import {
  fetchCharacters,
  nextCharacter,
  previousCharacter,
} from '@/store/slices/charactersSlice'

export default function Layout() {
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
  const [showFavsBar, setShowFavsBar] = useState(false)
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])
  return (
    <div className={styles.page}>
      {/* Fondo visual completo */}
      <div className={styles.background}>
        <div className={styles.backgroundImage} />
        <div className={`${styles.greenGrass} ${styles.greenGrassShow}`} />
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
        <div className={`${styles.greenGrass} ${styles.greenGrassHide}`}>
          <FavsBarTab
            className={styles.favsBarTab}
            onClick={() => {
              setShowFavsBar(!showFavsBar)
            }}
          />
          <FavsBar className={styles.favsBar} show={showFavsBar} setShow={setShowFavsBar} />
        </div>
        <div className={styles.detailSection}>
          <div className={styles.scrollArrowsMobile}>
            <ScrollArrow
              direction="up"
              className={`${styles.arrowUp} ${styles.arrowUpMobile}`}
              onClick={() => dispatch(previousCharacter())}
            />
            <ScrollArrow
              direction="down"
              className={`${styles.arrowDown} ${styles.arrowDownMobile}`}
              onClick={() => dispatch(nextCharacter())}
            />
          </div>
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
            <CardGrid scrollRef={gridRef} />
            <div className={styles.favsBarContainer}>
              <FavsBarTab
                className={styles.favsBarTab}
                onClick={() => setShowFavsBar(!showFavsBar)}
              />
              <FavsBar className={styles.favsBar} show={showFavsBar} setShow={setShowFavsBar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
