import React, { useRef } from "react"
import { AboutMe } from "./AboutMe"
import { Experience } from "./Experience"
import Header from "./Header"
import Skills from "./Skills"


export const Homepage = () => {
    const scrollToDiv = (ref) => {
        console.log("Scrolled");
        window.scrollTo(0, ref.current.offsetTop)};
    const aboutMeRef = useRef();
    const experienceRef = useRef();
    const skillsRef = useRef();

    const scrollToExperience = () => {
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return <div>
        <Header multiRef={[aboutMeRef, experienceRef, skillsRef]} click={scrollToDiv}/>
        <AboutMe reference={aboutMeRef} click={() => scrollToDiv(experienceRef)} />
        <Experience reference={experienceRef} click={() => scrollToDiv(skillsRef)} />
        <Skills reference={skillsRef} />
    </div>
}