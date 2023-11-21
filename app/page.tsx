'use client'

import React from 'react';
import Dots from '../app/components/dots';
import Image from 'next/image';
import logo from "../public/jkamin_dev.png";
import Link from 'next/link';

const navigation = [
    {name: 'Projects', href: '/projects'},
    {name: 'Services', href: '/services'},
    {name: 'Contact', href: '/contact'},
]

const Home: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden dark-theme relative">
            <nav className="my-16 animate-fade-in mx-auto">
                <ul className="flex flex-wrap items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <li key={item.href}>
                            <Link key={item.href} href={item.href}
                                  className="md:text-lg lg:text-xl xl:text-2xl duration-500 text-zinc-500 hover:text-zinc-300">
                                {item.name}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>
            <Dots numberOfDots={40}/>
            <div>
                <Image src={logo} alt="logo" priority={true} height="60"/>
            </div>
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm md:text-base lg:text-lg xl:text-xl text-zinc-500 mx-auto">
                    Hi, my name is Julius, I am a passionate fullstack developer.
                    <br/>This website is my introduction.
                </h2>
            </div>
        </div>
    );
};

export default Home;
