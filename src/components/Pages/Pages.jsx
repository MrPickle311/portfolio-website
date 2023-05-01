import React from 'react';
import styled from 'styled-components';
import Experience from './Experience';
import Home from './Home';
import Contact from './Contact';
import PersonalProjects from './PersonalProjects';
import Projects from './Projects';
import Skills from './Skills';

const Pages = {
    0: <Home />,
    1: <Experience />,
    2: <Skills />,
    3: <Projects />,
    4: <PersonalProjects />,
    5: <Contact/>
};

const PagesContainer = ({ leftWidth,activeIndex }) => {
    return (
        <MenuContainer leftWidth={leftWidth}>
            {activeIndex !== null && (
                Pages[activeIndex]
            )}
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
  padding-left: ${(props) => props.leftWidth}%;
  flex: 1;
  background: #272727;

  font-family: 'Jura';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;

  height: 100vh;
`;

export default PagesContainer;