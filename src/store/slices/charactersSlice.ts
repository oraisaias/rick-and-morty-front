// src/store/slices/charactersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCharacters } from 'rickmortyapi'

type Character = {
  id: number
  name?: string
}
  
  interface CharactersState {
    items: Character[]
    loading: boolean
    error: string | null
  }

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    console.log("fetching characters")
    const response = await getCharacters()
    console.log("response", response)
    // La API retorna { data: { results: [...] }, ... }
    return response.data.results
  }
)
const initialState: CharactersState = {
    items: [],
    loading: false,
    error: null
  }
const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.items = action.payload ?? []
        state.loading = false
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Error fetching characters'
      })
  }
})

export default charactersSlice.reducer