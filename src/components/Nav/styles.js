import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 0;
  width: 60%;
  border-radius: 20px;
  margin-bottom: 40px;
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;  