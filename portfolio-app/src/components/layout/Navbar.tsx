import styled from "styled-components";
import { Container } from "./Container";
import { theme } from "@/styles/theme";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  border-bottom: 1px solid ${theme.colors.border};
  background-color: rgba(16, 28, 34, 0.8);
  backdrop-filter: blur(12px);
`;

const Wrapper = styled(Container)`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const NavItem = styled.a`
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Divider = styled.div`
  height: 1rem;
  width: 1px;
  background: ${theme.colors.primary} / 20;
`;

export function Navbar() {
  return (
    <Nav>
      <Wrapper>
        <a href="/">
          GALIANO<span>.</span>DEV
        </a>
        <NavItems>
          <NavItem href="#">Work</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Contact</NavItem>
          <Divider />
          <NavItem href="/admin">Admin</NavItem>
        </NavItems>
      </Wrapper>
    </Nav>
  );
}
