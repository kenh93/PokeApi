import React, { useEffect, useMemo } from 'react';
import Grid from '@mui/material/Grid';
import PokemonCard from './PokemonCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons, fetchPokemonDetails } from '../features/pokemonSlice';
import { clearPokemonDetails } from '../features/pokemonSlice';

const PokemonList = () => {
  const dispatch = useDispatch();
  const { limit, offset, type: typeFilter, search: searchFilter, sortBy } = useSelector(state => state.filters);
  const pokemons = useSelector((state) => state.pokemon.allPokemons);
  const pokemonsDetails = useSelector((state) => state.pokemon.pokemonDetails);

  useEffect(() => {
    dispatch(fetchPokemons({ limit, offset }));
  }, [dispatch, limit, offset]);

  useEffect(() => {
    if (pokemons.length > 0) {
      dispatch(clearPokemonDetails());
      const pokemonNames = pokemons.map(pokemon => pokemon.name);
      dispatch(fetchPokemonDetails(pokemonNames));
    }
  }, [dispatch, pokemons]);

  const filteredAndSortedPokemons = useMemo(() => {
    let filtered = Object.values(pokemonsDetails);
    if (typeFilter && typeFilter !== "all types") {
      filtered = filtered.filter(pokemon => pokemon.types.some(typeInfo => typeInfo.type.name === typeFilter));
    }
    if (searchFilter) {
      filtered = filtered.filter(pokemon => pokemon.name.toLowerCase().includes(searchFilter.toLowerCase()));
    }
    if (sortBy === "Name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "ID") {
      filtered.sort((a, b) => a.id - b.id);
    }
    return filtered;
  }, [pokemonsDetails, typeFilter, searchFilter, sortBy]);
  
  return (
    <Grid container spacing={2}>
    {filteredAndSortedPokemons.map((pokemon) => (
        <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
  </Grid>
  );
};

export default PokemonList;
