import React from 'react';
import { HeaderStyle, HeaderTop, SearchBar, SettingsIcon, Logo, Button } from './styles';
import Nav from '../Nav';
import logo from '../../assets/images/logo.png';
import settingsIcon from '../../assets/images/settingsIcon.png';

const HeaderComponent = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderStyle>
      <HeaderTop>
        <h1><Logo src={logo} alt="Logo DevFlix" /></h1>
        <div>
          <SearchBar type="text" placeholder="Pesquisar" />
          <Button><SettingsIcon src={settingsIcon} alt="Configuração" /></Button>
        </div>
      </HeaderTop>
      <Nav onNavClick={scrollToSection} />
    </HeaderStyle>
  );
};

export default HeaderComponent;
