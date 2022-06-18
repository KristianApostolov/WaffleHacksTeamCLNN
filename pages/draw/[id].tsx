import type { NextPage, NextPageContext } from "next";

interface DrawProps {
    id?: string;
}

const Draw: NextPage = ({ id }: DrawProps) => {
    return <p>Draw {id}</p>;
};

export default Draw;

export const getServerSideProps = (context: NextPageContext) => {
    return {
        props: {
            id: context.query.id,
        },
    };
};
