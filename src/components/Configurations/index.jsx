import React, { useState } from 'react';
import { ModalOverlay, ModalContainer, CloseButton, Config, IconContainer, IconItem, IconText, IconButton } from './styles';
import themeIcon from '../../assets/images/theme.png';
import languagesIcon from '../../assets/images/languages.png';
import SwitchButton from '../SwitchButton';

const Configurations = ({ isOpen, onClose }) => {
  const [language, setLanguage] = useState('pt');
  const [theme, setTheme] = useState('light');

  if (!isOpen) return null;

  const handleLanguageChange = () => {
    setLanguage(prevLanguage => (prevLanguage === 'pt' ? 'en' : 'pt'));
  };

  const handleThemeChange = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Config>Configurações</Config>
        <IconContainer>
          <IconItem>
            <IconButton>
              <img src={themeIcon} alt="Tema" />
            </IconButton>
            <SwitchButton onClick={handleThemeChange} />
            <IconText>{theme === 'light' ? 'Modo Claro' : 'Modo Escuro'}</IconText>
          </IconItem>
          <IconItem>
            <IconButton>
              <img src={languagesIcon} alt="Idiomas" />
            </IconButton>
            <SwitchButton onClick={handleLanguageChange} />
            <IconText>{language === 'pt' ? 'Português' : 'English'}</IconText>
          </IconItem>
        </IconContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Configurations;