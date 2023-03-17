import React, { useRef } from "react"
import { AboutMe } from "./AboutMe"
import { Experience } from "./Experience"
import Skills from "./Skills"


export const Homepage = () => {
    const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const aboutMeRef = useRef();
    const experienceRef = useRef();
    const skillsRef = useRef();

    const scrollToExperience = () => {
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return <div>
        <AboutMe reference={aboutMeRef} click={() => scrollToDiv(experienceRef)}/>
        <Experience reference={experienceRef} />
        <Skills reference={skillsRef} />
    </div>
}