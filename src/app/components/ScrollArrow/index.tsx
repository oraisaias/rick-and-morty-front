'use client'

import styles from './ScrollArrow.module.css'
import Image from 'next/image'
interface ScrollArrowProps {
  direction: 'up' | 'down'
  onClick: () => void
  className?: string
}

export default function ScrollArrow({ direction, onClick, className }: ScrollArrowProps) {
  return (
    <button className={`${styles.arrow} ${className}`} onClick={onClick}>
      {direction === 'up' ?  <Image src="/images/icons/chevron-up.svg" alt="Arrow Up" width={16} height={16} /> : <Image src="/images/icons/chevron-down.svg" alt="Arrow Down" width={16} height={16} />}
    </button>
  )
}
