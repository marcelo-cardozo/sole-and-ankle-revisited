import React from 'react';
import styled from 'styled-components/macro';

import {QUERIES} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} color={'var(--color-gray-900)'} />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} color={'var(--color-gray-900)'} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} color={'var(--color-gray-900)'} />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid var(--color-gray-900);
    padding-inline-end: 29px;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }
`;


const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    flex: 1;
    display: flex;
    gap:32px;
    justify-content: flex-end;
  }
  
  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }

`

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;


const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(
          1rem,
          5.3vw - 1.75rem,
          3rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
  
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  min-width: max-content;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
