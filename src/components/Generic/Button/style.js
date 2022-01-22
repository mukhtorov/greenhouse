import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height || '40px'};
  width: ${({ width }) => width || '100px'};
  background: ${({ bg }) => bg || '#46A358'};

  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ size }) => size || '16px'};
  line-height: 20px;
  padding: 5px 10px;
  border-radius: 6px;
  text-transform: uppercase;

  color: #ffffff;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;
