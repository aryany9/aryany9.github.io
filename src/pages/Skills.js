import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { firestore } from '../Firebase';
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { Grid, Paper, Switch } from '@mui/material';

const SkillsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // text-align: center;
    height: 100%;
    padding: 20px;
    /* use state value here */

    /* height: 100%;  */
    //use state value here
    // background-color: black;
    @media (min-width: 960px) {
        padding-left: 100px;
        padding-right: 100px;
        height: ${props => props.screenHeight}px; 
    }
   
  h1 {
    font-weight: bold;
    /* padding: 0; */
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Ubuntu', sans-serif;
    /* white-space: nowrap; */
    margin-bottom: 4px;
  }
  
  p {
    font-weight: normal;
    padding-left: 10px;
  }

  ul {
    padding-left: 20px;
    /* margin-left: 10px; */
  margin-bottom: 0;
  /* padding: 0; */
  }

  li {
    list-style-type: disc;
    padding-left: 0px;
    margin-bottom: 10px;
    /* background-color: aqua; */
  }
`

const Heading = styled.h1`
    font-size: 24px !important;
    font-weight: bolder;
    font-family: sans-serif;
    border-bottom: 5px solid orange;
    padding-bottom: 10px;
`


const SkillSetCard = styled.div`
display: flex;
flex-direction: column; 
max-width: 500px;
max-height: 500px;
`

const StyledGrid = styled(Grid)`
  && {
    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(12, 1fr);
    }
    @media only screen and (min-width: 960px) {
      grid-template-columns: repeat(15, 1fr);
    }
  }
`;

export default function Skills() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [skillsetArray, setSkillsetArray] = useState({});
    const [spacing, setSpacing] = useState(2)
    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchSkillsets = async () => {
            const q = query(collection(firestore, "AboutMe"));
            const querySnapshot = await getDoc(doc(q, "Skillset"));
            const data = querySnapshot.data(); // extract the data from the query snapshot
            const skills = data ? data : []; // extract the skills array from the data object
            setSkillsetArray(skills); // set the skillsetArray state with the extracted skills array
            // console.log(skills);
        }




        fetchSkillsets();
    }, []);


    return (
        <SkillsDiv screenHeight={screenHeight}>
            <Heading>
                Skills
            </Heading>
            <StyledGrid container spacing={4} columns={{ xs: 12, md: 15 }}>

                {
                    Object.keys(skillsetArray).map((key, index) => (
                        <Grid item spacing={10} xs={5}>

                            <h1 key={index}>{key}</h1>
                            {
                                skillsetArray[key].map((item, i) => {
                                    console.log(item);
                                    return (
                                        <ul key={i++}>
                                            <li>
                                                {item.title}
                                            </li>
                                        </ul>
                                    );
                                }
                                )
                            }
                            {/* {skillsetArray[key].Databases[key]} */}
                        </Grid>


                    ))
                }
            </StyledGrid>
        </SkillsDiv>
    )
}
