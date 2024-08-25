import React, { useState } from 'react';
import { HeaderStyle, HeaderTop, SearchBar, SettingsIcon, Logo, Button } from './styles';
import logo from '../../assets/images/logo.png';
import settingsIcon from '../../assets/images/settingsIcon.png';
import Configurations from '../Configurations';

const HeaderComponent = () => {
  const [isConfigurationsOpen, setIsConfigurationsOpen] = useState(false);

  const toggleConfigurations = () => {
    setIsConfigurationsOpen(prevState => !prevState);
  };

  return (
    <HeaderStyle>
      <HeaderTop>
        <h1><Logo src={logo} alt="Logo DevFlix" /></h1>
        <div>
          <SearchBar type="text" placeholder="Pesquisar" />
          <Button onClick={toggleConfigurations}>
            <SettingsIcon src={settingsIcon} alt="Configuração" />
          </Button>
        </div>
      </HeaderTop>
      <Configurations isOpen={isConfigurationsOpen} onClose={toggleConfigurations} />
    </HeaderStyle>
  );
};

export default HeaderComponent;
