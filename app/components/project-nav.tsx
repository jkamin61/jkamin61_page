'use client'

import React, {useEffect} from "react";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import anime from 'animejs';
import ElectricDropGrid from "../components/electric-grid";

const AnimatedProjectItem: React.FC<{ title: string, link: string }> = ({title, link}) => {
    useEffect(() => {
        anime({
            targets: '.project-item',
            translateY: [120, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutQuart',
            delay: anime.stagger(200),
        });
    }, []);

    return (
        <li className="opacity-0 w-64 h-36 flex flex-col justify-center text-center duration-200 hover:text-zinc-100 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 p-6 md:py-24 lg:py-36 lg:w-full project-item">
            <div className="flex justify-center items-center"><ElectricDropGrid/></div>
            <div className="flex flex-row gap-2 justify-between items-center pt-1">
                <span
                    className="font-medium duration-150 lg:text-3xl text-zinc-400 group-hover:text-white font-display">{title}</span>
                <Link href={link} className="duration-200 text-zinc-500 hover:text-zinc-100">
                    <ArrowRight/>
                </Link>
            </div>
        </li>
    );
};

export default AnimatedProjectItem;
