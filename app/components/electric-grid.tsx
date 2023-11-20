'use client'

import React, {useEffect} from "react";
import anime from 'animejs';

const ElectricDropGrid = () => {
    const [gridHeight, setGridHeight] = React.useState(5);
    const [gridWidth, setGridWidth] = React.useState(12);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width > 1023) {
                setGridHeight(12);
                setGridWidth(18);
            } else if (width > 767) {
                setGridHeight(7);
                setGridWidth(12);
            } else {
                setGridHeight(5);
                setGridWidth(12);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="grid h-full place-content-center">
            <DotGrid gridHeight={gridHeight} gridWidth={gridWidth}/>
        </div>
    )
};

const DotGrid: React.FC<{ gridHeight: number, gridWidth: number }> = ({gridHeight, gridWidth}) => {
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
                    grid: [gridWidth, gridHeight],
                    from: index,
                }),
            });
        };

        handleDotClick(0);
        const intervalId = setInterval(() => {
            handleDotClick(0);
        }, 3000);

        return () => clearInterval(intervalId);

    }, [gridHeight, gridWidth]);

    const dots = [];
    let index = 0;
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
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
            style={{gridTemplateColumns: `repeat(${gridWidth}, 1fr)`}}
            className="grid w-fit"
        >
            {dots}
        </div>
    )
};

export default ElectricDropGrid;
