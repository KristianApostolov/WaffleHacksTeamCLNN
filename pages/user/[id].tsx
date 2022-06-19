import type { NextPage, NextPageContext } from "next";
import Canvas from "components/draw/Canvas";
import { doc, getDoc } from "firebase/firestore";
import { snapshotEqual } from "firebase/firestore";
import { db } from "../../firebase/client"

/*
import {getDatabase, ref, child, get} from "..firebase/database";
import { snapshotEqual } from "firebase/firestore";
*/

interface UserProps {
    id?: string;
}

async function getSnapshot() {
    await getDoc(doc(db, "/User_info/NiymYFmYbE6oapDh1l2z"))
        .then(snapshot => {
            
            var drawings = snapshot.data()["UserStats"]["drawings"]
            var views = snapshot.data()["UserStats"]["views"]
            var strokes = snapshot.data()["UserStats"]["strokes"]
            var remixes = snapshot.data()["UserStats"]["remixes"]
            var likes = snapshot.data()["UserStats"]["likes"]

            console.log(drawings, views, strokes, remixes, likes);
        })
    }
/*
const db = getDatabase();
const nameRef = ref(db)
get(child(nameRef, "name")).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val())
    }
}).catch((error) => {
});
*/


const User: NextPage = ({ id }: UserProps) => {
    getSnapshot()
    return (
        <>
            <h1>Untitled Copy of Mickey Mouse</h1>
            <div className="flex">
                <div></div>
            </div>
        </>
    );
};

export default User;

export const getServerSideProps = (context: NextPageContext) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};
