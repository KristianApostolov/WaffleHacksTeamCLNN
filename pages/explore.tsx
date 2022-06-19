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
                array.push(doc.data())
            })
            setDrawings(array)
        })
    },[])

    return (
        <>
            <div className="mt-9 ml-9 font-bold text-3xl">Explore</div>
            <div className="flex-wrap justify-around  w-full">
                {drawings.map((drawing:any) => {
                    return(
                        <PaintingCard heading="Big heading heredda" painting={'dasd'} onClick={()=>undefined} collaborators={[[],[],[],[],[],[]]}upVotes={1} userIcon={''}/>
                    )}
                    )
                }
            </div>
        </>
        )
}
export default Explore;