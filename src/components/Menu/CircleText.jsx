import React from 'react';
import styled from 'styled-components';

const CircleText = (props) => {
  const { text, fontColor, fontSize, circleSize, distance, position, isClicked } = props;

  return (
    <Wrapper style={position}>
      <Text color={fontColor} size={fontSize} offset={distance} isClicked={isClicked}>
        {text} 
      </Text>
      <Circle size={circleSize} isClicked={isClicked} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
`;

const Circle = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background-color: #FF622F;
  transition: width 0.3s ease, height 0.3s ease;
  ${(props) => props.isClicked}
`;

const Text = styled.div`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin-right: ${(props) => props.offset};
  transition: font-size 0.3s ease, color 0.3s ease;
  ${(props) => props.isClicked}
`;

export default CircleText;