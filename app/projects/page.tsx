import React from "react";
import Nav from "../components/nav"
import AnimatedProjectItem from "../components/project-nav";

const Projects: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden dark-theme relative">
            <Nav></Nav>
            <nav className="container flex flex-col justify-center items-center">
                <ul className="text-zinc-500 text-md grid grid-cols-1 gap-6 mx-auto sm:mt-0 sm:grid-cols-2 lg:gap-16">
                    <AnimatedProjectItem title="Individual Projects" link="/projects/individual-projects"/>
                    <AnimatedProjectItem title="Team Projects" link="/projects/team-projects"/>
                </ul>
            </nav>
        </div>
    );
};

export default Projects;