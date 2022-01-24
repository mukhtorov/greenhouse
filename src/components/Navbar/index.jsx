import React, { useState, useEffect } from 'react';

import {Container,ItemsGroup, Link, LinkGroup, Logo, LogoWrapper,} from './style';
import { navbar } from '../../utils/navbar';
import logo from '../../assets/imgs/logo.png';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [active, setActive] = useState('/home');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActive(location?.pathname);
  }, [location?.pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Container>
        <LogoWrapper onClick={() => navigate('/home')}>
          <Logo src={logo} alt='logo' /> Greenshop
        </LogoWrapper>
        <LinkGroup>
          {navbar.map((value) => (
            <Link active={active === value.path} to={value.path}>
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
