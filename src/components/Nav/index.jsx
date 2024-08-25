import { NavContainer, NavItem } from './styles';

const Nav = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id ${sectionId} not found.`);
    }
  };

  return (
    <NavContainer>
      <NavItem onClick={() => scrollToSection('popular')}>Populares</NavItem>
      <NavItem onClick={() => scrollToSection('topRated')}>Maiores Notas</NavItem>
      <NavItem onClick={() => scrollToSection('nowPlaying')}>Lançamentos</NavItem>
      <NavItem onClick={() => scrollToSection('upcoming')}>Em Breve</NavItem>
    </NavContainer>
  );
}

export default Nav;