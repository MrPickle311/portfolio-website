import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '../commons/Box';
import SmallText from '../commons/SmallText';

import SvgProject from '../../assets/Project';
import StyledIcon from '../commons/StyledIcon';

const projectsData = [
    {
        name: "Project 1",
        icon: SvgProject,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Project 2",
        icon: SvgProject,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Project 3",
        icon: SvgProject,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Project 4",
        icon: SvgProject,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Project 5",
        icon: SvgProject,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Project 6",
        icon: SvgProject,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Project 7",
        icon: SvgProject,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Project 8",
        icon: SvgProject,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

const ProjectWrapper = styled(Box)`
    cursor: pointer;
    transform: rotateY(${props => props.angle}deg);
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
`;

const ProjectBox = ({ left, top, project }) => {

    console.log(top)

    const IconComponent = project.icon;
    const [isFrontSide, setIsFrontSide] = useState(true)

    return (
        <ProjectWrapper
            left={left}
            top={top}
            width={300}
            height={300}
            onClick={() => setIsFrontSide(!isFrontSide)}
            angle={isFrontSide ? 0 : 180}
        >
            {isFrontSide &&
                <StyledIcon width={120} height={120}>
                    <IconComponent style={{
                        width: "120px",
                        height: "120px",
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }} />
                </StyledIcon>}
            {isFrontSide && <SmallText style={{
                position: "absolute",
                top: isFrontSide ? "80%" : "10%",
                left: isFrontSide ? "50%" : "10%",
                whiteSpace: isFrontSide ? "nowrap" : "normal",
                transform: `translate(-50%, -50%)`, // Dodaj nowy styl transformacji
                fontSize: "25px"
            }}>
                {isFrontSide ? project.name : project.description}
            </SmallText>}
            {!isFrontSide && <SmallText style={{
                position: "absolute",
                top: isFrontSide ? "80%" : "10%",
                left: isFrontSide ? "50%" : "10%",
                whiteSpace: isFrontSide ? "nowrap" : "normal",
                transform: `${isFrontSide ? "" : "rotateY(180deg)"
                    }`, // Dodaj nowy styl transformacji
                fontSize: "25px"
            }}>
                {isFrontSide ? project.name : project.description}
            </SmallText>}
        </ProjectWrapper>
    )
}

const PersonalProjects = () => {

    const rowsCount = 4;
    const columnsCount = 4;
    var isDone = false;

    const result = [];

    for (let row = 0; row < rowsCount; row++) {
        if(isDone){
            break;
        }

        for (let column = 0; column < columnsCount; column++) {
            const currentDataIndex = row * columnsCount + column;

            if(currentDataIndex >= projectsData.length) {
                isDone = true;
                break;
            }

            result.push(
                <ProjectBox
                    top={5 + Math.floor(row ) * 50}
                    left={5 + 20 * column}
                    project={projectsData[currentDataIndex]}
                />
            )
        }
    }

    return (
        <div>
            {result}
        </div>
    )
}

export default PersonalProjects;