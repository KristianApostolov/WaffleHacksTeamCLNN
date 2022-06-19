import { useRef, useEffect } from "react";

import Mouse from "./Mouse";
import floodFill, { cssTo32BitColor } from "utils/floodFill";

const LINE_SIZE = 10;

interface CanvasProps {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    activeTool: string;
    activeColor: string;
    initialImage?: string;
}

function HEXToVBColor(rrggbb: string) {
    const bbggrr =
        rrggbb.substring(4, 2) +
        rrggbb.substring(2, 2) +
        rrggbb.substring(0, 2);

    return parseInt(bbggrr, 16);
}

const Canvas = ({
    canvasRef,
    activeTool,
    activeColor,
    initialImage,
}: CanvasProps) => {
    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const [width, height] = [canvas.offsetWidth, canvas.offsetHeight];

        // create initial blank canvas
        Object.assign(canvas, { width, height });
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, width, height);

        if (initialImage) {
            const image = new Image();
            image.onload = () => {
                ctx.drawImage(image, 0, 0, width, height);
            };
            image.src = initialImage;
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const [width, height] = [canvas.offsetWidth, canvas.offsetHeight];

        // canvas state
        let animationId: number = 0;
        let mouse = new Mouse({ target: canvas });

        let prevMouseX: number | null;
        let prevMouseY: number | null;

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const _activeColor = activeTool === "eraser" ? "#fff" : activeColor;

            if (mouse.down && ["pencil", "eraser"].includes(activeTool)) {
                ctx.fillStyle = _activeColor;
                ctx.strokeStyle = _activeColor;

                // draw main circle
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, LINE_SIZE / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();

                // draw line to smooth out curve
                if (prevMouseX && prevMouseY) {
                    ctx.lineWidth = LINE_SIZE;
                    ctx.beginPath();
                    ctx.moveTo(prevMouseX, prevMouseY);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                    ctx.closePath();
                }

                prevMouseX = mouse.x;
                prevMouseY = mouse.y;
            } else if (mouse.down && activeTool === "bucket") {
                mouse.down = false;

                floodFill(
                    ctx,
                    parseInt(mouse.x.toString()),
                    parseInt(mouse.y.toString()),
                    cssTo32BitColor(activeColor)
                );
            } else {
                prevMouseX = null;
                prevMouseY = null;
            }
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            mouse.dispose();
        };
    }, [activeTool, activeColor]);

    return (
        <canvas
            className="w-[75vmin] h-[75vmin] rounded-xl border border-gray-300 shadow-lg"
            ref={canvasRef}
        ></canvas>
    );
};

export default Canvas;
