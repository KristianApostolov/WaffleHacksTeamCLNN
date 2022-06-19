import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/client";
import React, { useState, useEffect } from 'react';


export default function Stats(){
    
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

    useEffect(() => {
        const fetchData = async () => {
            await getDoc(doc(db, "/User_info/NiymYFmYbE6oapDh1l2z"))
                .then(snapshot => {
                if (snapshot.data()) {
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
        <div>
            <span className='ml-16 text-#3366BB font-Verdana text-2xl font-light cursor-pointer'> {drawings} </span>
            <span className='ml-16 text-#3366BB font-Verdana text-2xl font-light cursor-pointer'> {views} </span>
            <span className='ml-16 text-#3366BB font-Verdana text-2xl font-light cursor-pointer'> {strokes} </span>
            <span className='ml-16 text-#3366BB font-Verdana text-2xl font-light cursor-pointer'> {remixes} </span>
            <span className='ml-16 text-#3366BB font-Verdana text-2xl font-light cursor-pointer'> {likes} </span>
        </div>
    );
}