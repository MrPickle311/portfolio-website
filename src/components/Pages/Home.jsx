import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Home = () => {

    return (
        <Text>
      {"Hi, I’m "}
      <span style={{ display: "inline-block" }}>
        <Typewriter text={"Damian"} />
      </span>
      <br/>
      {"I am a Java developer"}
      <br />
      {"Nice to see you here\n"}
    </Text>
    )
}

const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (displayText.length === text.length) {
                clearInterval(intervalId);
            } else {
                setDisplayText(prevDisplayText => prevDisplayText + text.charAt(prevDisplayText.length));
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, [text]);

    useEffect(() => {
        const cursorIntervalId = setInterval(() => {
            setShowCursor(prevShowCursor => !prevShowCursor);
        }, 500);

        return () => clearInterval(cursorIntervalId);
    }, []);

    return (
        <div>
            {displayText}{showCursor && <span style={{ 
                color: '#FF622F', 
                borderRadius: "10px"
                }}>|</span>}
        </div>
    );
};

const Text = styled.div`
    position: absolute;
    left: 5%;
    top: 20%;

    font-weight: 400;
    font-size: 64px;
    line-height: 76px;
`;

export default Home;