import '../styles/globals.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import type { AppProps } from 'next/app'
import {auth, app, db} from '../firebase/client'
import Navbar from 'components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  
  const [user, loading, error] = useAuthState(auth)

  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
