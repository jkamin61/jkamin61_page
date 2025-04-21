import React, {useEffect, useState} from "react";
import {getRandomInt} from './particles';
interface Dots {
    startX: number;
    startY: number;
    animationDelay: string;
    style: React.CSSProperties;
    directionX: number;
    directionY: number;
}

const Dots: React.FC<{ numberOfDots: number }> = ({ numberOfDots }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [dots, setDots] = useState<Array<Dots>>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        const generatedDots: Array<Dots> = [];
        for (let i = 0; i < numberOfDots; i++) {
            const shade: number = getRandomInt(100, 120);
            const startX: number = getRandomInt(0, 100);
            const startY: number = getRandomInt(0, 100);
            const directionX: number = Math.random() < 0.5 ? 1 : -1;
            const directionY: number = Math.random() < 0.5 ? 1 : -1;
            const animationDelay: string = `${getRandomInt(0, 5)}s`;
            const style: React.CSSProperties = {
                left: `${startX}vw`,
                top: `${startY}vh`,
                animationDelay: animationDelay,
                background: `rgb(${shade}, ${shade}, ${shade})`,
            };

            generatedDots.push({
                startX,
                startY,
                animationDelay,
                style,
                directionX,
                directionY,
            });
        }

        setDots(generatedDots);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [numberOfDots]);

    return (
        <div>
            {dots.map((dot, i) => {
                const directionX = ((mousePosition.x - dot.startX) / 1200) * 1.5;
                const directionY = ((mousePosition.y - dot.startY) / 1200) * 1.5;
                const left = dot.startX + directionX;
                const top = dot.startY + directionY;

                return (
                    <div
                        key={i}
                        className="dot"
                        style={{
                            left: `${left}vw`,
                            top: `${top}vh`,
                            animationDelay: dot.animationDelay,
                            background: dot.style.background,
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default Dots;