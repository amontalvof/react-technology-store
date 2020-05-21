import styled from "styled-components";

export const InfoWrapper = styled.section`
  #content {
    overflow: auto;
    width: 100%;
    min-height: 100vh;
    /*background: gray;*/
  }

  #left,
  #right {
    width: 49%;
    margin-top: 3rem;
    /*background: white;*/
  }

  #left {
    float: left;
    padding: 0.5rem;
    margin-left: 0.5rem;
  }
  #right {
    float: right;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border: 2px solid var(--mainBlack);
    border-radius: 1.5%;
  }

  img:hover {
    box-shadow: 0 0 3px 2px rgba(128, 222, 234, 0.5);
  }

  p {
    color: var(--mainGrey);
    font-size: 1rem;
    letter-spacing: var(--mainSpacing);
  }

  @media (max-width: 1000px) {
    #content {
      width: 100%;
      min-height: 100vh;
      /*background: gray;*/
    }

    #left,
    #right {
      width: 100%;
      margin: 1px;
      /*background: white;*/
    }

    #left {
      padding: 1rem;
    }
    #right {
      padding: 1rem;
    }
  }

  @media (max-width: 400px) {
    #content {
      width: 100%;
      min-height: 100vh;
      /*background: gray;*/
    }

    #left,
    #right {
      width: 100%;
      margin: 1px;
      /*background: white;*/
    }

    #left {
      padding: 1rem;
    }
    #right {
      padding: 1rem;
    }

    p {
      color: var(--mainGrey);
      font-size: 0.8rem;
      letter-spacing: var(--mainSpacing);
    }
  }
`;
