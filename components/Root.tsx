import Head from "next/head";
import React from "react";

interface RootProps {
    header?: boolean;
    title?: string;
    description?: string;
    children: React.ReactNode;
}

const Root = (props: RootProps) => {
    const title = `Artly | ${props.title || "Home"}`;
    const description =
        props.description || "A fresh perspective on collaborative art.";
    const authors = "Nathan, Chris, Nugget, Larry";

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="HandheldFriendly" content="true" />

                <title>{title}</title>

                <meta name="author" content={authors} />
                <meta name="description" content={description} />
                <meta name="keywords" content="social, media, art, forum" />

                <meta property="og:author" content={authors} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />

                {/* <meta property="og:image" content="icons/apple-icon.png" /> */}
                {/* <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    href="/icons/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link
                    rel="apple-touch-icon"
                    href="/icons/apple-touch-icon.png"
                /> */}
            </Head>
            {props.header && <p>header</p>}
            {props.children}
        </>
    );
};

export default Root;
