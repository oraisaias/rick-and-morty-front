
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
import { RootState, useAppDispatch } from '@/store'
import { fetchCharacters, nextCharacter, previousCharacter } from '@/store/slices/charactersSlice'
import { useSelector } from 'react-redux'

export default function Main() {
  const gridRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const characters = useSelector((state: RootState) => state.characters.items)
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
  const searchResults = useSelector((state: RootState) => state.characters.searchResults)
  const isOnlyOneResult = searchResults.length === 1 
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
          {isMobile && !isOnlyOneResult &&  <ScrollArrow
            direction="up"
            className={`${styles.arrowUp} ${styles.arrowUpMobile}`}
            onClick={() => dispatch(previousCharacter())}
          />}
          {isMobile && !isOnlyOneResult && 
          <ScrollArrow
            direction="down"
            className={`${styles.arrowDown} ${styles.arrowDownMobile}`}
            onClick={() => dispatch(nextCharacter())}
          />}
          <CharacterDetail />
        </div>
        <div className={styles.listSection}>
          <div className={styles.searchWrapper}>
            <SearchBar />
          </div>
          {/* scroll arrows */}
          <div className={styles.arrowsContainer}>
            {!isMobile && !isOnlyOneResult && (
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
              {searchResults.length > 0 ? (
                searchResults.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))
              ) : (
                characters.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))
              )}
             
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
