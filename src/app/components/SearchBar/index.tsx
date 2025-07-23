'use client'

import { searchCharacter } from '@/store/slices/charactersSlice'
import styles from './SearchBar.module.css'
import { useState, useEffect } from 'react'
import { FaSearch, FaRegUser } from 'react-icons/fa'
import { useAppDispatch } from '@/store'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState(query)
  const dispatch = useAppDispatch()
  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 1000) // 500ms de espera

    return () => {
      clearTimeout(handler)
    }
  }, [query])

  useEffect(() => {
    // Aquí puedes hacer la búsqueda o dispatch
    console.log({debouncedQuery})
      dispatch(searchCharacter(debouncedQuery))
  }, [debouncedQuery, dispatch])

  return (
    <div className={styles.container}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        placeholder="Find your character..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <FaRegUser className={styles.userIcon} />
    </div>
  )
}
