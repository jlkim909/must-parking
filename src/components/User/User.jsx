import styled from "@emotion/styled";
import React, { useState } from "react";
import ParkinglotMap from "./Map/ParkinglotMap";
import BottomMenu from "./BottomMenu";
import Home from "./Home/Home";
import TopMenu from "./TopMenu";
import InUse from "./Used/InUse";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
`;

function User() {
  const [page, setPage] = useState("HOME");
  return (
    <Container>
      <TopMenu />
      {page === "INUSE" ? (
        <InUse />
      ) : page === "MAP" ? (
        <ParkinglotMap />
      ) : (
        <Home />
      )}
      <BottomMenu page={page} handlePage={setPage} />
    </Container>
  );
}

export default User;
