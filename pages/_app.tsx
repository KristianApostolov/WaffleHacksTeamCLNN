import type { AppProps } from "next/app";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, app, db } from "firestore/client";

import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
    const [user, loading, error] = useAuthState(auth);
    return <Component {...pageProps} />;
};

export default App;
