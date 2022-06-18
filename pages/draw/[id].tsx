import type { NextPage, NextPageContext } from "next";
import Canvas from "components/draw/Canvas";

interface DrawProps {
    id?: string;
}

const Tool = () => {
    return <div></div>;
};

const ColorTool = () => {};

const Draw: NextPage = ({ id }: DrawProps) => {
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

export default Draw;

export const getServerSideProps = (context: NextPageContext) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};
