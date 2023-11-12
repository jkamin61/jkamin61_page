import React from "react";
import Nav from "../components/nav"
import Link from "next/link";
import ElectricDropGrid from "../components/electric-grid";
import {ArrowRight} from "lucide-react";

const Projects: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden dark-theme relative">
            <Nav></Nav>
            <nav>
                <ul className="flex flex-col gap-2 text-zinc-500 text-md">
                    <li className="w-64 h-36 flex flex-col justify-center text-center duration-200 hover:text-zinc-100 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 p-6">
                        <ElectricDropGrid/>
                        <span className="flex justify-between pt-1">
                            <span className="text-start">Individual Projects</span>
                            <Link href="/" className="duration-200 text-zinc-500 hover:text-zinc-100">
                                <ArrowRight/>
                            </Link>
                        </span>
                    </li>
                    <li className="w-64 h-36 flex flex-col justify-center text-center duration-200 hover:text-zinc-100 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 p-6">
                        <ElectricDropGrid/>
                        <span className="flex justify-between pt-1">
                            <span className="text-start">Group Projects</span>
                            <Link href="/" className="duration-200 text-zinc-500 hover:text-zinc-100">
                                <ArrowRight/>
                            </Link>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Projects;