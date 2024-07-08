import Navigation from "../../components/nav";
import React from "react";
import Link from "next/link";

const projects: { date: string, title: string, description: string, link: string }[] = [
    {
        date: "June 20, 2024",
        title: "Ultimate tic tac toe",
        description: "Game built in Java with graphical user interface implemented with Java Swing, AWT, JavaFX",
        link: "https://github.com/jkamin61/tic-tac-toe_OX"
    },
    {
        date: "May 10, 2024",
        title: "Task sphere",
        description: "Application built in Java with graphical user interface implemented with Java Swing, AWT",
        link: "https://github.com/jkamin61/task-sphere"
    },
    {
        date: "Nov 20, 2023",
        title: "jkamin61.dev",
        description: "My personal website built with Next.js, Typescript and TailwindCSS.",
        link: "/",
    },
    {
        date: "Sep 10, 2023",
        title: "Contact Management API",
        description: "A REST API built with Node.js, Express.js and MongoDB.",
        link: "https://github.com/jkamin61/nodejs-homework-template",
    },
    {
        date: "Oct 3, 2023",
        title: "Finance Management API",
        description: "A REST API built with Node.js, Express.js and MongoDB. Documentation written with Swagger. Fully implemented by me for team frontend project.",
        link: "https://github.com/jkamin61/wallet-app-backend",
    },
    {
        date: "May 10, 2023",
        title: "Contact Management System",
        description: "A web application built with React.js and Redux. Stores data in local storage.",
        link: "https://jkamin61.github.io/Contact-keeper/",
    },
    {
        date: "Apr 17, 2023",
        title: "Image finder",
        description: "A web application built with React.js and custom css. Uses public API to fetch images.",
        link: "https://jkamin61.github.io/goit-react-hw-04-images/",
    },
];

const IndividualProjectsPage = () => {
    return (
        <div
            className="relative flex flex-col items-center pt-20 px-6 mx-auto w-full h-full overflow-hidden dark-theme">
            <Navigation/>
            <div className="my-8 sm:my-16 divide-y divide-zinc-800 divide-dashed">
                <div className="">
                    <h2 className="text-3xl text-zinc-300">Projects</h2>
                    <p className="py-4 text-zinc-400">Some of projects from my own time and from course.</p>
                </div>
                <div className="h-full">
                    {projects.map((project) => (
                        <div key={project.title}
                             className="my-5 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                            <Link href={project.link} target="_blank">
                                <article className="text-zinc-300 p-4">
                                <span>
                                <p className="text-sm">{project.date}</p>
                                    </span>
                                    <h3 className="text-2xl my-2">{project.title}</h3>
                                    <p className="text-md text-zinc-400">{project.description}</p>
                                </article>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IndividualProjectsPage;
