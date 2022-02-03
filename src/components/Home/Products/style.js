import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 310px;
  background: #fbfbfb;
  padding: 15px 30px;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  background: #fff;
`;

export const Wrapper = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ active }) => (active ? 'var(--greenColor)' : '#3d3d3d')};
  text-decoration: none;
  :hover {
    color: var(--greenColor);
  }
`;

export const Title = styled.div`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 16px;
  color: inherit;
  margin-bottom: 25px;
`;
