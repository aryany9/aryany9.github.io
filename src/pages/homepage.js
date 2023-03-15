import React from "react"
import { Header } from "../components/header"
import { AboutMe } from "./AboutMe"
import { Experience } from "./Experience"
export const Homepage = () => {
    return <div>
        {/* <Header /> */}
        <AboutMe />
        <Experience />
    </div>
}