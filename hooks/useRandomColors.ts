import { useEffect, useState } from "react";

const randomColor = () =>
    "#" + Math.floor(Math.random() * 0xffffff).toString(16);

const defaultPalette = [
    "#9e0142",
    "#d53e4f",
    "#f46d43",
    "#fdae61",
    "#fee08b",
    "#e6f598",
    "#abdda4",
    "#66c2a5",
    "#3288bd",
    "#5e4fa2",
];

const useRandomColor = (
    colorsCount: number,
    useDefaultPalette: boolean = true
) => {
    const [randomColors, setRandomColors] = useState(
        new Array(colorsCount).fill(0)
    );

    const colors = randomColors.slice(0, colorsCount - 1);
    const lastColor = randomColors[colorsCount - 1];

    useEffect(() => {
        setRandomColors(
            useDefaultPalette
                ? defaultPalette.slice(0, colorsCount)
                : randomColors.map((_) => randomColor())
        );
    }, []);

    const setLastColor = (color: string) => {
        setRandomColors([...colors, color]);
    };

    return {
        colors,
        lastColor,
        setLastColor,
    };
};

export default useRandomColor;
