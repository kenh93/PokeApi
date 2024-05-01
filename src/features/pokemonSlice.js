import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../services/pokeApi';

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async ({ limit, offset }) => {
  const response = await instance.get(`?limit=${limit}&offset=${offset}`);
  return response.data.results;
});

export const fetchPokemonDetails = createAsyncThunk('pokemon/fetchPokemonDetails', async (pokemonName) => {
  const requests = pokemonName.map(name => instance.get(`/${name}`));
  const responses = await Promise.all(requests);
  return responses.map(response => response.data);
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    allPokemons: [],
    pokemonDetails: {},
    searchPokemons: [],
    filterPokemons: [],
    evoChain: [],
    loading: false,
    error: null,
    status: 'idle',
  },
  reducers: {
    clearPokemonDetails: (state) => {
      state.pokemonDetails = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.allPokemons = action.payload;
        state.loading = false;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        action.payload.forEach(pokemon => {
          state.pokemonDetails[pokemon.id] = pokemon;
        });
        state.loading = false;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearPokemonDetails } = pokemonSlice.actions;
export default pokemonSlice.reducer;
