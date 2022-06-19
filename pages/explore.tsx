import PaintingCard from "components/PaintingCard";
import type { NextPage } from "next";
import { auth, db } from "../firebase/client";
import { getDocs, addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const Explore: NextPage = ({user}:any) => {
    
    const [drawings, setDrawings] = useState<any[]>([]);

    useEffect(() => {
        getDocs(collection(db, "drawings")).then(docs => {
            let array:any[] = []
            docs.forEach(doc => {
                console.log(doc)
                array.push([doc.data(),doc.id])
            })
            setDrawings(array)
        })
    },[])

    return (
        <>
            <div className="mt-9 ml-9 font-bold text-3xl">Explore</div>
            <div className="flex-wrap justify-around  w-full">
                {drawings.map((drawing:any) => {
                    console.log(drawing.uid)
                    return(
                        <PaintingCard heading={drawing[0].heading} painting={drawing[0].content} onClick={()=>undefined} collaborators={drawing[0].collaborators} upVotes={drawing[0].upvotes} userIcon={drawing[0].creator[2]}/>
                    )}
                    )
                }
            </div>
        </>
        )
}
export default Explore;