import type { AppProps } from "next/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, app, db } from "../firebase/client";
import "styles/globals.css";
import Navbar from "components/Navbar";
import { useEffect } from "react";
import Router from "next/router";

export default function App({ Component, pageProps }: AppProps){
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        console.log(user, loading , error)
        if(user === null && !loading && !error){
            Router.push("/login")
        }
        else if(user !== null && !loading && !error && (Router.pathname === "/login" || Router.pathname === "/signup")){
            Router.push("/")
        }
    },[user, loading, error])

    return (
    <>
        {user!==null&&<Navbar user={user}/>}
        <Component {...pageProps} />
    </>
    )
}
