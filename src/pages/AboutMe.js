import * as React from 'react';
import styled from 'styled-components';
import myPhoto from "../assets/images/my-photo.jpg";

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
export const AboutMe = () => {
    return <AboutMeDiv>
        <PhotoFrame>
            <Image src={myPhoto} alt="My photo" />
        </PhotoFrame>
        <h1>Hi! I am Aryan Yadav</h1>
    </AboutMeDiv>
}