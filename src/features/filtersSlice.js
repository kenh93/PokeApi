import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    region: '',
    type: '',
    sortBy: '',
    search: '',
    limit: 151,
    offset: 0,
    regions: [
      { name: "Kanto", limit: 151, offset: 0 },
      { name: "Johto", limit: 100, offset: 151 },
      { name: "Hoenn", limit: 135, offset: 251 },
      { name: "Sinnoh", limit: 108, offset: 386 },
      { name: "Unova", limit: 155, offset: 494 },
      { name: "Kalos", limit: 72, offset: 649 },
      { name: "Alola", limit: 88, offset: 721 },
      { name: "Galar", limit: 89, offset: 809 }
    ],
    types: ["all types", "grass", "bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"],
    sortby: ["ID", "Name"]
  };
  

export const filtersSlice = createSlice({
    name: 'filters',
  initialState,
  reducers: {
    setRegion: (state, action) => { state.region = action.payload; },
    setType: (state, action) => { state.type = action.payload; },
    setSortBy: (state, action) => { state.sortBy = action.payload; },
    setSearch: (state, action) => { state.search = action.payload; },
    setLimit: (state, action) => { state.limit = action.payload.limit; state.offset = action.payload.offset; }
  },
});

export const { setRegion, setType, setSortBy, setSearch, setLimit } = filtersSlice.actions;
export default filtersSlice.reducer;