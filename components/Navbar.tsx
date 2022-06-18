import {auth} from '../firebase/client'
import NavButton, { NavImg } from './NavButton'
import { FaCompass,FaPalette } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth';

interface NavButtonProps {
    user:any
}

export default function Navbar({user}:NavButtonProps) {
    

    return ( 
        <div className="h-fit py-4 bg-white w-full border-b border-slate-300 flex justify-between items-center">
            <div className=''>
                <NavButton content="Artly" margin={4} />
            </div>
            <div className='inline-flex items-baseline justify-center'>
                <NavButton content={<FaCompass className='h-8 w-8'/>} margin={4} />
                <NavButton content={<FaPalette className='h-8 w-8'/>} margin={4} />
                {user!==null && <NavImg src={user?.photoURL} margin={4} />}
            </div>
        </div>
     )
}