import VerticalBar from "./components/Leftbar/VerticalBar";
import Menu from "./components/Menu/Menu";
import PagesContainer from "./components/Pages/Pages";
import styled from "styled-components";
import { useState,useEffect } from "react";

function App() {
  const [leftWidth, setLeftWidth] = useState(3);
  const [rightWidth, setRightWidth] = useState(15);

  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div>
      <Container>
        <VerticalBar leftWidth={leftWidth}/>
        <PagesContainer leftWidth={leftWidth} activeIndex={pageIndex}/>
        <Menu rightWidth={rightWidth} setPageIndex={setPageIndex}/>
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