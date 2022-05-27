import styled from "@emotion/styled";
import { useState } from "react";
import BottomMenu from "./components/BottomMenu";
import Home from "./components/Home";
import InUse from "./components/InUse";
import ParkinglotMap from "./components/Map/ParkinglotMap";
import TopMenu from "./components/TopMenu";


const Container = styled.div`
  position:absolute;
  display:flex;
  flex-direction:column;
  width:100vw;
  height:100vh;
  background-color:#F6F6F6;
`

const BodyContainer =styled.div`
  width:100vw;
  height:79.473684vh;
  overflow:hidden;
`

function Page(current) {
  switch(current){
    case "HOME":
      return <Home/>;
    case "INUSE":
      return <InUse/>;
    case "MAP":
      return <ParkinglotMap/>
    default :
      return <Home/>;
  }
}
function App() {
  const [currentPage, setCurrentPage] = useState("HOME");
  return (
    <Container>
      <TopMenu />
      <BodyContainer>
        {
          Page(currentPage)
        }
      </BodyContainer>
      <BottomMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Container>
  );
}

export default App;
