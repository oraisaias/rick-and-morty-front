import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/charactersSlice';
import favoritesReducer from './slices/favoritesSlice';
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch