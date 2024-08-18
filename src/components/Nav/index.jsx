import { Nav, NavItem } from "./styles";

const NavComponent = () => {
  return (
    <Nav>
      <NavItem href="#">Séries</NavItem>
      <NavItem href="#">Filmes</NavItem>
      <NavItem href="#">Novidades</NavItem>
      <NavItem href="#">Minha Lista</NavItem>
    </Nav>
  );
};

export default NavComponent;