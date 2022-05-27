import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 12.1052631vh;
  background-color: #50accb;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  text-shadow: 4px 4px 6px gray;
  box-shadow: 4px 4px 6px rgb(0 0 0 / 0.2);
`;
function TopMenu() {
  return (
    <Container>
      <p className="text-[white] mt-5 ml-7 text-4xl w-fit">주차 맛집</p>
    </Container>
  );
}

export default TopMenu;
