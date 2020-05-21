import styled from "styled-components";

export const FormWrapper = styled.section`
  .contact-form {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }

  @media (max-width: 700px) {
    .contact-form {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
