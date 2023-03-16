import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import myPhoto from "../assets/images/my-photo.png";
import TypeWriterEffect from 'react-typewriter-effect';
// import { LinkedIn, GitHub } from '@mui/icons-material';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {blue} from '@mui/material/colors';
import MailIcon from '@mui/icons-material/MailRounded';

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
const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  /* padding-left: 5px; */
  /* padding-right: 5px; */
  align-items: stretch;
  justify-items: stretch;
  /* text-align: center; */
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
          <SocialMedias>
            <LinkedInIcon onClick={event => window.open('https://linkedin.com/in/aryany9')} cursor='pointer' fontSize='large' sx={{color: blue[800]}}/>
            <GithubIcon onClick={event => window.open('https://github.com/aryany9')} cursor='pointer' fontSize='large'/>
            <MailIcon onClick={event => window.open('mailto://aryan9.00y@gmail.com')} cursor='pointer' fontSize='large'/>
          </SocialMedias>
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
