import type { NextPage, NextPageContext } from "next";
import Canvas from "components/draw/Canvas";

interface UserProps {
    id?: string;
}

const User: NextPage = ({ id }: UserProps) => {
    return (
        <>
            <h1>Untitled Copy of Mickey Mouse</h1>
            <div className="flex">
                <div></div>
                <Canvas />
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
