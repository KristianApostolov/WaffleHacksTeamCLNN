import {auth} from '../firebase/client'
import NavButton, { NavImg } from './NavButton'
import { FaCompass,FaPalette, FaRegBookmark, FaUser } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Router from "next/router";
import React, { useState } from 'react';

interface NavButtonProps {
    user:any
}

function NavButtonComponent() {
    return <FaCompass className='h-8 w-8 fill-white opacity-70 transition duration-150 hover:opacity-100 hover:scale-110'> 
        <text className="text-white ml-4 invisible group-hover:visible">Explore</text>
    </FaCompass>
}
export default function Navbar({user}:NavButtonProps) {

    const [tabIndex, setTabIndex] = React.useState(1)


    const ICON_CLASS_NAME: string = 'h-8 w-8 fill-white opacity-70 transition duration-150 group-hover:opacity-100 group-hover:scale-110' 
    const ICON_TEXT_CLASS_NAME: string = "text-white ml-4 group-hover:block font-Verdana font-light"

    function handleSignOut(){
        signOut(auth)
        console.log("signed out")
        Router.push("/login")
    }

    
    function onNavButtonClick(index: number, navigationPath: string) {
        setTabIndex(index)
        console.log(index)
        Router.push(navigationPath)
    }

    return ( 
        <div className="h-fit py-4 bg-sky-500 w-full border-b border-slate-300 flex justify-between items-center">
            <text className='ml-16 text-white font-Verdana text-2xl font-light'>
                ARTLY
            </text>
            <div x-datatype='' className='divide-x-2 mr-0'>
                <div className='mr-8 inline-flex items-baseline justify-between'>
                    <NavButton
                        icon={ <FaCompass className={`${ICON_CLASS_NAME} ${tabIndex==0? "opacity-100 scale-110" : ""}`}/> }
                        text={<text className={`${ICON_TEXT_CLASS_NAME} ${tabIndex==0? "block" : "hidden"}`}>EXPLORE</text>}
                        onClick = {() => onNavButtonClick(0, "/explore")}
                        margin={4} />
                    <NavButton 
                        icon={ <FaPalette className={`${ICON_CLASS_NAME} ${tabIndex==1? "opacity-100 scale-110" : ""}`}/> }
                        text={<text className={`${ICON_TEXT_CLASS_NAME} ${tabIndex==1? "block" : "hidden"}`}>DRAW</text>}
                        onClick = {() => onNavButtonClick(1, `/draw/${user?.id}`)} // Replace with id field
                        margin={4} />
                    <NavButton 
                        icon={ <FaRegBookmark className={`${ICON_CLASS_NAME} ${tabIndex==2? "opacity-100 scale-110" : ""}`}/> }
                        text={<text className={`${ICON_TEXT_CLASS_NAME} ${tabIndex==2? "block" : "hidden"}`}>COLLECTION</text>}
                        onClick = {() => onNavButtonClick(2, `/Collection`)} 
                        margin={4} />
                    <NavButton 
                        icon={ <FaUser className={`${ICON_CLASS_NAME} ${tabIndex==3? "opacity-100 scale-110" : ""}`}/> }
                        text={<text className={`${ICON_TEXT_CLASS_NAME} ${tabIndex==3? "block" : "hidden"}`}>PROFILE</text>}
                        onClick = {() => onNavButtonClick(3, `/user/${user?.id}`)} // Replace with id field
                        margin={4} />
                </div>
                <div className='inline-flex items-baseline justify-center'>
                    <NavButton 
                        icon={<ImExit className={ICON_CLASS_NAME}/>} 
                        text={<text className={ICON_TEXT_CLASS_NAME}>LOGOUT</text>}
                        onClick={handleSignOut} 
                        margin={12} />
                </div>
            </div>
        </div>
     )
}