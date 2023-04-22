import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import MenuCircleText from './MenuCircleText';


const Menu = () => {
  const textStates = [
    {
      text: 'Home',
      position: {
        top: '50%',
        left: '50%',
      },
    },
    {
      text: 'Experience',
      position: {
        top: '20%',
        left: '20%',
      },
    },
    {
      text: 'Skills',
      position: {
        top: '70%',
        left: '30%',
      },
    },
  ];

  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const handleClick = (index) => {
    if (highlightedIndex !== null) {
      setHighlightedIndex(null);
    }
    setHighlightedIndex(index);
  };

  return (
    <MenuContainer>
      {textStates.map((textState, index) => (
        <MenuCircleText
          key={index}
          {...textState}
          isHighlighted={highlightedIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </MenuContainer>
  );
};

const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;

  background: #272727;

  font-family: 'Jura';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;

  height: 100vh;
  width: 30%;
`;

export default Menu;