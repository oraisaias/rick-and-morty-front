import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import {CardGrid} from './CardGrid'

import { createMockStore } from '@/test-utils/createMockStore'
import { mockCharactersState } from '@/test-utils/mockCharactersState'
import { describe, expect, test } from 'vitest'
import { vi } from 'vitest'
vi.mock('../CharacterCard/heart.svg', () => ({
  default: () => <svg data-testid="mock-heart" />
}))

describe('CardGrid', () => {
  test('renders character names from the store', () => {
    const store = createMockStore({ characters: mockCharactersState  })   
    render(
      <Provider store={store}>
        <CardGrid />
      </Provider>
    )
    expect(screen.getByTestId('card-grid')).toBeTruthy()
    expect(screen.getByText('Rick')).toBeTruthy()
    expect(screen.getByText('Morty')).toBeTruthy()
    expect(screen.getAllByRole('button').length).toBe(2)
  })


}) 