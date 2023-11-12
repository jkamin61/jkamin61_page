'use client'

import React, {useEffect} from "react";
import anime from 'animejs';

const ElectricDropGrid = () => {
    return (
        <div className="grid h-full place-content-center px-8">
            <DotGrid/>
        </div>
    )
};

const GRID_WIDTH = 12;
const GRID_HEIGHT = 5;

const DotGrid: React.FC = () => {
    useEffect(() => {
        const handleDotClick = (index: number) => {
            anime({
                targets: ".dot-point",
                scale: [
                    {value: 1.35, easing: 'easeOutSine', duration: 250},
                    {value: 1, easing: 'easeInOutQuad', duration: 500}
                ],
                translateY: [
                    {value: 0, easing: 'easeOutSine', duration: 250},
                    {value: 0, easing: 'easeInOutQuad', duration: 500}
                ],
                opacity: [
                    {value: 1, easing: 'easeOutSine', duration: 250},
                    {value: 0.5, easing: 'easeInOutQuad', duration: 500}
                ],
                delay: anime.stagger(100, {
                    grid: [GRID_WIDTH, GRID_HEIGHT],
                    from: index,
                }),
            });
        };

        handleDotClick(0);
        const intervalId = setInterval(() => {
            handleDotClick(0);
        }, 3000);

        return () => clearInterval(intervalId);

    }, []);

    const dots = [];
    let index = 0;
    for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
            dots.push(
                <div
                    className="group rounded-full p-2 transition-colors"
                    key={`${x}-${y}`}
                >
                    <div
                        className="dot-point h-0.5 w-0.5 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-400 opacity-50"
                    />
                </div>
            );
            index++;
        }
    }

    return (
        <div
            style={{gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`}}
            className="grid w-fit"
        >
            {dots}
        </div>
    )
};

export default ElectricDropGrid;
