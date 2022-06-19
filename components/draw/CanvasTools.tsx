import tw from "tailwind-styled-components";
import { ChangeEventHandler, MouseEventHandler } from "react";

import mergeTailwind from "utils/mergeTailwind";

export const CanvasToolWrapper = tw.div`
    grid
    grid-cols-3
    gap-4
`;

interface CanvasToolProps {
    active?: boolean;
    icon?: React.ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export const CanvasTool = ({ active, icon, onClick }: CanvasToolProps) => {
    return (
        <div
            className={mergeTailwind(
                "h-12 w-12 grid place-items-center rounded-lg border text-slate-400 cursor-pointer",
                active ? "border-sky-500 text-sky-500" : ""
            )}
            onClick={onClick}
        >
            {icon && icon}
        </div>
    );
};

interface CanvasColorProps {
    color: string;
    active: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export const CanvasColor = ({ color, active, onClick }: CanvasColorProps) => {
    return (
        <div
            className="h-12 w-12 rounded-lg cursor-pointer border"
            onClick={onClick}
            style={{
                boxShadow: active ? `0 0.25rem 0.5rem ${color}` : "",
                backgroundColor: color,
            }}
        ></div>
    );
};

interface CanvasColorPickerProps {
    defaultColor: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export const CanvasColorPicker = ({
    defaultColor,
    onChange,
    onClick,
}: CanvasColorPickerProps) => {
    return (
        <div
            className="w-full h-20 rounded-lg border"
            style={{ backgroundColor: defaultColor }}
        >
            <input
                className="h-full w-full opacity-0 cursor-pointer"
                type="color"
                value={defaultColor}
                onChange={onChange}
                onClick={onClick}
            />
        </div>
    );
};
