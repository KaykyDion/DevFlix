import styled from "styled-components";

export const HeaderStyle = styled.header`
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeaderTop = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 80%;
  margin-top: 20px;
  border-radius: 20px;
  
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
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;