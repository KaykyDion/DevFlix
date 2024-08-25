import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
  padding-right: 25px;
  padding-top: 80px;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #000;
  padding: 20px;
  border: solid 1px #fff;
  border-radius: 8px;
  width: 300px;
  height: 230px;
  pointer-events: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.colors.blackText};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  cursor: pointer;
  border: solid 1px ${({ theme }) => theme.colors.text};
  border-radius: 2px;
  padding: 5px 10px;
`;

export const Config = styled.h2`
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const IconText = styled.div`
  color: white;
  font-size: 16px;
`;

export const IconButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 50px;
    height: 50px;
  }
`;