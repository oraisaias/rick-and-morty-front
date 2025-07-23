// src/store/slices/charactersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Character, getCharacters } from 'rickmortyapi'


  
  interface CharactersState {
    items: Character[],
    selectedCharacter: Character | null,
    likedCharacters: Character[],
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
      state.likedCharacters.push(action.payload)
    },
    removeLikedCharacter: (state, action) => {
      state.likedCharacters = state.likedCharacters.filter(character => character.id !== action.payload.id)
    },
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

export const { setSelectedCharacter, addLikedCharacter, removeLikedCharacter } = charactersSlice.actions
export default charactersSlice.reducer