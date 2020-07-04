import styled from "styled-components";

export const ProductsListWrapper = styled.div`
  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .flex-container > div {
    width: 300px;
    margin: 10px;
    text-align: center;
  }
`;
