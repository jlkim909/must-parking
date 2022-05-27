import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import DialogShare from "./DialogShare";
import DialogTicket from "./DialogTicket";
import DialogUse from "./DialogUse";

const DialogContainer = styled.dialog`
  width: 68vw;
  height: 40vh;
  padding: 0;
  flex-direction: column;
  overflow: hidden;
  ::backdrop {
    background: rgba(107, 114, 128, 0.75);
  }
`;

function Dialog({ dialogRef, storeData }) {
  const [dialogPage, setDialogPage] = useState("INFO");
  const handlePage = useCallback(
    (mode) => () => {
      setDialogPage(mode);
    },
    []
  );
  return (
    <DialogContainer ref={dialogRef} onClose={() => setDialogPage("INFO")}>
      {dialogPage === "USE" ? (
        <DialogUse dialogRef={dialogRef} storeData={storeData} />
      ) : dialogPage === "SHARE" ? (
        <DialogShare dialogRef={dialogRef} storeData={storeData} />
      ) : (
        <DialogTicket
          dialogRef={dialogRef}
          storeData={storeData}
          page={handlePage}
        />
      )}
    </DialogContainer>
  );
}

export default Dialog;
