import {auth} from '../firebase/client'
import NavButton, { NavImg } from './NavButton'
import { FaCompass,FaPalette } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Router from "next/router";

interface NavButtonProps {
    user:any
}

export default function Navbar({user}:NavButtonProps) {

    function handleSignOut(){
        signOut(auth)
        console.log("signed out")
        Router.push("/login")
    }

    return ( 
        <div className="h-fit py-6 bg-sky-500 w-full border-b border-slate-300 flex justify-between items-center">
            <div className='text-white font-serif'>
                <NavButton onClick={()=>undefined} content="Artly" margin={32} />
            </div>
            <div className='divide-x-2 mr-16'>
                <div className='inline-flex items-baseline justify-center'>
                    <NavButton 
                        content={<FaCompass className='h-8 w-8 fill-white opacity-70 hover:opacity-100 hover:scale-110'/>} 
                        onClick = {() => Router.push("/explore")}
                        margin={0} />
                    <NavButton 
                        content={<FaPalette className='h-8 w-8 fill-white opacity-70 hover:opacity-100 hover:scale-110'/>} 
                        onClick = {() => Router.push(`/draw/${user?.id}`)} // Replace with id field
                        margin={12} />
                </div>
                <div className='inline-flex items-baseline justify-center'>
                    {user!==null && <NavImg src={user?.photoURL} margin={12} />}
                    <NavButton 
                        content={<ImExit className='h-8 w-8 fill-white opacity-70 hover:opacity-100 hover:scale-110'/>} 
                        onClick={handleSignOut} 
                        margin={0} />
                </div>
            </div>
            
        </div>
     )
}