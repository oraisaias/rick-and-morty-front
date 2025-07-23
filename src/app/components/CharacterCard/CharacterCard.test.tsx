import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import CharacterCard from './index'
import { Provider } from 'react-redux'
import { vi } from 'vitest'
import { createMockStore } from '@/test-utils/createMockStore'
import { mockCharactersState } from '@/test-utils/mockCharactersState'

vi.mock('./heart.svg', () => ({
  default: () => <svg data-testid="mock-heart" />,
}))

describe('CharacterCard', () => {
  test('CharacterCard renders', () => {
    const store = createMockStore({ characters: mockCharactersState  })   
    const character = store.getState().characters.items[0]
    render(
      <Provider store={store}>
        <CharacterCard character={character} />
      </Provider>,
    )
   
    expect(screen.getByRole('heading', { level: 3, name: 'Rick' })).toBeDefined()
     const likeButton = screen.getByText('Like')

    expect(likeButton).toBeDefined()

    fireEvent.click(likeButton)
    expect(store.getState().characters.likedCharacters.length).toBe(1)
    fireEvent.click(likeButton)
    expect(store.getState().characters.likedCharacters.length).toBe(0)
  })

  test('Like button is rendered', () => {
    expect(screen.getByText('Like')).toBeDefined()
  })

  test('Like button is clicked', () => {
    const likeButton = screen.getByText('Like')
    fireEvent.click(likeButton)
    expect(screen.getByText('Like')).toBeDefined()
  })
})
