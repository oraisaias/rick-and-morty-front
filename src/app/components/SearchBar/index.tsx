'use client'

import styles from './SearchBar.module.css'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  const [query, setQuery] = useState('')

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
    </div>
  )
}
