import React from "react";
import Nav from "../components/nav"
import {Card} from "../components/card";
import Link from "next/link";

type Projects = {
    href: string,
    label: string,
    handle: string
}

const projects: Projects[] = [
    {
        href: '',
        label: '',
        handle: ''
    },

]

const Projects: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden dark-theme relative">
            <Nav></Nav>
            <Card>
                <Link href={"/"}/>
            </Card>
        </div>
    );
};

export default Projects;