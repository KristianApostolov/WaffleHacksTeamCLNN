import type { NextPage, NextPageContext } from "next";
import Canvas from "components/draw/Canvas";
import { doc, getDoc } from "firebase/firestore";
import { snapshotEqual } from "firebase/firestore";
import { db } from "../../firebase/client"

interface UserProps {
    id?: string;
}

async function getSnapshot() {
    await getDoc(doc(db, "/User_info/NiymYFmYbE6oapDh1l2z"))
        .then(snapshot => {
            console.log(snapshot.data())
        })
    }

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
