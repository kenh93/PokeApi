// src/App.js

import React from 'react';
import PokemonList from './components/PokemonList';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Header } from './components/Header';
import Filters from './components/Filters';
import Footer from './components/Footer';
// import { Footer } from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Filters />
      <Routes>
        <Route path="/" element={<PokemonList />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
