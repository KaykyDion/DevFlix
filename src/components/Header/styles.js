import styled from "styled-components";

export const HeaderStyle = styled.header`
padding-bottom: 40px;
`;

export const HeaderTop = styled.div`
  background-color: #00005d;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  div{
    display: flex;
    align-items: center;
    gap: 25px;
  }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const SettingsIcon = styled.img`
  height: 40px;
`;

export const Button = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
`;

export const SearchBar = styled.input`
  padding: 8px;
  width: 200px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.blackText};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid #ff66c4;
  }
`;

export const NavContainer = styled.div`
display: flex;
align-items: center;
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: solid 1px white;
  padding: 6px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;