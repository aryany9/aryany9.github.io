import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import myPhoto from "../assets/images/my-photo.png";
import TypeWriterEffect from 'react-typewriter-effect';
// import { LinkedIn, GitHub } from '@mui/icons-material';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { blue } from '@mui/material/colors';
import MailIcon from '@mui/icons-material/MailRounded';
import ScrollDownWidget from '../components/ScrollDownWidget';
import { firestore } from '../Firebase';

const AboutMeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    /* flex-wrap: wrap; */
    // text-align: center;
    /* padding: 20px; */
    height: ${props => props.screenHeight}px; /* use state value here */

    // background-color: black;
`
const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    // text-align: center;
    /* padding: 20px;
    height: ${props => props.screenHeight}px; use state value here */

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

const ScrollDownDiv = styled.div`
  display: flex;
  align-items: center;
  /* background-color: aqua; */
  cursor: pointer;  
  height: 50px; /* add a fixed height */
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

export const AboutMe = React.forwardRef((props, ref) => {

  const aboutMeDivRef = useRef(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [emailId, setEmailId] = useState("");
  const [designations, setDesignation] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    firestore.collection("AboutMe").doc("Profile").onSnapshot((snapshot) => {
      setFirstName(
        snapshot.data().firstName
      );
      setLastName(
        snapshot.data().lastName
      );
      setDesignation(
        snapshot.data().Designations
      )
      snapshot.ref.collection("SocialMedias").doc("LinkedIn").onSnapshot((snapshot) => {
        setLinkedInUrl(snapshot.data().url);
      })
      snapshot.ref.collection("SocialMedias").doc("Email").onSnapshot((snapshot) => {
        setEmailId(snapshot.data().url);
      })
      snapshot.ref.collection("SocialMedias").doc("Github").onSnapshot((snapshot) => {
        setGithubUrl(snapshot.data().url);
      })
      setGithubUrl(
        snapshot.data().githubUrl
      )
      setEmailId(
        snapshot.data().emailId
      )
    });
    console.log(linkedInUrl);

  }, []);
  if (!firstName) {
    return <div>Loading...</div>;
  }
  return (
    <AboutMeDiv screenHeight={screenHeight} ref={props.reference} className="pt-20">
      <ContentDiv>
        <PhotoFrame>
          <Image src={myPhoto} alt="My photo" />
        </PhotoFrame>
        <TextDiv>
          <h4 className='font-bold'>Hi There! 👋</h4>
          <h1 class="text-3xl font-bold text-gray-800">I'm <br />{firstName ?? ""} {lastName ?? ""}</h1>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={designations ?? ["Software Engineer"]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={30}
          />
          <SocialMedias>
            <LinkedInIcon onClick={event => window.open(linkedInUrl)} cursor='pointer' fontSize='large' sx={{ color: blue[800] }} />
            <GithubIcon onClick={event => window.open(githubUrl)} cursor='pointer' fontSize='large' />
            <MailIcon onClick={event => window.open(emailId)} cursor='pointer' fontSize='large' />
          </SocialMedias>
        </TextDiv>
      </ContentDiv>
      <ScrollDownDiv onClick={props.click}>
        <ScrollDownWidget />
      </ScrollDownDiv>
    </AboutMeDiv>
  );
});
