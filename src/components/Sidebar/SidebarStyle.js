import styled from "styled-components";

const SidebarWrapper = styled.nav`
  position: fixed;
  left: 0;
  width: 10rem;
  background: ${(props) => props.theme.rainbow.palette.background.main};
  z-index: 3;
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  border-bottom-right-radius: 0.3rem;

  @media (min-width: 576px) {
    width: 10rem;
    height: 100%;
    border-right: 3px solid ${(props) => props.theme.rainbow.palette.brand.main};
  }
`;

export default SidebarWrapper;
