import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/client";
import React, { useState, useEffect } from 'react';

function getSnapshot() {
    return (
        useEffect(() => {

            getDoc(doc(db, "/User_info/NiymYFmYbE6oapDh1l2z"))
                .then(snapshot => {

                    const drawings = snapshot.data()["UserStats"]["drawings"];
                    const views = snapshot.data()["UserStats"]["views"];
                    const strokes = snapshot.data()["UserStats"]["strokes"];
                    const remixes = snapshot.data()["UserStats"]["remixes"];
                    const likes = snapshot.data()["UserStats"]["likes"];

                    return ([drawings, views, strokes, remixes, likes]);
                }
            )
        }))
};



export default function Stats(){
    
    const values = getSnapshot()
    return (
        <span className='ml-16 text-#3366BB font-Verdana text-2xl font-light cursor-pointer'> ${values[0]} </span>
    );
}