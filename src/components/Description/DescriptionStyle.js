import styled from "styled-components";

export const DescriptionWrapper = styled.section`
  #content-desc {
    overflow: auto;
    width: 100%;
    min-height: 100vh;
    /*background: gray;*/
  }

  #left-desc,
  #right-desc {
    margin-top: 3rem;
    /*background: white;*/
  }

  #left-desc {
    width: 39%;
    float: left;
    padding: 0.5rem;
    margin-left: 0.5rem;
    text-align: center;
  }
  #right-desc {
    width: 59%;
    float: right;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
    /*border: 2px solid var(--mainBlack);*/
    border-radius: 1.5%;
  }

  img:hover {
    /*box-shadow: 0 0 3px 2px rgba(128, 222, 234, 0.5);*/
  }

  h2 {
    padding: 0.5rem;
    color: #a6a6a6;
    font-size: 2rem;
  }

  h3 {
    padding: 0.5rem;
    color: #a6a6a6;
    font-size: 1.5rem;
  }

  p {
    padding: 0.5rem;
    color: #a6a6a6;
    font-size: 1rem;
    /*letter-spacing: var(--mainSpacing);*/
  }

  @media (max-width: 1200px) {
    #content-desc {
      width: 100%;
      min-height: 100vh;
      /*background: gray;*/
    }

    #left-desc,
    #right-desc {
      width: 100%;
      margin: 1px;
      /*background: white;*/
    }

    #left-desc {
      padding: 3rem;
    }
    #right-desc {
      padding: 3rem;
    }
  }

  @media (max-width: 450px) {
    #content-desc {
      width: 100%;
      min-height: 100vh;
      /*background: gray;*/
    }

    #left-desc,
    #right-desc {
      width: 100%;
      margin: 1px;
      /*background: white;*/
    }

    #left-desc {
      padding: 1rem;
    }
    #right-desc {
      padding: 1rem;
    }

    p {
      color: var(--mainGrey);
      font-size: 0.8rem;
      letter-spacing: var(--mainSpacing);
    }

    h2 {
      color: #a6a6a6;
      font-size: 1.2rem;
    }

    h3 {
      padding: 0.5rem;
      color: #a6a6a6;
      font-size: 1rem;
    }

    p {
      padding: 0.5rem;
      color: #a6a6a6;
      font-size: 0.8rem;
      /*letter-spacing: var(--mainSpacing);*/
    }

    .botones {
      text-align: center;
    }
  }
`;
