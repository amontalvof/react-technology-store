import styled from "styled-components";

export const ShoppingWrapper = styled.div`
  min-height: 30vh;
  .fila-grande-columna {
    display: flex; /* establish flex container */
    flex-direction: row; /* default value; can be omitted */
    flex-wrap: nowrap; /* default value; can be omitted */
    justify-content: space-between; /*switched from default (flex-start, see below) */
    /*background-color: lightyellow;*/
  }

  .fila-grande-columna-lista {
    display: flex; /* establish flex container */
    flex-direction: row; /* default value; can be omitted */
    flex-wrap: nowrap; /* default value; can be omitted */
    justify-content: space-between; /*switched from default (flex-start, see below) */
    /*background-color: lightyellow;*/
  }

  .fila-peque {
    width: 15vw;
    height: auto;
    text-align: center;
    /*margin-right: 5px;*/
    /*margin-left: 5px;*/
    font-size: 1.3rem;
    color: #a6a6a6;
    /*border: 2px dashed red;*/
    h5 {
      display: none;
    }
  }

  .izq {
    margin-left: 50px;
  }
  .der {
    margin-right: 50px;
  }

  .conteo:hover {
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    cursor: pointer;
  }

  .basura {
    color: #fe4849;
    opacity: 0.8;
    border-color: "#222";
  }

  .basura:hover {
    color: #fe3434;
    opacity: 0.8;
    border-color: "#222";
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .fila-grande-columna {
      display: none;
    }
    .fila-grande-columna-lista {
      display: block; /* establish flex container */
    }
    .fila-peque {
      width: auto;
      height: auto;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
      img {
        width: 30%;
      }
      h5 {
        display: inline;
      }
    }
    .izq {
      margin-left: 0;
    }
    .der {
      margin-right: 0;
    }
    .conteo:hover {
      color: ${(props) => props.theme.rainbow.palette.brand.main};
      cursor: pointer;
    }
  }
`;
