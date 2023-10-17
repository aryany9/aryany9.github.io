import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import ScrollDownWidget from '../components/ScrollDownWidget';
import { app } from '../Firebase';
import { firestore } from '../Firebase';
import { collection, query, where, getDocs } from "firebase/firestore";


// const div = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;
//     // text-align: center;
//     padding: 20px;
//     /* height: ${props => props.screenHeight}px; use state value here */
//     height: 100%; /* use state value here */
//     background-color: #F8F8F8;

//     // background-color: black;
// `

const Heading = styled.h1`
    font-size: 24px !important;
    font-weight: bolder;
    font-family: sans-serif;
    border-bottom: 5px solid orange;
    padding-bottom: 10px;
`
const ScrollDownDiv = styled.div`
  /* position: fixed; */
  /* top: 100%; */
  /* align-items: center; */
  /* justify-content: center; */
  /* align-content: center; */
  /* align-self: center; */
  /* background-color: aqua; */
  /* height: 20%; */
  display: inline-block;
  /* Adjust this value as needed to position the widget above the AboutMeDiv */
  /* left: 50%;  */
  /* Position the widget at the center of the screen horizontally */
  transform: translateX(0%) translateY(100%); /* Center the widget by moving it back 50% of its own width */
  cursor: pointer;
`;

// const ScrollDownDiv = styled.div`
//   position: fixed;
//   bottom: 20px; 
//   /* Adjust this value as needed to position the widget above the AboutMeDiv */
//   left: 50%; 
//   /* Position the widget at the center of the screen horizontally */
//   transform: translateX(-50%); /* Center the widget by moving it back 50% of its own width */
//   cursor: pointer;
// `;


const CustomVerticalTimeline = styled(VerticalTimeline)`
  &::before {
    background:  orange;
  }
`;


const ExperienceDiv = styled.div`
     flex-direction: column;
    justify-content: center;
    padding: 20px;

    @media (min-width: 960px) {
        padding-left: 100px;
        padding-right: 100px;
    }
   
  /* h1 { */
    /* font-weight: bold; */
    /* padding: 0; */
    /* font-size: 18px; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    /* font-family: 'Ubuntu', sans-serif; */
    /* white-space: nowrap; */
    /* margin-bottom: 4px; */
  /* } */
  
  /* p { */
    /* font-weight: normal; */
    /* padding-left: 10px; */
  /* } */

  /* ul { */
    /* padding-left: 20px; */
    /* margin-left: 10px; */
  /* margin-bottom: 0; */
  /* padding: 0; */
  /* } */

  /* li { */
    /* list-style-type: disc; */
    /* padding-left: 0px; */
    /* margin-bottom: 10px; */
    /* background-color: aqua; */
  /* } */
`

// const ScrollDownDiv = styled.div`
//   position: fixed;
//   bottom: 20px; 
//   /* Adjust this value as needed to position the widget above the AboutMeDiv */
//   left: 50%; 
//   /* Position the widget at the center of the screen horizontally */
//   transform: translateX(-50%); /* Center the widget by moving it back 50% of its own width */
//   cursor: pointer;
// `;

