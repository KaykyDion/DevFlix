import styled from 'styled-components';

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
  padding: 20px;
`;

export const Result = styled.h1`
  margin-top: 20px;
  padding: 20px;
`;