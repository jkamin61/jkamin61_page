import React from "react";
import Navigation from "../components/nav";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

const gigs: { title: string, description: string, price: string, link: string }[] = [
    {
        title: "I will debug HTML, CSS, Javascript",
        description: "I am offering fixing bugs in HTML, CSS, JAVASCRIPT code.",
        price: "€14",
        link: "https://www.fiverr.com/s/bw4DQa",
    },
    {
        title: "I will debug React.js, Typescript, Node.js",
        description: "I am offering resolving bug issues in code.",
        price: "€48",
        link: "https://www.fiverr.com/s/QQlj2j",
    },
    {
        title: "I will convert figma/psd to html, css, js",
        description: "I am offering my services to convert psd to html and figma to html responsive website.",
        price: "€48",
        link: "https://www.fiverr.com/s/2vXd0V",
    },
    {
        title: "I will create react js websites",
        description: "I am offering my services to create a react js application.",
        price: "€105",
        link: "https://www.fiverr.com/s/35zYZY",
    },
    {
        title: "I will build web applications with react and node js",
        description: "I am offering my services to create a react js application with node js backend.",
        price: "€134",
        link: "https://www.fiverr.com/s/Ra1x4N",
    },
];

const Services: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden dark-theme relative">
            <Navigation/>
            <div className="my-24">
                <h2 className="text-center text-zinc-400 text-4xl">My fiverr gigs</h2>
                <div className="text-zinc-500">
                    {gigs.map((gig) => (
                        <div
                            key={gig.title}
                            className="flex flex-col h-48 gap-2 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 p-2 m-6"
                        >
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-zinc-400 text-lg">{gig.title}</h3>
                                    <p className="w-2/3">{gig.description}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-zinc-400">Starting from: {gig.price}</p>
                                    <Link
                                        href={gig.link}
                                        className="flex gap-1 items-center justify-between duration-200 text-zinc-500 hover:text-zinc-100"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="text-lg">Go to offer</span>
                                        <ArrowRight/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;