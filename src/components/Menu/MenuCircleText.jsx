import React from 'react';
import styled from 'styled-components';
import CircleText  from './CircleText';

const MenuCircleText = ({ text, position, isHighlighted, onClick }) => {
    const normalState = {
      fontColor: '#747474',
      fontSize: '20px',
      circleSize: '15px',
      distance: '20px',
      isClicked: false,
    };
    const highlightedState = {
      fontColor: 'white',
      fontSize: '30px',
      circleSize: '30px',
      distance: '40px',
      isClicked: true,
    };
  
    const currentState = isHighlighted ? highlightedState : normalState;
  
    return (
      <Wrapper style={position} onClick={onClick}>
        <CircleText
          position={position}
          text={text}
          fontColor={currentState.fontColor}
          fontSize={currentState.fontSize}
          circleSize={currentState.circleSize}
          distance="20px"
          isClicked={currentState.isClicked}
        />
      </Wrapper>
    );
  };

const Wrapper = styled.div`
  cursor: pointer;
`;

export default MenuCircleText;