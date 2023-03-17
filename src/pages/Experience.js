import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import ScrollDownWidget from '../components/ScrollDownWidget';

const ExperienceDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    // text-align: center;
    padding: 20px;
    /* height: ${props => props.screenHeight}px; use state value here */
    height: 100%; /* use state value here */
    background-color: #F8F8F8;

    // background-color: black;
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

export const Experience = React.forwardRef((props, ref) => {
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
    <ExperienceDiv screenHeight={screenHeight} ref={props.reference}>
      <VerticalTimeline>
        <VerticalTimelineElement
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
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', alignItems: 'center', alignContent: 'center', textAlign: 'center' }}
          icon={
            <ScrollDownDiv>

              <ScrollDownWidget />
            </ScrollDownDiv>
          }

        />
      </VerticalTimeline>
    </ExperienceDiv>
  );
});
