import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/client";
import React, { useState, useEffect } from 'react';


interface statProp {
    stat:number,
    statDescription: string,
}

function SingleStat({stat, statDescription}:statProp) {
    return <span className=''>
        <text className="text-sky-600 text-lg font-bold mr-4">
            {stat}
        </text>
        <text className="text-black font-Verdana text-xl font-light">
            {statDescription}
        </text>
    </span>
}

export default function Stats(userid: string){
    
    const [drawings, setDrawings] = useState(0)
    const [views, setViews] = useState(0)
    const [strokes, setStrokes] = useState(0)
    const [remixes, setRemixes] = useState(0)
    const [likes, setLikes] = useState(0)

    function setData(drawings: number, views: number, strokes: number, remixes: number, likes: number) {
        setDrawings(drawings)
        setViews(views)
        setStrokes(strokes)
        setRemixes(remixes)
        setLikes(likes)
    }
    console.log(userid)

    useEffect(() => {
        const fetchData = async () => {
            await getDoc(doc(db, `/User_info/${userid}`))
                .then(snapshot => {
                if (snapshot.data()) {
                    console.log(snapshot.data())
                    const drawings = snapshot.data()!!["UserStats"]["drawings"];
                    const views = snapshot.data()!!["UserStats"]["views"];
                    const strokes = snapshot.data()!!["UserStats"]["strokes"];
                    const remixes = snapshot.data()!!["UserStats"]["remixes"];
                    const likes = snapshot.data()!!["UserStats"]["likes"];
                    setData(drawings, views, strokes, remixes, likes);
                }
            }
        )
        }
        const result = fetchData()
            .catch(console.error)      
    })

    return (
        <div className="bg-white p-10 rounded-xl drop-shadow-lg w-1/4 h-fit">
            <text className="text-black text-2xl">
                Stats:
            </text>
            <div className="flex flex-col ml-4 mt-2">
                <SingleStat stat={drawings} statDescription={"designs"} />
                <SingleStat stat={views} statDescription={"views"} />
                <SingleStat stat={strokes} statDescription={"paint strokes"} />
                <SingleStat stat={remixes} statDescription={"remixed designs"} />
                <SingleStat stat={likes} statDescription={"likes"} />
            </div>
        </div>
    );
}