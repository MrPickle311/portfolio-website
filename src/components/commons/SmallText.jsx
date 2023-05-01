import styled from 'styled-components';

const SmallText = styled.div`
    position: absolute;
    left: ${props => props.left}%;
    top: ${props => props.top}%;

    font-weight: 400;
    font-size: ${props => props.fontSize ? props.fontSize: 20}px;
    line-height: 30px;
    margin-right: 8px;
`;

export default SmallText;