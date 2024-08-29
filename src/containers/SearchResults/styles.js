import styled from 'styled-components';

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 27px;
  padding: 20px;
`;