import VerticalBar from "./components/Leftbar/VerticalBar";
import Menu from "./components/Menu/Menu";
import TestMenu from "./components/Menu/TestMenu";
import PagesContainer from "./components/Pages/Pages";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [leftWidth, setLeftWidth] = useState(3);
  const [rightWidth, setRightWidth] = useState(15);

  return (
    <div>
      <Container >
         <VerticalBar leftWidth={leftWidth}/>
        <PagesContainer leftWidth={leftWidth}/>
        <Menu rightWidth={rightWidth}/>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-evenly;
`;

export default App;