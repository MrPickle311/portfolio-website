import React from 'react'

const Line = ({ start, end }) => (
    <svg style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <line x1={start.left} y1={start.top} x2={end.left} y2={end.top} stroke="#FF622F" strokeWidth="2" />
    </svg>
  );

export default Line;