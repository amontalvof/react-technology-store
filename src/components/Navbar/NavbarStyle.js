import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0 1rem;
  background: ${(props) => props.theme.rainbow.palette.background.main};
  border-bottom: 3px solid ${(props) => props.theme.rainbow.palette.brand.main};
  color: ${(props) => props.theme.rainbow.palette.brand.main};
  z-index: 3;

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
  }

  .nav-icons {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .nav-logo {
    display: flex;
    align-items: center;
  }

  h1 {
    letter-spacing: var(--mainSpacing);
    font-size: 1.5rem;
  }

  @media (max-width: 400px) {
    h1 {
      letter-spacing: 0.1rem;
      font-size: 1rem;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .nav-logo {
      margin-left: 1.3rem;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .nav-icons {
      margin-left: 1.3rem;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`;
