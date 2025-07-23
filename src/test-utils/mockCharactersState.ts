import type { CharactersState } from '@/store/slices/charactersSlice'

export const mockCharactersState: CharactersState = {
  items: [
    {
      id: 1,
      name: 'Rick',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/1',
      },
      episode: [],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: new Date().toISOString(),
  },
    {
      id: 2,
      name: 'Morty',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth', url: '' },
      location: { name: 'Earth', url: '' },
      episode: [],
      url: '',
      created: '',
    },
  ],
  selectedCharacter: null,
  likedCharacters: [],
  searchResults: [],
  loading: false,
  error: null,
}