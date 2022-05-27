import styled from "@emotion/styled";
import React, { useCallback } from "react";
import { MdGpsFixed } from "react-icons/md";

const GPSContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 12vh;
  right: 8vw;
  width: 2rem;
  height: 2rem;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  box-shadow: 2px 2px 6px rgb(0 0 0 / 0.16);
`;
function GpsController({ setUserPosition }) {
  const onClickGps = useCallback(() => {
    function error() {
      alert("Sorry, no position available.");
    }
    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition({
          la: position.coords.latitude,
          lo: position.coords.longitude,
        });
      },
      error,
      options
    );
  }, [setUserPosition]);
  return (
    <GPSContainer onClick={onClickGps}>
      <MdGpsFixed className=" text-2xl text-[#f96363]" />
    </GPSContainer>
  );
}

export default GpsController;
