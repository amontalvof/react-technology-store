import styled from "styled-components";

export const FacilitiesWrapper = styled.section`
  background: ${(props) => props.theme.rainbow.palette.brand.main};
  padding-bottom: 5px;
  padding-top: 5px;
  .service-icon {
    font-size: 2rem;
    color: ${(props) => props.theme.rainbow.palette.background.main};
  }
  .service-title {
    font-size: 1rem;
    color: ${(props) => props.theme.rainbow.palette.background.main};
    letter-spacing: var(--mainSpacing);
    text-transform: capitalize;
  }
  .service-text {
    color: ${(props) => props.theme.rainbow.palette.background.main};
    letter-spacing: var(--mainSpacing);
    padding: 5px;
  }

  @media (max-width: 450px) {
    .service-icon {
      font-size: 1.5rem;
      color: ${(props) => props.theme.rainbow.palette.background.main};
    }
    .service-title {
      font-size: 0.7rem;
      color: ${(props) => props.theme.rainbow.palette.background.main};
      letter-spacing: var(--mainSpacing);
    }
    .service-text {
      display: none;
    }
  }
`;
