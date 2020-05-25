import styled from "styled-components";

export const FilterWrapper = styled.div`
  .fila-grande-columna {
    display: flex; /* establish flex container */
    flex-direction: row; /* default value; can be omitted */
    flex-wrap: nowrap; /* default value; can be omitted */
    justify-content: space-between; /*switched from default (flex-start, see below) */
    /*background-color: lightyellow;*/
  }

  .fila-peque {
    width: 50vh;
    height: auto;
    text-align: center;
    /*margin-right: 5px;*/
    /*margin-left: 5px;*/
    /*font-size: 1.3rem;*/
    /*color: #a6a6a6;*/
    /*border: 2px dashed red;*/
  }

  @media (max-width: 800px) {
    .fila-grande-columna {
      display: block;
    }
    .fila-peque {
      width: auto;
      height: auto;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;
