import React from 'react';
import styled from 'styled-components';
import CircleText from './CircleText';
import { useState, useRef, useLayoutEffect } from 'react';
import { useEffect, forwardRef } from 'react';

const normalState = {
  fontColor: '#747474',
  fontSize: '20px',
  circleSize: '15px',
  distance: '20px',
  isClicked: false,
};
const highlightedState = {
  fontColor: 'white',
  fontSize: '25px',
  circleSize: '25px',
  distance: '20px',
  isClicked: true,
};

const MenuCircleText = forwardRef(function (props, ref) {
  const { text, position, isHighlighted, onClick, updateCirclePosition } = props;

  const currentState = isHighlighted ? highlightedState : normalState;
  const circleRef = useRef(null);

  useEffect(() => {
    const circleElement = circleRef.current
    const { left, top } = circleElement.getBoundingClientRect();
    updateCirclePosition({ left, top }, currentState.circleSize)
  }, [isHighlighted])

  return (
    <Wrapper style={position} onClick={onClick}>
      <CircleText
        position={position}
        text={text}
        fontColor={currentState.fontColor}
        fontSize={currentState.fontSize}
        circleSize={currentState.circleSize}
        distance={currentState.distance}
        isClicked={currentState.isClicked}
        ref={circleRef}
      />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  cursor: pointer;
`;

export default MenuCircleText;