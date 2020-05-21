import styled from "styled-components";

const SidebarWrapper = styled.nav`
  position: fixed;
  left:0;
  width: 10rem;  
  background: ${(props) => props.theme.rainbow.palette.background.main};
  z-index:1;
  transition : var(--mainTransition);
  transform:${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")} ;

  @media (min-width: 576px) {
    width: 10rem;
    height: 100%;
    border-right: 3px solid ${(props) =>
      props.theme.rainbow.palette.brand.main};
  }
  /*position: fixed;
  margin: 0;
  padding: 0;
  width: 170px;
  height: 100%;
  background-color: ${(props) => props.theme.rainbow.palette.background.main};
  overflow: "auto";
  border-right: 3px solid ${(props) => props.theme.rainbow.palette.brand.main};

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
    border-right: hidden;
  }*/
`;

export default SidebarWrapper;
