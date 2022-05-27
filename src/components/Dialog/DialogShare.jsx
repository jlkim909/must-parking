import React from "react";
import { IoGiftOutline, IoCloseSharp } from "react-icons/io5";
import styled from "@emotion/styled";
import Ticket from "../Ticket";

const DialogBtn = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 4px 0 0;
  font-size: 0.875rem;
  font-weight: bold;
`;

function DialogShare({ storeData, dialogRef }) {
  return (
    <div>
      <div className="flex text-2xl font-bold text-gray-700 m-4 justify-between">
        <IoGiftOutline className=" ml-24" />
        <IoCloseSharp onClick={() => dialogRef.current.close()} />
      </div>
      <div className="flex text-[#707070] items-center justify-center font-bold m-4 mt-8 text-base">
        <Ticket categoryCode={storeData.code} width="12" />
        <span>{storeData.storeName}</span>
      </div>
      <div className="flex text-[#707070] items-center justify-center font-bold m-4 text-base">
        <p>대상 ID</p>
        <input className="w-[26.7vw] h-[3.68vh] ml-4 border-[#ECE6CC] border-2 p-2 text-center font-bold" />
      </div>
      <div className="flex text-[#707070] font-bold items-center justify-center m-4 text-base">
        <p>사용티켓</p>
        <select
          className=" w-[12vw] h-[4vh] ml-4 mr-4 border-2 pl-1 border-[#ECE6CC]"
          size={1}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <span>개</span>
      </div>
      <DialogBtn className="text-[#707070] font-bold bg-[#ECE6CC] mt-10">
        선물 하기
      </DialogBtn>
    </div>
  );
}

export default DialogShare;
