import {auth} from '../firebase/client'
import NavButton, { NavImg } from './NavButton'
import { FaCompass,FaPalette } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { signOut } from 'firebase/auth';
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
        <div className="h-fit py-4 bg-white w-full border-b border-slate-300 flex justify-between items-center">
            <div className=''>
                <NavButton onClick={()=>undefined} content="Artly" margin={4} />
            </div>
            <div className='inline-flex items-baseline justify-center'>
                <NavButton onClick={()=>undefined} content={<FaCompass className='h-8 w-8'/>} margin={4} />
                <NavButton onClick={()=>undefined} content={<FaPalette className='h-8 w-8'/>} margin={4} />
                {user!==null && <NavImg src={user?.photoURL} margin={4} />}
                <NavButton content={<ImExit className='h-8 w-8'/>} onClick={handleSignOut} margin={4} />
            </div>
        </div>
     )
}