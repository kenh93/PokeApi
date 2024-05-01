import React, { useState }  from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { colorTypeGradients } from '../utils/utils';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import PokemonDetailsModal from './PokemonDetailsModal';
import {
  ThumbnailContainer,
  CardHeader,
  PokeNumber,
  ImageContainer,
  PokeName,
  TypeBackground,
  PokeTypeContainer,
  TypeImage
} from './styles/PokemonCardStyles'

const PokemonCard = React.memo(({ pokemon }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleElementClick = (event) => {
    event.stopPropagation(); 
    handleOpen();
  };

  let finalColor;
    if (pokemon.types.length === 2) {
        finalColor = colorTypeGradients(pokemon.types[0].type.name, pokemon.types[1].type.name, pokemon.types.length);
    } else {
        finalColor = colorTypeGradients(pokemon.types[0].type.name, pokemon.types[0].type.name, pokemon.types.length);
    }

  return (
    <>
      <ThumbnailContainer onClick={handleOpen} style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})` }}>
        <CardHeader>
          <PokeNumber>#{String(pokemon.id).padStart(3, '0')}</PokeNumber>
        </CardHeader>
        <ImageContainer>
          <LazyLoadImage
            alt="image-pokemon"
            height={150}
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
            visibleByDefault={false}
            delayMethod={'debounce'}
            effect="blur"
          />
        </ImageContainer>
        <PokeName>{pokemon.name}
          <PokeTypeContainer>
            {pokemon.types.map((type) =>
              <Tooltip TransitionComponent={Zoom} key={type.type.name} title={type.type.name} arrow>
                <TypeBackground type={type.type.name}>
                  <TypeImage src={`${type.type.name}.png`} alt={`${type.type.name} type`} />
                </TypeBackground>
              </Tooltip>
            )}
          </PokeTypeContainer>
        </PokeName>
      </ThumbnailContainer>

      <PokemonDetailsModal
      open={open}
      handleClose={handleClose}
      pokemon={pokemon}
      />
    </>
    
  );
});

export default PokemonCard;
