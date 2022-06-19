import type { NextPage, NextPageContext } from "next";
import { FaFill, FaEraser, FaPencilAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase/client";
import { setDoc } from "firebase/firestore";
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
import { addDoc , collection, doc, Timestamp } from "firebase/firestore";

interface DrawProps {
    id?: string;
    user?: any;
}

const canvasTools = [
    { name: "bucket", icon: <FaFill /> },
    { name: "eraser", icon: <FaEraser /> },
    { name: "pencil", icon: <FaPencilAlt /> },
];

const Draw: NextPage = ({ id,user }: DrawProps) => {
    const { colors, lastColor, setLastColor } = useRandomColors(10);
    const [activeTool, setActiveTool] = useState("pencil");
    const [activeColor, setActiveColor] = useState("#9e0142");
    const [title, setTitle] = useState("Untitled Drawing");
    const canvasRef = useRef<HTMLCanvasElement>(null);

    async function PublishImage(){
        const data = {
            heading:title,
            content: canvasRef.current!.toDataURL("image/png"),
            created: Timestamp.now(),
            creator: [user.uid, user.displayName, user.photoURL],
            collaborators: [],
            upvotes:0,
        }
        await addDoc(collection(db, "drawings"), data).then(() => {}).catch((e) => {console.error(e)});
    }
    return (
        <CenterDiv>
            <div>
                <input
                    className="text-3xl font-semibold font-inter mt-8"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

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

                        <Button className="w-full mt-4" onClick={async()=> await PublishImage()}>Publish</Button>
                    </div>

                    <Canvas
                        canvasRef={canvasRef}
                        activeTool={activeTool}
                        activeColor={activeColor}
                    />
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
