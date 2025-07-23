import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from '@/store/slices/charactersSlice'
import type { CharactersState } from '@/store/slices/charactersSlice'

export function createMockStore(preloadedState: { characters: CharactersState }) {
  return configureStore({
    reducer: { characters: charactersReducer },
    preloadedState,
  })
} 