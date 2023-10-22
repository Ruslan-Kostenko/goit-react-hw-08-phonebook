import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;

  button {
    padding: 8px 16px;
    border: 1px solid darkgray;
    color: black;
    border-radius: 5px;
    background: linear-gradient( 133deg, rgba(217, 217, 217, 0.28) 0%, rgba(217, 217, 217, 0) 100% );
    backdrop-filter: blur(25px);
  }
`;
