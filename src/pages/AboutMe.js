import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import myPhoto from "../assets/images/my-photo.png";
import TypeWriterEffect from 'react-typewriter-effect';

const AboutMeDiv = styled.div`
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
const PhotoFrame = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  height: ${props => props.screenHeight}px/2;
  width: 15vw;
  margin-right: 40px;
  `;

const Image = styled.img`
  max-width: 100%;
  border-radius: 16px;
  height: auto;
`;

const TextDiv = styled.div`
  flex-direction: column;
  max-width: 100%;
`;
const IamDiv = styled.div`
  display: flex;
  /* text-align: center; */
  align-items: baseline;
  flex-direction: row;
  /* max-width: 50%; */
  width: 100%;
`;

export const AboutMe = () => {
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
    <AboutMeDiv screenHeight={screenHeight}>
      <PhotoFrame>
        <Image src={myPhoto} alt="My photo" />
      </PhotoFrame>
      <TextDiv>
        <h4>Hi There! 👋</h4>
        <h1>I'm <br/> Aryan Yadav</h1>
        <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              'Software Developer',
              'Flutter Developer',
              'Front-End Developer',
              'Hybrid App Developer',
              'Full Stack Developer',
              'Back-End Developer',
              'Software Engineer',
            ]}
            loop={false}
            nextTextDelay={1000}
            typeSpeed={30}
          />
        {/* <IamDiv>
          <b>{"I'm"}&nbsp;</b> 
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              'Software Developer',
              'Flutter Developer',
              'Front-End Developer',
              'Hybrid App Developer',
              'Full Stack Developer',
              'Back-End Developer',
              'Software Engineer',
            ]}
            loop={false}
            nextTextDelay={1000}
            typeSpeed={30}
          />
        </IamDiv> */}

      </TextDiv>
    </AboutMeDiv>
  );
};