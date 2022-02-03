import React from 'react';

import {Container,ItemsGroup, Link, LinkGroup, Logo, LogoWrapper,} from './style';
import { navbar } from '../../utils/navbar';
import logo from '../../assets/imgs/logo.png';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();



  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Container>
        <LogoWrapper onClick={() => navigate('/home')}>
          <Logo src={logo} alt='logo' /> Greenshop
        </LogoWrapper>
        <LinkGroup>
          {navbar.map((value) => (
            <Link active={location.pathname.includes( value.path )}
              to={value.path}>
              {value.title}
            </Link>
          ))}
        </LinkGroup>
        <ItemsGroup>item</ItemsGroup>
      </Container>
      <Outlet />
    </div>
  );
};

export default Navbar;
