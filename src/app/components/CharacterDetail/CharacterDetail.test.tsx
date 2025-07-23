
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import CharacterDetail from './index'
import { mockCharactersState } from '@/test-utils/mockCharactersState'
import { createMockStore } from '@/test-utils/createMockStore'

describe('CharacterDetail', () => {
  test('CharacterDetail renders', () => {
    const store = createMockStore({ characters: mockCharactersState  })
    const character = store.getState().characters.items[0]
    render(
        <Provider store={store}>
            <CharacterDetail selectedCharacter={character} />
        </Provider>,
    )
    expect(screen.getByRole('heading', { level: 2, name: 'Rick' })).toBeDefined()
  })
  test('Origin label is rendered', () => {
    expect(screen.getByTestId('origin-label')).toBeDefined()
  })
  test('Origin value is rendered', () => {
    expect(screen.getByTestId('origin-value')).toBeDefined()
  })
})