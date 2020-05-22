import styled from "styled-components";

export const ForsaleWrapper = styled.div`
  .fila-grande {
    display: flex; /* establish flex container */
    flex-direction: row; /* default value; can be omitted */
    flex-wrap: nowrap; /* default value; can be omitted */
    justify-content: space-between; /* switched from default (flex-start, see below) */
    /*background-color: lightyellow;*/
  }
  .fila-grande > div {
    width: 30vw;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    /*border: 2px dashed red;*/
  }
`;
