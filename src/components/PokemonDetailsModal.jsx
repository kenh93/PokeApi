import React from 'react';
import { Modal, Box, Typography, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  maxwidth: '800px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  overflow: 'auto',
  textTransform: 'capitalize'
};

const textCapitalizeStyle = {
  textTransform: 'capitalize'
};

const PokemonDetailsModal = ({ open, handleClose, pokemon }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="pokemon-modal-title"
      aria-describedby="pokemon-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        <CloseIcon />
        </IconButton>
        <Typography id="pokemon-modal-title" variant="h6" component="h2">
          {pokemon.name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
              alt={`${pokemon.name} official artwork`}
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Height: {pokemon.height} dm
            </Typography>
            <Typography variant="body1">
              Weight: {pokemon.weight} hg
            </Typography>
            <Typography variant="body1">
              Base Experience: {pokemon.base_experience}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Abilities:
            </Typography>
            <ul>
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Stats:
            </Typography>
            <ul>
              {pokemon.stats.map((stat, index) => (
                <li key={index}>{`${stat.stat.name}: ${stat.base_stat}`}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default PokemonDetailsModal;
