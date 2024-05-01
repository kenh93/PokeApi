import React, { useState, useEffect } from 'react';
import Pokedex from "../assets/images/logo.png";
import { HeaderContainer, SwitchContainer, Toggle, ToggleBackground, ToggleThumb, LogoContainer } from './styles/HeaderStyles';

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? 'dark-theme' : 'light-theme';
    }, [darkMode]);

    const handleDarkModeChange = () => {
        setDarkMode(!darkMode);
    };

    const thumbLeft = darkMode ? '34px' : '3px';
    const iconTransform = darkMode ? 'translateX(-30px)' : 'translateX(1px)';

  return (
    <>
        <HeaderContainer>
            {/* <SwitchContainer>
                <Toggle onClick={handleDarkModeChange}>
                    <ToggleBackground />
                    <ToggleThumb style={{ left: thumbLeft }}>
                    <i className={`fas ${darkMode ? 'fa-moon' : 'fa-sun'}`} style={{ transform: iconTransform }}></i>
                    </ToggleThumb>
                </Toggle>
            </SwitchContainer> */}
            <LogoContainer>
                <div className="poke__logos noselect">
                    <img src={Pokedex} alt="pokelogo" className="poke__logo" />
                </div>
            </LogoContainer>
        </HeaderContainer>
    </>
  );
}
