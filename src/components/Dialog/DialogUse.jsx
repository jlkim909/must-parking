import styled from "@emotion/styled";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

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

function DialogUse({ storeData, dialogRef }) {
  return (
    <div>
      <div className="flex text-2xl font-bold text-gray-700 m-4 justify-between">
        <span>유민국</span>
        <IoCloseSharp onClick={() => dialogRef.current.close()} />
      </div>
      <div className="flex text-[#707070] font-bold justify-between m-4 mt-8 text-base">
        <p>연락처</p>
        <span>010 - 4992 - 4193</span>
      </div>
      <div className="flex text-[#707070] font-bold m-4 text-base">
        <p>차량번호</p>
        <input className="w-[26.7vw] h-[3.68vh] border-[#ECE6CC] border-2 p-2 text-center font-bold ml-4" />
      </div>
      <div className="flex text-[#707070] font-bold m-4 text-base">
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
      <DialogBtn className="text-[#707070] font-bold bg-[#ECE6CC] mt-16">
        주차 시작
      </DialogBtn>
    </div>
  );
}

export default DialogUse;
