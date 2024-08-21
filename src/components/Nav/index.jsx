import React from 'react';
import { Nav, NavItem } from './styles';

const NavComponent = ({ onNavClick }) => {
  return (
    <Nav>
      <border><NavItem onClick={() => onNavClick('popular')}>Populares</NavItem></border>
      <NavItem onClick={() => onNavClick('topRated')}>Maiores Notas</NavItem>
      <NavItem onClick={() => onNavClick('nowPlaying')}>Lançamentos</NavItem>
      <NavItem onClick={() => onNavClick('upcoming')}>Em Breve</NavItem>
    </Nav>
  );
};

export default NavComponent;