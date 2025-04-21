"use client";
import {Github, Mail, Linkedin} from "lucide-react";
import Navigation from "../components/nav";
import {Card} from "../components/card";
import React from "react";
import Link from "next/link";

export type Socials = {
    icon: JSX.Element,
    href: string,
    label: string,
    handle: string
}

const socials: Socials[] = [
    {
        icon: <Linkedin size={20}/>,
        href: "https://www.linkedin.com/in/jkamin61/",
        label: "Linkedin",
        handle: "@jkamin61_",
    },
    {
        icon: <Mail size={20}/>,
        href: "mailto:juliuszkaminskim@gmail.com",
        label: "Email",
        handle: "juliuszkaminskim@gmail.com",
    },
    {
        icon: <Github size={20}/>,
        href: "https://github.com/jkamin61",
        label: "Github",
        handle: "jkamin61",
    },
];

export default function Contact() {
    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden dark-theme relative">
            <Navigation/>
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
                    {socials.map((s) => (
                        <Card key={s.label}>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                            >
								<span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span
                                    className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-800 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
                                <div className="z-10 flex flex-col items-center">
									<span
                                        className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
                                    <span
                                        className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}