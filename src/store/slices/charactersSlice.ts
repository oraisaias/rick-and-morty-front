// src/store/slices/charactersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Character, getCharacters } from 'rickmortyapi'


  
  interface CharactersState {
    items: Character[],
    selectedCharacter: Character | null,
    likedCharacters: Character[],
    searchResults: Character[],
    loading: boolean
    error: string | null
  }

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await getCharacters()
    return response.data.results
  }
)
const initialState: CharactersState = {
    items: [],
    selectedCharacter: null,
    searchResults: [],
    likedCharacters: [],
    loading: false,
    error: null
  }
const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSelectedCharacter: (state, action) => {
      state.selectedCharacter = action.payload
    },
    addLikedCharacter: (state, action) => {
      if (state.likedCharacters.length < 4) {
        state.likedCharacters.push(action.payload)
      }
    },
    removeLikedCharacter: (state, action) => {
      state.likedCharacters = state.likedCharacters.filter(character => character.id !== action.payload.id)
    },
    nextCharacter: (state) => {
      state.selectedCharacter = state.items[state.selectedCharacter?.id ?? 0 + 1] ?? null
    },
    previousCharacter: (state) => {
      state.selectedCharacter = state.items[state.selectedCharacter?.id ?? 0 - 1] ?? null
    },
    searchCharacter: (state, action) => {
      const characters = state.items.filter(character => character.name.toLowerCase().includes(action.payload.toLowerCase()))
      if (characters.length > 0) {
        if (characters.length === 1) {
          state.selectedCharacter = characters[0]
        }
        state.searchResults = characters
      } else {
        state.searchResults = []
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.items = action.payload ?? []
        state.selectedCharacter = action.payload?.[0] ?? null
        state.loading = false
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Error fetching characters'
      })
  }
})

export const { setSelectedCharacter, addLikedCharacter, removeLikedCharacter, nextCharacter, previousCharacter, searchCharacter } = charactersSlice.actions
export default charactersSlice.reducer