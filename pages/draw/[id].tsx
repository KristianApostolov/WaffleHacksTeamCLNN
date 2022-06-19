import type { NextPage, NextPageContext } from "next";
import { FaFill, FaEraser, FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

import { CenterDiv } from "components/utils";
import { Button } from "components/atoms";

import Canvas from "components/draw/Canvas";
import {
    CanvasToolWrapper,
    CanvasTool,
    CanvasColor,
    CanvasColorPicker,
} from "components/draw/CanvasTools";

import useRandomColors from "hooks/useRandomColors";

interface DrawProps {
    id?: string;
}

const canvasTools = [
    { name: "bucket", icon: <FaFill /> },
    { name: "eraser", icon: <FaEraser /> },
    { name: "pencil", icon: <FaPencilAlt /> },
];

const Draw: NextPage = ({ id }: DrawProps) => {
    const { colors, lastColor, setLastColor } = useRandomColors(10);
    const [activeTool, setActiveTool] = useState("pencil");
    const [activeColor, setActiveColor] = useState("#9e0142");

    return (
        <CenterDiv>
            <div>
                <h1 className="text-3xl font-semibold font-inter mt-8">
                    Untitled Drawing
                </h1>
                <div className="flex gap-6 mt-4">
                    <div className="flex flex-col justify-between">
                        <div>
                            <CanvasToolWrapper>
                                {canvasTools.map((tool) => (
                                    <CanvasTool
                                        key={tool.name}
                                        active={activeTool === tool.name}
                                        icon={tool.icon}
                                        onClick={() => {
                                            setActiveTool(tool.name);
                                        }}
                                    />
                                ))}
                            </CanvasToolWrapper>

                            <CanvasToolWrapper className="my-4">
                                {colors.map((color: string, i) => (
                                    <CanvasColor
                                        active={activeColor === color}
                                        color={color}
                                        key={i}
                                        onClick={() => {
                                            setActiveColor(color);

                                            if (activeTool === "eraser") {
                                                setActiveTool("pencil");
                                            }
                                        }}
                                    />
                                ))}
                            </CanvasToolWrapper>

                            <CanvasColorPicker
                                defaultColor={lastColor}
                                onChange={(e) => {
                                    setLastColor(e.target.value);
                                    setActiveColor(e.target.value);
                                }}
                                onClick={(e) => {
                                    // yeah ok ts stop messing with me
                                    setActiveColor((e as any).target.value);
                                }}
                            />
                        </div>

                        <Button className="w-full mt-4">Publish</Button>
                    </div>

                    <Canvas activeTool={activeTool} activeColor={activeColor} />
                </div>
            </div>
        </CenterDiv>
    );
};

export default Draw;

export const getServerSideProps = (context: NextPageContext) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};
