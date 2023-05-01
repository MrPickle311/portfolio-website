import React, { useState, useRef, useEffect, createRef, useCallback } from 'react'
import styled from 'styled-components';
import MenuCircleText from './MenuCircleText';
import Line from '../commons/Line';

const textStates = [
  {
    text: 'Home',
    position: {
      top: '5%',
      left: '55%',
    }
  },
  {
    text: 'Experience',
    position: {
      top: '20%',
      left: '15%',
    }
  },
  {
    text: 'Skills',
    position: {
      top: '35%',
      left: '50%',
    }
  },
  {
    text: 'Projects',
    position: {
      top: '50%',
      left: '25%',
    }
  },
  {
    text: 'Personal Projects',
    position: {
      top: '70%',
      left: '10%',
    }
  },
  {
    text: 'Contacts',
    position: {
      top: '90%',
      left: '20%',
    }
  }
];

const Menu = ({rightWidth,setPageIndex}) => {

  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const ref = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [circlePositions, setCirclePositions] = useState([]);

  const handleClick = (index) => {
    if (highlightedIndex !== null) {
      setHighlightedIndex(null);
    }
    setHighlightedIndex(index);
    setPageIndex(index);
  };

  useEffect(() => {
    const { current: element } = ref;
    if (element) {
      setIsReady(true);
    }
  }, [ref])

  const updateCirclePosition = useCallback((index, pos, circleSize) => {
    setCirclePositions((prevState) => {
      const newState = [...prevState];
      newState[index] = calculateCirclePosition(pos, circleSize);
      return newState;
    });
  });

  const calculateCirclePosition = (absouluteCirclePosition , circleSize) => {
    const thisElement = ref.current
    const { left, top } = thisElement.getBoundingClientRect();
    const result = {
      top: absouluteCirclePosition.top - top + parseInt(circleSize) / 2,
      left: absouluteCirclePosition.left - left + parseInt(circleSize) / 2
    }
    return result;
  };

  return (
    <MenuContainer ref={ref} rightWidth={rightWidth}>
      {textStates.map((textState, index) => {
        return (
          <MenuCircleText
            key={index}
            text={textState.text}
            position={textState.position}
            isHighlighted={highlightedIndex === index}
            onClick={() => handleClick(index)}
            updateCirclePosition={(pos, circleSize) => {
              updateCirclePosition(index, pos, circleSize)
            }
            }
          />
        )
      })}
      {textStates.map((textState, index) => (
        index < textStates.length - 1 && 
        circlePositions.length > 1 &&
        (<Line
          key={`${index}-${index + 1}`}
          start={circlePositions[index]}
          end={circlePositions[index + 1]}
        />)
      ))
      }
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  background: #272727;

  font-family: 'Jura';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;

  height: 100vh;
  width: ${props => props.rightWidth}%;
`;

export default Menu;