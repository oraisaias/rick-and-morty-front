'use client'

import styles from './ScrollArrow.module.css'
import ChevronUp from './chevron-up.svg';
import ChevronDown from './chevron-down.svg';
interface ScrollArrowProps {
  direction: 'up' | 'down'
  onClick: () => void
  className?: string
}

export default function ScrollArrow({ direction, onClick, className }: ScrollArrowProps) {
  return (
    <button className={`${styles.arrow} ${className}`} onClick={onClick}>
      {direction === 'up'
        ? <ChevronUp width={16} height={16} />
        : <ChevronDown width={16} height={16} />
      }
    </button>
  )
}
