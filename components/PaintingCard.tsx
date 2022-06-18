import { FaArrowUp } from "react-icons/fa";

interface PaintingCardProps {
    painting: any
    onClick: Function
    upVotes: number
    userIcon: string
    collaborators: any
}

export default function PaintingCard({painting, onClick, upVotes, userIcon,collaborators}:PaintingCardProps) {
    return ( 
        <div className="inline-flex items-center flex-col m-16">
            <div className="h-52 w-52 rounded-3xl bg-gray-300 ">
                   
            </div>
            <div className="flex items-center justify-between mt-2 w-48">
                <div className="flex items-center">
                    <div className="rounded-full h-6 w-6 bg-black mr-1"></div>
                    <div>
                        and {collaborators == undefined ? 0: collaborators} more.
                    </div>
                </div>
                <div className="flex items-center">
                    <FaArrowUp className="mr-1 cursor-pointer h-5 w-5"/>
                    <div>{upVotes === undefined && 0}</div>
                </div>
            </div>
        </div>
     )
}
