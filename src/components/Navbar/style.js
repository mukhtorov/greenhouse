import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 78px;
  justify-content: space-between;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--greenColor);
  font-size: 28px;
  cursor: pointer;
`;

export const Logo = styled('img')`
  width: 50px;
  height: 50px;
  margin-right: 6px;
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  .active: {
    color: #46a358;
  }
  .inactive: {
    color: #3d3d3d;
  }
`;
export const ItemsGroup = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 20px;
  color: ${({ active }) => (active ? '#46A358' : '#3d3d3d')};
  margin: 0 25px;
`;
