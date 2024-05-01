import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemonSlice';
import filterReducer from '../features/filtersSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    filters: filterReducer
  },
});
