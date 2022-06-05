import styled from "@emotion/styled";
import React, { useState } from "react";
import QrReader from "react-qr-scanner";

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
        delay={1000}
        onScan={(value) => setData(value)}
        onError={(err) => console.log(err)}
        style={{ width: "320", height: "240" }}
      />
    </Container>
  );
}

export default QR;
