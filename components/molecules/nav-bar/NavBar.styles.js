import styled from "styled-components";

export const NavBarWrapper = styled.div`
  position: relative;
  width: 100%;
  color: white;
  display: flex;
  height: 20vh;
  background: black;

  .tab {
    font-family: fantasy;
    font-size: 4rem;
    cursor: pointer;
    align-content: center;
    width: 20%;
    text-align: center;
    font-size: 50;
  }

  .tab:hover {
    text-decoration: underline;
  }
`;
