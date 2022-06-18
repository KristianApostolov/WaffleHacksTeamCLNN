interface MouseProps {
    target: HTMLElement;
}

// export Mouse class component
export default class Mouse {
    down: boolean = false;

    prevX: number = 0;
    prevY: number = 0;

    x: number = 0;
    y: number = 0;

    target: HTMLElement;

    constructor({ target }: MouseProps) {
        this.target = target;
        this.addEventListeners();
    }

    addEventListeners() {
        const target = this.target;

        target.addEventListener("mousedown", this.onMouseDown.bind(this));
        target.addEventListener("mousemove", this.onMouseMove.bind(this));
        target.addEventListener("mouseup", this.onMouseUp.bind(this));
    }

    convertCoordinates(x: number, y: number) {
        const targetBbox = this.target.getBoundingClientRect();

        return {
            x: x - targetBbox.left,
            y: y - targetBbox.top,
        };
    }

    onMouseDown(e: MouseEvent) {
        this.down = true;

        const { x, y } = this.convertCoordinates(e.clientX, e.clientY);
        this.x = x;
        this.y = y;
    }

    onMouseMove(e: MouseEvent) {
        const { x, y } = this.convertCoordinates(e.clientX, e.clientY);
        this.x = x;
        this.y = y;
    }

    onMouseUp(_: MouseEvent) {
        this.down = false;
    }

    // remove event listeners (do this in cleanup useEffect)
    dispose() {
        const target = this.target;

        target.removeEventListener("mousedown", this.onMouseDown.bind(this));
        target.removeEventListener("mousemove", this.onMouseMove.bind(this));
        target.removeEventListener("mouseup", this.onMouseUp.bind(this));
    }
}
