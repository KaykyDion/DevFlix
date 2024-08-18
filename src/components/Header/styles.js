import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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

export const SettingsIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
`;