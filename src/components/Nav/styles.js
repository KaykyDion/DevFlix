import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 0;
  width: 40%;
  border-radius: 20px;
  margin-bottom: 40px;
  align-items: center;
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  border: solid 1px white;
  padding: 6px;
  text-align: center;
`;