import { useMemo } from 'react';

const getRandomWavePath = () => {
    const randomC1 = Math.floor(Math.random() * 200);
    const randomC2 = Math.floor(Math.random() * 500 + 200);
    const randomC3 = Math.floor(Math.random() * 700 + 400);
    return `M0,0 C${randomC1},${randomC2} ${randomC2},${randomC3} 400,1440`;
};

const generateGreenTone = (index: number) => {
    const baseColor = [125, 207, 137]; // RGB of #7dcf89
    const variation = 12 * index; // Adjust variation
    return `rgb(${baseColor[0] - variation}, ${baseColor[1]}, ${baseColor[2]})`;
};

const Waves = () => {
    const wavePaths = useMemo(() => Array.from({ length: 9 }, () => getRandomWavePath()), []);

    return (
        <div className="absolute top-0 left-0 w-screen h-full overflow-hidden">
            <svg viewBox="0 0 400 1440" className="w-full h-full">
                {wavePaths.map((d, index) => (
                    <path
                        key={index}
                        fill="none"
                        stroke={generateGreenTone(index)} // Color variation in green
                        strokeWidth={1 + (index % 3)} // Varied stroke width
                        className={`wave wave-${index + 1}`}
                        d={d}
                    />
                ))}
            </svg>
        </div>
    );
};

export default Waves;

