import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SkillsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    // text-align: center;
    padding: 20px;
    height: ${props => props.screenHeight}px; /* use state value here */

    // background-color: black;
`

export default function Skills() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <SkillsDiv screenHeight={screenHeight}>
            <b>
                Skills
                <br />
                To Be Added..
            </b>
        </SkillsDiv>
    )
}
