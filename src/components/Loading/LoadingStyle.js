import styled from "styled-components";

export const LoadingWrapper = styled.div`
  color: ${(props) => props.theme.rainbow.palette.brand.main};
  letter-spacing: var(--mainSpacing);
  h1 {
    font-size: 1rem;
  }
`;
