import styled from 'styled-components';

// Definir los colores como un objeto para fácil acceso
const colors = {
  grass: '#5FBD58',
  bug: '#92BC2C',
  dark: '#595761',
  dragon: '#0C69C8',
  electric: '#F2D94E',
  fairy: '#EE90E6',
  fighting: '#D3425F',
  fire: '#dc872f',
  flying: '#A1BBEC',
  ghost: '#5F6DBC',
  ground: '#DA7C4D',
  ice: '#75D0C1',
  normal: '#A0A29F',
  poison: '#B763CF',
  psychic: '#ff2ca8',
  rock: '#a38c21',
  steel: '#5695A3',
  water: '#539DDF',
  pokename: '#000',
  cardborder: '#fff',
  pokenumber: 'hsl(228, 28%, 20%)',
  info: '#fff'
};

// Componente ThumbnailContainer con estilos basados en props
export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  margin: 30px;
  border-radius: 20px;
  min-width: 280px;
  height: 500px;
  text-align: center;
  box-shadow: 0 1.6px 1.6px rgba(0, 0, 0, 0.023), 0 3.8px 3.8px rgba(0, 0, 0, 0.034), 0 6.9px 6.9px rgba(0, 0, 0, 0.041), 0 11.4px 11.4px rgba(0, 0, 0, 0.049), 0 18.8px 18.8px rgba(0, 0, 0, 0.056), 0 32.8px 32.8px rgba(0, 0, 0, 0.067), 0 71px 71px rgba(0, 0, 0, 0.09);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardHeader = styled.div`
  width: 100%; // Asegura que tome todo el ancho disponible del contenedor padre
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem; // Ajusta el padding según necesites
`;

// Componente para los nombres de Pokémon
export const PokeName = styled.h3`
  font-family: 'Press Start 2P', cursive;
  margin-bottom: 0.2rem;
  color: ${colors.pokename};
  text-transform: capitalize;
`;

// Componente para números de Pokémon
export const PokeNumber = styled.span`
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  font-weight: 400;
  font-size: 35px;
  color: ${colors.pokenumber};
  font-family: 'Teko', sans-serif;
`;

export const ImageContainer = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Componente para tipos de Pokémon con estilos dinámicos basados en props
export const TypeBackground = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => colors[props.type]};
  box-shadow: 0 0 20px ${props => colors[props.type]};
`;

export const TypeImage = styled.img`
  width: 20px;
  height: 20px;
`;

// Estilos para el contenedor de tipos de Pokémon
export const PokeTypeContainer = styled.div`
  display: flex;
  grid-gap: 0 10px; // Ajuste para la compatibilidad
  gap: 0 20px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

// Ahora puedes usar estos componentes en tu componente de React
