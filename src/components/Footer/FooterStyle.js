import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.rainbow.palette.background.main};

  p {
    color: var(--mainGrey);
    font-size: 1rem;
    letter-spacing: var(--mainSpacing);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  .iconosSociales {
    font-size: 1.5rem;
    color: var(--mainGrey);
    transition: var(--mainTransition);
    padding: 0 2rem 0;
  }
  .iconosSociales:hover {
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    cursor: pointer;
  }

  @media (max-width: 450px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
