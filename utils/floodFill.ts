function getPixel(pixelData: any, x: number, y: number) {
    if (x < 0 || y < 0 || x >= pixelData.width || y >= pixelData.height) {
        return -1; // impossible color
    } else {
        return pixelData.data[y * pixelData.width + x];
    }
}

export default function floodFill(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    fillColor: number
) {
    // read the pixels in the canvas
    const imageData = ctx.getImageData(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
    );

    // make a Uint32Array view on the pixels so we can manipulate pixels
    // one 32bit value at a time instead of as 4 bytes per pixel
    const pixelData = {
        width: imageData.width,
        height: imageData.height,
        data: new Uint32Array(imageData.data.buffer),
    };

    // get the color we're filling
    const targetColor = getPixel(pixelData, x, y);

    // check we are actually filling a different color
    if (targetColor !== fillColor) {
        const pixelsToCheck = [x, y];
        while (pixelsToCheck.length > 0) {
            const y = pixelsToCheck.pop();
            const x = pixelsToCheck.pop();

            if (x && y) {
                const currentColor = getPixel(pixelData, x, y);
                if (currentColor === targetColor) {
                    pixelData.data[y * pixelData.width + x] = fillColor;
                    pixelsToCheck.push(x + 1, y);
                    pixelsToCheck.push(x - 1, y);
                    pixelsToCheck.push(x, y + 1);
                    pixelsToCheck.push(x, y - 1);
                }
            }
        }

        // put the data back
        ctx.putImageData(imageData, 0, 0);
    }
}

export const cssTo32BitColor = (function () {
    let ctx: CanvasRenderingContext2D;

    return function (cssColor: string) {
        if (!ctx) {
            ctx = document.createElement("canvas").getContext("2d")!;
            ctx.canvas.width = 1;
            ctx.canvas.height = 1;
        }

        ctx.clearRect(0, 0, 1, 1);
        ctx.fillStyle = cssColor;
        ctx.fillRect(0, 0, 1, 1);

        const imgData = ctx.getImageData(0, 0, 1, 1);
        return new Uint32Array(imgData.data.buffer)[0];
    };
})();
