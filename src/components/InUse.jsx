import styled from "@emotion/styled";
import React from "react";
import { MdPortrait } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
import {
  IoReceiptOutline,
  IoLogOutOutline,
  IoCart,
  IoTimerOutline,
} from "react-icons/io5";
import Ticket from "./Ticket";
const UserInfoConatainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 92.2222vw;
  height: 22.6vh;
  background-color: white;
  margin-top: 0.75rem;
  box-shadow: -2px -2px 2px rgb(0 0 0 / 0.16), 2px 2px 2px rgb(0 0 0 / 0.16);
`;

const TicketInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 92.2222vw;
  height: 50vh;
  background-color: white;
  margin-top: 0.75rem;
  padding: 1.25rem;
  font-size: 1.5rem;
  box-shadow: -2px -2px 2px rgb(0 0 0 / 0.16), 2px 2px 2px rgb(0 0 0 / 0.16);
`;

const QuitBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ece6cc;
  border-radius: 8px;
  width: 56.1vw;
  font-size: 0.875rem;
  color: #707070;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: 2.75rem;
  height: 6.5789473vh;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 0.2);
`;

function InUse() {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <UserInfoConatainer>
        <div className="flex mt-4 ml-5 gap-2">
          <MdPortrait className="text-5xl text-[#9e9e9e]" />
          <span className="font-bold text-xl mt-4">OOO 님</span>
        </div>
        <div className="flex justify-evenly mt-9 gap-12">
          <div className="flex flex-col items-center justify-center">
            <AiOutlineGift className="text-3xl" />
            <span className="text-xs font-bold mt-1 text-[#707070]">
              선물함
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoReceiptOutline className="text-3xl" />
            <span className="text-xs font-bold mt-1 text-[#707070]">
              이용내역
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoLogOutOutline className="text-3xl" />
            <span className="text-xs font-bold mt-1 text-[#707070]">
              로그아웃
            </span>
          </div>
        </div>
      </UserInfoConatainer>
      <TicketInfoContainer>
        <div className="flex ml-4 gap-4">
          <Ticket
            innerIcon={<IoCart className="text-[#FFC900]" />}
            width="20"
          />
          <span className="font-bold text-[#363636] mt-6">E-마트</span>
        </div>
        <div className="flex text-[#707070] font-bold gap-24 mt-4 items-center">
          <span className="text-base">이용 시작 시간</span>
          <span>12 : 05</span>
        </div>
        <div className="flex text-[#707070] font-bold gap-24 mt-4 items-center">
          <span className="text-base">이용 종료 시간</span>
          <span>15 : 04</span>
        </div>
        <div className="flex items-center mt-10 ml-[12.625rem]">
          <IoTimerOutline className="text-[1.5rem]" />
          <span className="font-bold ml-2">59분</span>
        </div>
        <QuitBtn>사용 종료</QuitBtn>
      </TicketInfoContainer>
    </div>
  );
}

export default InUse;
