import { RootState } from '@/store'
import CharacterCard from '../CharacterCard'
import styles from './MainLayout.module.css'
import { memo } from 'react'
import { useSelector } from 'react-redux'

interface CardGridProps {
  scrollRef?: React.RefObject<HTMLDivElement | null>
}

const CardGridComponent = ({ scrollRef }: CardGridProps) => {
  const characters = useSelector((state: RootState) => state.characters.items)
  const searchResults = useSelector((state: RootState) => state.characters.searchResults)
  const itemsToRender = searchResults.length > 0 ? searchResults : characters

  return (
    <div className={styles.cardGrid} ref={scrollRef} data-testid="card-grid">
      {itemsToRender?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export const CardGrid = memo(CardGridComponent)
