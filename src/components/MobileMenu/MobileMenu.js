import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} color={'var(--color-gray-900)'} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Spacer />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: var(--color-backdrop);
`

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  margin-left: max(75px, 20%);
  height: 100%;
  
  padding: 32px;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  right: 0;
  top: 10px;
  padding: 16px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const NavLink = styled.a`
  font-size: ${18/16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Spacer = styled.div`
  flex: 1;
`

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 14px;
  flex: 1;
`

const FooterLink = styled.a`
  font-size: ${14/16}rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--font-weight-normal);
`;

export default MobileMenu;
