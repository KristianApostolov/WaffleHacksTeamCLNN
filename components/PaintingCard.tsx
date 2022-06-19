import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { db } from "../firebase/client";

interface PaintingCardProps {
    painting: any;
    onClick: Function;
    upvotedBy: any[];
    user: any[];
    collaborators: any[];
    heading: string;
    id: string;
}

export default function PaintingCard({
    heading,
    painting,
    onClick,
    upvotedBy,
    user,
    collaborators,
    id,
}: PaintingCardProps) {
    function handleUpvote() {
        //const data = getDoc(doc(db, "drawings", id));
        updateDoc(doc(db, `drawings/${id}`), {upvotedBy: [...upvotedBy, user[0]]}).then(() => {setUpvotedBy([...upvotedBy, user[0]])});
    }
    function handleUnVote() {
        const index = upvotedlist.indexOf(user[0])
        console.log(index)
        const newarr = upvotedlist.length === 1 && upvotedlist.includes(user[0])?[]:upvotedlist.splice(index, 1)
        updateDoc(doc(db, `drawings/${id}`), {upvotedBy: [...newarr]}).then(() => {
            setUpvotedBy(newarr)
            console.log(1123,newarr)
        });
    }

    const [upvotedlist, setUpvotedBy] = useState(upvotedBy);

    return (
        <div className="inline-flex items-center justify-center flex-col m-8">
            <h1 className="font-semibold max-w-[80%] overflow-x-hidden text-ellipsis mx-auto">
                {heading}
            </h1>
            <Link href={`/draw/${id}`}>
                <a className="">
                    <img
                        className="h-52 w-52 mt-2 rounded-3xl border border-gray-300 overflow-hidden cursor-pointer"
                        src={painting}/>
                </a>
            </Link>
            <div className="flex items-center justify-between mt-2 w-48">
                <div className="flex items-center">
                    <img
                        src={user[2]}
                        className="rounded-full h-6 w-6 bg-black z-10"
                    ></img>
                    {collaborators.map((collaborator: any) => {
                        const currentIndex =
                            collaborators.indexOf(collaborator);
                        if (currentIndex < 4) {
                            return (
                                <div
                                    style={{
                                        background:
                                            "#" +
                                            Math.floor(
                                                Math.random() * 16777215
                                            ).toString(16),
                                        marginLeft: -0.4 + "rem",
                                        zIndex: "-" + currentIndex,
                                    }}
                                    className="rounded-full h-6 w-6 bg-red-400 shadow-2xl -z-10"
                                ></div>
                            );
                        }
                    })}
                    {collaborators.length > 4 && (
                        <span className="cursor-default ml-1">...</span>
                    )}
                </div>
                <div className="flex items-center" style={{rotate:upvotedlist.includes(user[0])?'180':undefined,color:upvotedlist.includes(user[0])?'#0ea5e9':undefined}}>
                    <FaArrowUp className="mr-1 cursor-pointer h-5 w-5" onClick={()=>!upvotedlist.includes(user[0])?handleUpvote():handleUnVote()}/>
                    <div className="font-semibold">
                        {upvotedlist.length === 0 ? 0 : upvotedlist.length}
                    </div>
                </div>
            </div>
        </div>
    );
}
