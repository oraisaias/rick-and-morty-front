'use client'

import styles from './ScrollArrow.module.css'
import ChevronUp from './chevron-up.svg';
import ChevronDown from './chevron-down.svg';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
interface ScrollArrowProps {
  direction: 'up' | 'down'
  onClick: () => void
  className?: string
}

export default function ScrollArrow({ direction, onClick, className }: ScrollArrowProps) {
  const searchResults = useSelector((state: RootState) => state.characters.searchResults)
  const isOnlyOneResult = searchResults.length === 1 
  if (isOnlyOneResult) {
    return null
  }
  return (
    <button role="button" aria-label={`Scroll ${direction}`} className={`${styles.arrow} ${className}`} onClick={onClick}>
      {direction === 'up'
        ? <ChevronUp width={16} height={16} />
        : <ChevronDown width={16} height={16} />
      }
    </button>
  )
}
