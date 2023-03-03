import * as React from 'react';
import styled from 'styled-components';
import myPhoto from "../assets/images/my-photo.png";
import TypeWriterEffect from 'react-typewriter-effect';

const AboutMeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`
const PhotoFrame = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  height: 10%;
  width: 15vw;
  margin-right: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 16px;
  height: auto;
`;

const TextDiv = styled.div`
  flex-direction: column;
  max-width: 50%;
`

const myAppRef = document.querySelector('.scrollable-div')

export const AboutMe = () => {
  return <AboutMeDiv>
    <PhotoFrame>
      <Image src={myPhoto} alt="My photo" />
    </PhotoFrame>
    <TextDiv>

      <h1>Hi There!</h1>
      <h1>I am Aryan Yadav</h1>
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
          'Software Engineer',
          'Flutter Developer',
          'Software Developer',
          'Hybrid App Developer',
          'PHP Developer',
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
        scrollArea={myAppRef}
      />
    </TextDiv>
  </AboutMeDiv>
}