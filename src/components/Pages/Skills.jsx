import React from 'react';
import Box from '../commons/Box';
import MainText from '../commons/MainText';
import SmallText from '../commons/SmallText';
import Line from '../commons/Line';

import SvgDocker from '../../assets/Docker';
import SvgKafka from '../../assets/Kafka';
import SvgPostgresql from '../../assets/Postgresql';
import SvgPython from '../../assets/Python';
import SvgJava from '../../assets/Java';
import Hibernate from '../../assets/Hibernate';
import SvgSpringboot from '../../assets/Springboot';

import StyledIcon from '../commons/StyledIcon';

const description = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Et enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
]

const skillData = [
    {
        name: "Hibernate",
        icon: Hibernate
    },
    {
        name: "Spring Boot",
        icon: SvgSpringboot
    },
    {
        name: "PostgreSql",
        icon: SvgPostgresql
    },
    {
        name: "Python",
        icon: SvgPython
    },
    {
        name: "Kafka",
        icon: SvgKafka
    },
    {
        name: "Docker",
        icon: SvgDocker
    },
    {
        name: "Java",
        icon: SvgJava
    }
]

const SkillBox = ({ left, top, skill }) => {
    const IconComponent = skill.icon;

    return (
        <Box left={left} top={top} width={170} height={170} >
            <StyledIcon width={80} height={80}>
                <IconComponent style={{
                    width: "80px",
                    height: "80px",
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }} />
            </StyledIcon>
            <SmallText style={{
                    position: "absolute",
                    top: "90%",
                    left: "50%",
                    whiteSpace: "nowrap",
                    transform: "translate(-50%, -50%)"
                }}>
                {skill.name}
            </SmallText>
        </Box>
    )
}

const Skills = () => {

    return (
        <div>
            <Box left={5} top={5} width={710} height={380} >
                <MainText left={2} top={2} fontSize={36}>
                    So,  what can I do for You ?
                </MainText>
                {description.map((dataEntry, index) => (
                    <SmallText left={2} top={20 + 20 * index}>
                        {dataEntry}
                    </SmallText>
                ))}
            </Box>
            <Line
                start={{
                    top: "50%",
                    left: "5%"
                }}
                end={{
                    top: "50%",
                    left: "83%"
                }}
                zIndex={0}
            />
            {skillData.map((skill, index) => (
                <SkillBox
                    top={57}
                    left={4 + 12 * index}
                    skill={skill}
                />
            ))}
        </div>
    )
}

export default Skills;