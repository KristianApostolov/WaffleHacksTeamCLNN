import { useRef, useEffect } from "react";
import Mouse from "./Mouse";

const LINE_SIZE = 5;

const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d");
        const size = {
            width: canvas.offsetWidth,
            height: canvas.offsetHeight,
        };

        Object.assign(canvas, size);

        // canvas state
        let animationId: number = 0;
        let mouse = new Mouse({ target: canvas });

        let prevMouseX: number | null;
        let prevMouseY: number | null;

        if (!(ctx && canvas)) {
            return;
        }

        // create initial blank canvas
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, size.width, size.height);

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            if (mouse.down) {
                // draw main circle
                ctx.fillStyle = "#000";
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
    }, []);

    return (
        <canvas
            className="w-[75vmin] h-[75vmin] rounded-xl border shadow-lg"
            ref={canvasRef}
        ></canvas>
    );
};

export default Canvas;
