import styled from "@emotion/styled";
import React from "react";
import {
  IoTicketOutline,
  IoMapOutline,
  IoQrCodeOutline,
  IoHomeOutline,
} from "react-icons/io5";

const BottomMenuContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 8.42105vh;
  background-color: white;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 -2px 8px rgb(0 0 0 / 0.16);
  justify-content: space-evenly;
`;

const BottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function BottomMenu({ currentPage, setCurrentPage }) {
  return (
    <BottomMenuContainer>
      <BottomItem
        style={{
          color: `${currentPage === "HOME" ? "#50accb" : "black"}`,
        }}
        onClick={() => {
          setCurrentPage("HOME");
        }}
      >
        <IoHomeOutline className="text-[2rem]" />
        <p className="text-xs font-bold">Home</p>
      </BottomItem>
      <BottomItem
        style={{
          color: `${currentPage === "INUSE" ? "#50accb" : "black"}`,
        }}
        onClick={() => {
          setCurrentPage("INUSE");
        }}
      >
        <IoTicketOutline className="text-[2rem]" />
        <p className="text-xs font-bold">In Use</p>
      </BottomItem>
      <BottomItem
        style={{
          color: `${currentPage === "MAP" ? "#50accb" : "black"}`,
        }}
        onClick={() => {
          setCurrentPage("MAP");
        }}
      >
        <IoMapOutline className="text-[2rem]" />
        <p className="text-xs font-bold">Map</p>
      </BottomItem>
      <BottomItem>
        <IoQrCodeOutline className="text-[2rem]" />
        <p className="text-xs font-bold">QR</p>
      </BottomItem>
    </BottomMenuContainer>
  );
}

export default BottomMenu;
