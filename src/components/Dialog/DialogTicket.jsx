import styled from "@emotion/styled";
import React from "react";
import { IoShareOutline, IoCloseSharp, IoTimerOutline } from "react-icons/io5";
import parkingTicket from "../../image/parking-ticket.png";

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

function DialogTicket({ storeData, dialogRef, page }) {
  return (
    <div>
      <div className="flex justify-between items-center text-2xl text-[#707070] m-2">
        <IoShareOutline className="text-xl" onClick={page("SHARE")} />
        <p className="text-xs font-bold">{storeData?.storeName}</p>
        <IoCloseSharp onClick={() => dialogRef.current.close()} />
      </div>
      <div className="flex items-center p-4 justify-between">
        <img src={parkingTicket} alt="" className="w-[30vw] h-[12vh]" />
        <div className="flex flex-col items-center font-bold ">
          <div className="flex items-center">
            <IoTimerOutline className="text-3xl" />
            <span className="text-xl ml-1">30분</span>
          </div>
          <span className="text-[#707070] text-2xl ml-8 mt-4">x 3</span>
        </div>
      </div>
      <div className="flex flex-col items-center font-bold text-xl mt-4">
        <span className="text-base">영업시간</span>
        <span>10 : 00 ~ 22 : 00</span>
      </div>
      <DialogBtn className="text-white bg-[#50accb] mt-7" onClick={page("USE")}>
        사용
      </DialogBtn>
    </div>
  );
}

export default DialogTicket;
