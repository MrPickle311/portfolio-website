import styled from 'styled-components';

const MainText = styled.div`
    position: absolute;
    left: ${props => props.left}%;
    top: ${props => props.top}%;

    font-weight: 400;
    font-size: ${props => props.fontSize ? props.fontSize: 55}px;
    line-height: 76px;
`;

export default MainText;