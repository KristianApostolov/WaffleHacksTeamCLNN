import type { NextPage, NextPageContext } from "next";
import { FaFill, FaEraser, FaPencilAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase/client";
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

import {
    addDoc,
    collection,
    doc,
    Timestamp,
    setDoc,
    getDoc,
} from "firebase/firestore";

interface DrawProps {
    id?: string;
    user?: any;
    image?: string;
}

const canvasTools = [
    { name: "bucket", icon: <FaFill /> },
    { name: "eraser", icon: <FaEraser /> },
    { name: "pencil", icon: <FaPencilAlt /> },
];

const Draw: NextPage = ({ id, user, image }: DrawProps) => {
    const { colors, lastColor, setLastColor } = useRandomColors(10);
    const [activeTool, setActiveTool] = useState("pencil");
    const [activeColor, setActiveColor] = useState("#9e0142");
    const [title, setTitle] = useState("Untitled Drawing");
    const canvasRef = useRef<HTMLCanvasElement>(null);

    async function PublishImage() {
        const data = {
            heading: title,
            content: canvasRef.current!.toDataURL("image/png"),
            created: Timestamp.now(),
            creator: [user.uid, user.displayName, user.photoURL],
            collaborators: [],
            upvotes: 0,
        };

        await addDoc(collection(db, "drawings"), data)
            .then((document) => {
                console.log(document, document.id);
            })
            .catch((e) => {
                console.error(e);
            });
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

                        <Button
                            className="w-full mt-4"
                            onClick={async () => await PublishImage()}
                        >
                            Publish
                        </Button>
                    </div>

                    <Canvas
                        initialImage={image}
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

export const getServerSideProps = async (context: NextPageContext) => {
    const id = context.query.id! as string;

    if (id === "new") {
        return {
            props: {
                id,
            },
        };
    }

    const docRef = doc(db, "drawings", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();

        return {
            props: {
                id: context.query.id,
                image: data.content,
            },
        };
    }

    return {
        notFound: true,
        redirect: {
            destination: "/",
        },
    };
};
