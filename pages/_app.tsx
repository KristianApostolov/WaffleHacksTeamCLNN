import '../styles/globals.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import type { AppProps } from 'next/app'
import {auth, app, db} from '../firebase/client'

function MyApp({ Component, pageProps }: AppProps) {
  
  const [user, loading, error] = useAuthState(auth)

  return <Component {...pageProps} />
}

export default MyApp
