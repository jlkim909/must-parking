import styled from "@emotion/styled";
import React from "react";
import { IoCafe, IoCart } from "react-icons/io5";
import { RiGasStationFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import ticketImg from "../image/ticket.png";
import DialogTicket from "./Dialog/Dialog";

const Inner = styled.div`
  width: fit-content;
  height: fit-content;
`;
function Ticket({ innerIcon, width, categoryCode }) {
  return (
    <div
      style={{
        width: `fit-content`,
        height: `fit-content`,
      }}
    >
      <img
        src={`${ticketImg}`}
        alt="ticket"
        style={{
          position: "absolute",
          width: `${width}vw`,
        }}
      />
      <Inner
        style={{
          margin: `${width * 0.11}rem ${width * 0.11}rem`,
          fontSize: `${width * 0.3}vw`,
        }}
      >
        {categoryCode === "MT1" ? (
          <IoCart className="text-[#FFC900]" />
        ) : categoryCode === "CE7" ? (
          <IoCafe className="text-[#7A5478]" />
        ) : categoryCode === "FD6" ? (
          <ImSpoonKnife className="text-[#C7AFFF]" />
        ) : categoryCode === "OL7" ? (
          <RiGasStationFill className="text-[#e8514e]" />
        ) : (
          "No"
        )}
      </Inner>
    </div>
  );
}

export default Ticket;
