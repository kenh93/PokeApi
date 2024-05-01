import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Toggle = styled.div`
  position: relative;
  width: 65px;
  height: 30px;
  margin-left: auto;
  border-radius: 30px;
  background: var(--toggle);
  cursor: pointer;
`;

export const ToggleBackground = styled.div`
  width: 65px;
  height: 30px;
  border-radius: 30px;
  background: var(--toggle);
`;

export const ToggleThumb = styled.div`
  position: absolute;
  top: 2px;
  transition: left 0.5s;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 0 auto;

  margin-top: 50px;
  width: 20vw;
  -webkit-filter: drop-shadow(5px 0px 0px rgba(0,0,0,0.6));
  filter: drop-shadow(5px 0px 0px rgba(0,0,0,0.6));

`;