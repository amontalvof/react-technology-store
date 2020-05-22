import styled from "styled-components";

export const TitleWrapper = styled.div`
  text-align: ${(props) => (props.center ? "center" : "left")};
  .title-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--mainBlack);
    margin: ${(props) => (props.center ? "0 auto" : "0")};
  }

  h2 {
    font-size: 2.5rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.8);
    color: ${(props) => props.theme.rainbow.palette.brand.main};
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;
