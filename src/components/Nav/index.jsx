import React from 'react';
import { Nav, NavItem } from './styles';

const NavComponent = ({ onNavClick }) => {
  return (
    <Nav>
      <NavItem onClick={() => onNavClick('popular')}>Populares</NavItem>
      <NavItem onClick={() => onNavClick('topRated')}>Maiores Notas</NavItem>
      <NavItem onClick={() => onNavClick('nowPlaying')}>Lançamentos</NavItem>
      <NavItem onClick={() => onNavClick('upcoming')}>Em Breve</NavItem>
    </Nav>
  );
};

export default NavComponent;