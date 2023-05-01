import styled from 'styled-components';

const StyledIcon = styled.div`
  width: ${props => props.width ? props.width: 50}px;
  height: ${props => props.height ? props.height: 50}px;
  fill: #DED9D9;
`;

export default StyledIcon;