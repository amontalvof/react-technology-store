import styled from "styled-components";

export const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: initial;
  justify-content: flex-end;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  color: ${(props) => props.theme.rainbow.palette.brand.main};
  background: url(${(props) => props.img}) center/ cover no-repeat;
  .banner {
    display: block;
    align-self: flex-end;
    min-height: ${(props) => (props.max ? "50vh" : "30vh")};
    min-width: 70%;
  }
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.8);
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }

  h2 {
    font-size: 3.5rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.8);
  }
`;
