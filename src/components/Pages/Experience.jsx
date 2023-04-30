import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const data = [
    {
        title: "Python Developer",
        company: "Warsaw University of Technology",
        from: "December 2022",
        to: " November 2023",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Et enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]
    },
    {
        title: "Java Developer",
        company: "Multiway Systems",
        from: "June 2022",
        to: " January 2023",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Et enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]
    },
    {
        title: "Java Developer",
        company: "Comarch",
        from: "February 2023",
        to: "current",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Et enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]
    }
]

const Experience = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div>
            <Box left={45} top={20}>
                <JobText left={3} top={2}>
                    {data[currentIndex].title}
                </JobText>
                <FromToText top={16} left={4}>
                    {data[currentIndex].from} - {data[currentIndex].to}
                </FromToText>
                <DescriptionList
                    currentIndex={currentIndex}
                    top={35}
                    left={3} />
            </Box>
            <Jobs
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                top={20}
                left={10}
            />
        </div>
    )
}

const Box = styled.div`
    box-sizing: border-box;

    left: ${props => props.left}%;
    top: ${props => props.top}%;

    position: absolute;
    width: 699px;
    height: 363px;

    border: 2px solid #FF622F;
    filter: drop-shadow(10px 15px 4px rgba(0, 0, 0, 0.25));
`;

const JobText = styled.div`
    position: absolute;
    left: ${props => props.left}%;
    top: ${props => props.top}%;

    font-weight: 400;
    font-size: 55px;
    line-height: 76px;
`;

const FromToText = styled.div`
    position: absolute;
    left: ${props => props.left}%;
    top: ${props => props.top}%;

    font-weight: 400;
    font-size: 20px;
    line-height: 76px;
`;

const List = styled.ul`
  position: absolute;
  list-style-type: none;
  padding: 0;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 17px;
  line-height: 30px;
  transition: all 0.5s ease;
  transform: translateY(20px);
  padding-right: 10px;

  ::before {
    content: "•";
    color: #FF622F;
    font-size: 60px;
    margin-right: 8px;
  }
`;

const DescriptionList = ({ top, left, currentIndex }) => {
    return (
        <List left={left} top={top}>
            {data[currentIndex].description.map((descriptionPoint, index) => (
                <ListItem>
                    {descriptionPoint}
                </ListItem>
            ))}
        </List>
    );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 10px;
  height: ${props => data.length * props.baseHeight}px;
  background-color: #666666;
  border-radius: 10px;
  filter: drop-shadow(10px 15px 4px rgba(0, 0, 0, 0.25));
`;

const Insider = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 10px;
  top: ${props => props.currentJob / props.jobsCount * 100}%;
  height: ${props => props.baseHeight}px;
  background-color: #FF622F;
  border-radius: 10px;
  filter: drop-shadow(10px 15px 4px rgba(0, 0, 0, 0.25));
  transition: top 0.1s ease;
`;

const Slider = ({ baseHeight, currentIndex }) => {
    return (
        <Wrapper baseHeight={baseHeight}>
            <Insider
                baseHeight={baseHeight}
                jobsCount={data.length}
                currentJob={currentIndex} />
        </Wrapper>
    );
};

const fillPerJob = 100;

const JobsWrapper = styled.div`
    position: absolute;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
`;

const Jobs = ({ currentIndex, setCurrentIndex, left, top }) => {

    return (
        <JobsWrapper left={left} top={top}>
            <Slider currentIndex={currentIndex} baseHeight={fillPerJob} />
            {data.map((dataEntry, index) => (
                <ListedJobsText
                    isHighlighted={index === currentIndex}
                    onClick={() => setCurrentIndex(index)}
                    top={270 * (index) / data.length + 40}
                    left={40}>
                    {dataEntry.company}
                </ListedJobsText>
            ))}
        </JobsWrapper>
    )
}

const ListedJobsText = styled.div`
    position: absolute;
    // display: inline-block;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    // width: 200px;
    white-space: nowrap;

    // font-weight: 400;
    color: ${props => props.isHighlighted ? 'white' : '#A0A0A0'};
    font-size: 35px;
    // line-height: 76px;
    cursor: pointer;
    transition: font-size 0.1s ease, color 0.1s ease;
`;

export default Experience;