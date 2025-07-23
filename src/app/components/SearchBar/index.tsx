'use client'

import { useEffect, useState } from 'react'
import { FaRegUser, FaSearch } from 'react-icons/fa'

import { useDebounce } from '@/hooks/useDebounce'
import { useAppDispatch } from '@/store'
import { searchCharacter } from '@/store/slices/charactersSlice'

import styles from './SearchBar.module.css'

export default function SearchBar() {
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 1000)

  useEffect(() => {
      dispatch(searchCharacter(debouncedQuery))
  }, [debouncedQuery, dispatch])

  return (
    <div className={styles.container}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        aria-label="Search characters"
        placeholder="Find your character..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <FaRegUser className={styles.userIcon} />
    </div>
  )
}
