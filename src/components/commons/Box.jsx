import styled from 'styled-components';

const Box = styled.div`
    box-sizing: border-box;

    left: ${props => props.left}%;
    top: ${props => props.top}%;
    width: ${props => props.width}px;
    height: ${props => props.height}px;

    position: absolute;

    border: 2px solid #FF622F;
    filter: drop-shadow(10px 15px 4px rgba(0, 0, 0, 0.25));
`;

export default Box;