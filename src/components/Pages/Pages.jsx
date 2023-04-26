import { Rectangle } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';

const Pages = ({ items, onItemClick }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div onClick={() => onItemClick(index)}>
                    {item}
                </div>
            ))}
        </div>
    );
};

const Card = ({ content }) => {
    return <div>{content}</div>;
};

const PagesContainer = ({ leftWidth }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const items = ['Menu item 1', 'Menu item 2', 'Menu item 3'];

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <MenuContainer leftWidth={leftWidth}>
            <Pages items={items} onItemClick={handleItemClick} />
            {activeIndex !== null && (
                <Card content={`This is card ${activeIndex + 1}`} />
            )}
        </MenuContainer>
    );
};

const MenuContainer = styled.div`
  padding-left: ${(props) => props.leftWidth}%;
  flex: 1;
  background: #222127;

  font-family: 'Jura';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;

  height: 100vh;
`;

export default PagesContainer;