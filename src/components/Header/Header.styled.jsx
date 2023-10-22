import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin: auto;
  padding: 16px 32px;

  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  border: 1px solid darkgray;
  border-radius: 15px;
  background: linear-gradient(
    133deg,
    rgba(217, 217, 217, 0.28) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  backdrop-filter: blur(25px);

  a {
    color: currentColor;
  }
`;

