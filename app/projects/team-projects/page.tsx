import Navigation from "../../components/nav";
import React from "react";
import Link from "next/link";

const projects: { date: string, title: string, description: string, link: string }[] = [
    {
        date: "Oct 10, 2023",
        title: "Wallet App",
        description: "Application to manage your finances. Built with React.js, Redux, Node.js, MongoDB. Implemented during my GoIT studies with my team.",
        link: "https://wallet-app-teamloremipsum.netlify.app",
    },
    {
        date: "Feb 23, 2023",
        title: "Film library",
        description: "A web application built with Vanilla Javascript. Uses public API to fetch data",
        link: "https://jkamin61.github.io/film_library_project/"
    },
];

const GroupProjectsPage = () => {
    return (
        <div
            className="relative flex flex-col items-center p-20 px-6 mx-auto w-full h-full overflow-hidden dark-theme">
            <Navigation/>
            <div className="my-8 sm:my-16 divide-y divide-zinc-800 divide-dashed">
                <div className="">
                    <h2 className="text-3xl text-zinc-300">Team Projects</h2>
                    <p className="py-4 text-zinc-400">Projects built with teams selected by mentors during my fullstack
                        developer course.</p>
                </div>
                <div className="pb-56 lg:pb-72">
                    {projects.map((project) => (
                        <div key={project.title}
                             className="my-5 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                            <Link href={project.link}>
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

export default GroupProjectsPage;