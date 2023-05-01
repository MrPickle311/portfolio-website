import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '../commons/Box';
import SmallText from '../commons/SmallText';
import MainText from '../commons/MainText';
// const nodemailer = require('nodemailer');
import emailjs from 'emailjs-com';

const StyledInput = styled.input`
  position: absolute;
  background-color: #3D3D3D;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  color: white;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const ButtonWrapper = styled(Box)`
    cursor: pointer;
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
    background-color: 292929;
`;

const description = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Et enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
]

const Button = ({ width, height, left, top, text, clickText }) => {
    const [currentText, setCurrentText] = useState(text)

    const onClick = () => {
        setCurrentText(clickText)

        //send
    }

    return (
        <ButtonWrapper
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            width={width}
            height={height}
            left={left}
            top={top}
            onClick={onClick}
        >
            <SmallText zIndex={-1}>
                {currentText}
            </SmallText>
        </ButtonWrapper>
    )
}

const TextInput = ({ width, height, left, top, placeholder }) => {
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <StyledInput
            type="text"
            value={email}
            onChange={handleInputChange}
            placeholder={placeholder}
            width={width}
            height={height}
            left={left}
            top={top}
        />
    );
}

const StyledTextArea = styled.textarea`
  position: absolute;
  background-color: #3D3D3D;
  border: none;
  outline: none;
  padding: 10px;
  color: white;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  resize: none;
`;

const MultiLineInput = ({ width, height, left, top, placeholder }) => {
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <StyledTextArea
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
            width={width}
            height={height}
            left={left}
            top={top}
        />
    );
};

const Contact = () => {

    return (
        <div>
            <TextInput
                width={300}
                left={5}
                top={45}
                placeholder="Name"
            />
            <TextInput
                width={600}
                left={5}
                top={50}
                placeholder="Subject"
            />
            <TextInput
                width={292}
                left={21}
                top={45}
                placeholder="Email"
            />
            <MultiLineInput
                width={600}
                height={300}
                left={5}
                top={55}
                placeholder="Message"
            />
            <Button
                text={'Send'}
                clickText={'Sent!'}
                width={100}
                height={40}
                left={31}
                top={87}
            />
            <MainText
                style={{ lineHeight: "60px" }}
                left={5}
                top={7}>
                Interested ? <br />
                Go ahead and contact me!
            </MainText>
            <Box
                left={4.5}
                top={19}
                width={710}
                height={380} 
                style={{
                    border: 'none'
                }}>
                {description.map((dataEntry, index) => (
                    <SmallText left={2} top={10 + 20 * index}>
                        {dataEntry}
                    </SmallText>
                ))}
            </Box>

        </div>
    )
}

export default Contact;