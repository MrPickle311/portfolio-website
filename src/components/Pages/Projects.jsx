import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '../commons/Box';
import SmallText from '../commons/SmallText';

import SvgDrone from '../../assets/Drone';
import SvgCity from '../../assets/City';
import SvgBank from '../../assets/Bank';

import StyledIcon from '../commons/StyledIcon';

const projectsData = [
    {
        name: "Drone station",
        icon: SvgDrone,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Smart City",
        icon: SvgCity,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Comarch Open \n Platform",
        icon: SvgBank,
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Smart Way",
        icon: SvgCity,
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

const Projects = () => {



    return (
        <div>
            {projectsData.map((project, index) => (
                <ProjectBox
                    top={35}
                    left={5 + 20 * index}
                    project={project}
                />
            ))}
        </div>
    )
}

export default Projects;