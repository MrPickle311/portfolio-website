import React from 'react';
import styled from 'styled-components';

const Icon = ({ name, width, height, color }) => {
  const iconPath = `/icons/${name}.svg`;

  return (
    <SvgIcon width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <use xlinkHref={iconPath} />
    </SvgIcon>
  );
};

const SvgIcon = styled.svg`
  margin-bottom: 10px;
`;

export default Icon;
