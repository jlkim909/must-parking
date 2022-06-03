import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { IoCafe, IoCart } from "react-icons/io5";
import { RiGasStationFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import Ticket from "./Ticket";
import { useRecoilValue } from "recoil";
import { AppInfomation } from "../store/store";
import NoTicket from "./NoTicket";
import Dialog from "./Dialog/Dialog";

const TagContainer = styled.div`
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
`;
const TagItem = styled.div`
  width: 17.77778vw;
  height: 4.2105263157vh;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  gap: 0.25rem;
  box-shadow: 4px 4px 6px rgb(0 0 0 / 0.16);
`;

const TicketContainer = styled.div`
  position: absolute;
  display: flex;
  margin-top: 10vh;
  width: 92.22222vw;
  height: 65.5264vh;
  background-color: white;
  box-shadow: -2px -2px 2px rgb(0 0 0 / 0.16), 2px 2px 2px rgb(0 0 0 / 0.16);
  padding: 1.5rem;
  overflow: scroll;
  flex-wrap: wrap;
  border-radius: 8px;
`;

function Home() {
  const data = useRecoilValue(AppInfomation);
  const [category, setCategory] = useState("ALL");
  const [dialogData, setDialogData] = useState();
  const dialogRef = useRef(null);
  const userTicket = data.usersInfo[0]["userTicketInfo"];
  const onClickTag = (code) => () => {
    if (category === code) {
      setCategory("ALL");
    } else {
      setCategory(code);
    }
  };

  console.log(data);
  const onClickTicket = (data) => () => {
    dialogRef.current.showModal();
    setDialogData(data);
  };
  return (
    <div className="flex flex-col items-center">
      <TagContainer>
        <TagItem
          onClick={onClickTag("CE7")}
          style={{
            border: `${category === "CE7" ? "1px solid #50accb" : "none"}`,
            color: `${category === "CE7" ? "#50accb" : "black"}`,
          }}
        >
          <IoCafe className="text-base text-[#7A5478]" />
          <p>카페</p>
        </TagItem>
        <TagItem
          onClick={onClickTag("MT1")}
          style={{
            border: `${category === "MT1" ? "1px solid #50accb" : "none"}`,
            color: `${category === "MT1" ? "#50accb" : "black"}`,
          }}
        >
          <IoCart className="text-base text-[#FFC900]" />
          <p>마트</p>
        </TagItem>
        <TagItem
          onClick={onClickTag("OL7")}
          style={{
            border: `${category === "OL7" ? "1px solid #50accb" : "none"}`,
            color: `${category === "OL7" ? "#50accb" : "black"}`,
          }}
        >
          <RiGasStationFill className="text-base text-[#e8514e]" />
          <p>주유소</p>
        </TagItem>
        <TagItem
          onClick={onClickTag("FD6")}
          style={{
            border: `${category === "FD6" ? "1px solid #50accb" : "none"}`,
            color: `${category === "FD6" ? "#50accb" : "black"}`,
          }}
        >
          <ImSpoonKnife className="text-base text-[#C7AFFF]" />
          <p>식당</p>
        </TagItem>
      </TagContainer>
      <TicketContainer>
        {userTicket?.length > 0 ? (
          userTicket?.map((store, index) => {
            if (category === "ALL" || category === store.code) {
              return (
                <div
                  className="flex flex-col text-center"
                  key={index}
                  onClick={onClickTicket(store)}
                >
                  <Ticket categoryCode={store.code} width="20" />
                  <p className=" ml-[-5.6vw] mt-[-2vh] text-xs font-bold">
                    {store.storeName.indexOf(" ") > 0
                      ? store.storeName.slice(0, store.storeName.indexOf(" "))
                      : store.storeName}
                    <br />
                    {store.storeName.indexOf(" ") > 0
                      ? store.storeName.slice(
                          store.storeName.indexOf(" "),
                          store.storeName.length
                        )
                      : ""}
                  </p>
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <NoTicket />
        )}
        <Dialog dialogRef={dialogRef} storeData={dialogData} />
      </TicketContainer>
    </div>
  );
}

export default Home;
