import styled from "@emotion/styled";
import React from "react";
import logoImg from "../image/logo.png";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 12.1052631vh;
  background-color: #50accb;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-shadow: 4px 4px 6px gray;
  box-shadow: 4px 4px 6px rgb(0 0 0 / 0.2);
`;
function TopMenu() {
  return (
    <Container>
      <img src={logoImg} alt="" className=" w-[65vw] h-[10vh]" />
    </Container>
  );
}

export default TopMenu;
