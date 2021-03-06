import styled from "@emotion/styled";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 78%;
`;

function QR() {
  const [data, setData] = useState("No result");
  console.log(data);
  return (
    <Container>
      <QrReader
        onScan={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
          if (!!error) {
            console.info(error);
          }
        }}
        facingMode="rear"
        style={{ width: "200px", height: "100px" }}
      />
      <p>{data}</p>
    </Container>
  );
}

export default QR;
