import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { db } from "../firebase/client";

interface PaintingCardProps {
    painting: any;
    onClick: Function;
    upVotes: number;
    userIcon: string;
    collaborators: any[];
    heading: string;
    id: string;
}

export default function PaintingCard({
    heading,
    painting,
    onClick,
    upVotes,
    userIcon,
    collaborators,
    id,
}: PaintingCardProps) {
    function handleUpvote() {}

    return (
        <div className="inline-flex items-center justify-center flex-col m-8">
            <h1 className="font-semibold">{heading}</h1>
            <Link href={`/draw/${id}`}>
                <a>
                    <img
                        className="h-52 w-52 rounded-3xl border border-gray-300 overflow-hidden cursor-pointer"
                        src={painting}
                    ></img>
                </a>
            </Link>
            <div className="flex items-center justify-between mt-2 w-48">
                <div className="flex items-center">
                    <img
                        src={userIcon}
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
                <div className="flex items-center">
                    <FaArrowUp className="mr-1 cursor-pointer h-5 w-5" />
                    <div className="font-semibold">
                        {upVotes === undefined ? 0 : upVotes}
                    </div>
                </div>
            </div>
        </div>
    );
}
