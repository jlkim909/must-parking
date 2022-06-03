import styled from "@emotion/styled";
import React from "react";
import logoImg from "../../image/logo.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 12%;
  background-color: #50accb;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 2px lightgray;
`;
function TopMenu() {
  return (
    <Container>
      <img src={logoImg} alt="" className=" w-[50%] h-[70%] mt-[4%]" />
    </Container>
  );
}

export default TopMenu;
