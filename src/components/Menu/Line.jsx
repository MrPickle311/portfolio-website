import React from 'react'
import styled from 'styled-components';

const Line = ({ height = "100%", width = "100%", start, end }) => {
  return (
    <Wrapper height={height} width={width} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <line x1={start.left} y1={start.top} x2={end.left} y2={end.top} stroke="#FF622F" strokeWidth="2" />
    </Wrapper>)
};

const Wrapper = styled.svg`
  height: ${(props) => props.height}
  width: ${(props) => props.width}
  style: ${(props) => props.style}
`;

export default Line;