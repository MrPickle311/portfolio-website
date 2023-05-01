import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 40%;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  ${({ direction }) => direction}: 0;
`;

const CarouselItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5em;
  width: 40%;
  height: 100%;
  transition: transform 0.3s;
  transform: translateX(${({ index, currentIndex }) => (index - currentIndex) * 100}%);
`;

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const lastSlideIndex = items.length - 1;

    const handleNext = () => {
        setCurrentIndex(currentIndex === lastSlideIndex ? lastSlideIndex : currentIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
    };

    return (
        <Container>
            <Button direction="left" onClick={handlePrev}>
                {"<"}
            </Button>
            {items.map((item, index) => (
                <CarouselItem key={index} index={index} currentIndex={currentIndex}>
                    {item}
                </CarouselItem>
            ))}
            <Button direction="right" onClick={handleNext}>
                {">"}
            </Button>
        </Container>
    );
};

export default Carousel;