export const Experience = React.forwardRef((props, ref) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [experienceArray, setExperienceArray] = useState([]);
  const [educationArray, setEducationArray] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchExperiences = async () => {
      const q = query(collection(firestore, "Experience"));
      const querySnapshot = await getDocs(q);
      setExperienceArray(querySnapshot.docs);

    }
    const fetchEducations = async () => {
      const q = query(collection(firestore, "Education"));
      const querySnapshot = await getDocs(q);
      setEducationArray(querySnapshot.docs);

    }
    fetchExperiences();
    fetchEducations();
  }, []);

  return (
    <ExperienceDiv screenHeight={screenHeight} ref={props.reference} className="bg-gray-50 p-10">
      {/* <h2 class="text-xl font-extrabold text-blue-500 sm:text-2xl md:text-4xl mb-3 text-left ">
        EDUCATION AND EXPERIENCES
      </h2> */}
      <Heading>
        Experience and Education
      </Heading>
      <CustomVerticalTimeline>

        {
          [...experienceArray].reverse().map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${item.data().EndDate ? 'white' : 'rgb(33, 150, 243)'}`, color: `${item.data().EndDate ? 'black' : 'white'}` }}
              contentArrowStyle={{ borderRight: `7px solid ${item.data().EndDate ? 'black' : 'rgb(33, 150, 243)'}` }}
              date={`${item.data().StartDate.toDate().getFullYear()} - ${item.data().EndDate?.toDate().getFullYear() ?? "Present"}`}
              iconStyle={{ background: `${item.data().EndDate ? 'white' : 'rgb(33, 150, 243)'}`, color: `${item.data().EndDate ? 'black' : 'white'}` }}
              icon={item.data().Category == 'Work' ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">{item.data().jobTitle}</h3>
              <h4 className="vertical-timeline-element-subtitle font-bold text-base">{item.data().companyName}</h4>
              <h5 className="vertical-timeline-element-subtitle font-bold text-base">{item.data().Location}</h5>

              {/* <br />➢ Developed an Account Aggregator mobile application from
                scratch with data consent approval process.
                <br />➢ Managed AWS services, including ECS, Task-Definition,
                Autoscaling, and CI/CD for deployment optimization.
                <br />➢ Utilized CloudWatch for debugging and timely issue
                identification and resolution.
                <br />➢ Handled YES Bank Backend for AFV CERSAI Portal to ensure
                regulatory compliance.
                <br />➢ Worked with IBM Developer Portal and API Connect for
                IndusInd Bank for secure data exchange.
                <br />➢ Collaborated with cross-functional teams to meet user
                needs and expectations */}
              <ul style={{ listStyleType: "disc" }} className="p-4">
                {item.data().bulletPoints.map((jData, ind) => (
                  <li key={ind}>{jData}</li>
                ))}
              </ul>

            </VerticalTimelineElement>
          ))
        }
        {
          [...educationArray].reverse().map((item, index) => (
            // console.log(item.data().jobTitle);
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${item.data().EndDate ? 'white' : 'rgb(33, 150, 243)'}`, color: `${item.data().EndDate ? 'black' : 'white'}` }}
              contentArrowStyle={{ borderRight: `7px solid ${item.data().EndDate ? 'black' : 'rgb(33, 150, 243)'}` }}
              date={`${item.data().StartDate.toDate().getFullYear()} - ${item.data().EndDate?.toDate().getFullYear() ?? "Present"}`}
              iconStyle={{ background: `${item.data().EndDate ? 'white' : 'rgb(33, 150, 243)'}`, color: `${item.data().EndDate ? 'black' : 'white'}` }}
              icon={item.data().Category == 'Work' ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title font-bold">{item.data().Course}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.data().Degree}</h4>
              <h5 className="vertical-timeline-element-subtitle">{item.data().Location}</h5>
              <p>
                <br />University: <b>{item.data().University}</b>
                <br />College: <b>{item.data().College}</b>
              </p>
            </VerticalTimelineElement>
          ))
        }
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', alignItems: 'center', alignContent: 'center', textAlign: 'center' }}
          icon={
            <ScrollDownDiv>

              <ScrollDownWidget />
            </ScrollDownDiv>
          }
        />
      </CustomVerticalTimeline>
    </ExperienceDiv>
  );
});





{/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2022 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Unacores AA Solutions Private Limited</h4>
          <h5 className="vertical-timeline-element-subtitle">Mumbai, IN</h5>
          <p>
            <br />➢ Developed an Account Aggregator mobile application from
            scratch with data consent approval process.
            <br />➢ Managed AWS services, including ECS, Task-Definition,
            Autoscaling, and CI/CD for deployment optimization.
            <br />➢ Utilized CloudWatch for debugging and timely issue
            identification and resolution.
            <br />➢ Handled YES Bank Backend for AFV CERSAI Portal to ensure
            regulatory compliance.
            <br />➢ Worked with IBM Developer Portal and API Connect for
            IndusInd Bank for secure data exchange.
            <br />➢ Collaborated with cross-functional teams to meet user
            needs and expectations
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Jr. Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Allarch Healthcare Technologies Private Limited</h4>
          <h5 className="vertical-timeline-element-subtitle">Mumbai, IN</h5>
          <p>
            <br />➢ Created DAVAGENIE mobile app from inception to deployment within two months using Flutter.
            <br />➢ Skilled in various tools, including GitHub, MySQL, AWS, Postman, and JIRA.
            <br />➢ Mentored and trained team members, collaborated with executives, designers, and developers, and contributed to backend and database services.
            <br />➢ Ensured high product quality through testing, code reviews, and error monitoring with Firebase Crashlytics.
            <br />➢ Built Runner App with Google Service and Location Tracking Service, implementing separate logins for quick development and easy service access.
            <br />➢ Monitored DAVAGENIE development through JIRA Scrum, leading weekly sprint meetings and mid-sprint reviews
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Master of Science in Information Technology</h3>
          <h4 className="vertical-timeline-element-subtitle">Post-Graduation</h4>
          <p>
            Institute: <b>Vidyalankar School of Information Technology (VSIT)</b>
            <br />
            University: <b>University of Mumbai</b>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October 2020"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Information Technology</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>
          <p>
            Institute: <b>Vidyalankar School of Information Technology (VSIT)</b>
            <br />
            University: <b>University of Mumbai</b>
          </p>
        </VerticalTimelineElement> */}