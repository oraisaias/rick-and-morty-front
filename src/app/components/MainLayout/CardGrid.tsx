import CharacterCard from '../CharacterCard'
import styles from './MainLayout.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { memo } from 'react'

interface CardGridProps {
  scrollRef?: React.RefObject<HTMLDivElement | null>
}

const CardGridComponent = ({ scrollRef }: CardGridProps) => {
  const characters = useSelector((state: RootState) => state.characters.items)
  const searchResults = useSelector((state: RootState) => state.characters.searchResults)

  const itemsToRender = searchResults.length > 0 ? searchResults : characters

  return (
    <div className={styles.cardGrid} ref={scrollRef}>
      {itemsToRender.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export const CardGrid = memo(CardGridComponent)
