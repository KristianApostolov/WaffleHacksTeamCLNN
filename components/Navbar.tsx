import {auth} from '../firestore/client'
import NavButton from './NavButton'
import { FaCompass,FaPalette } from 'react-icons/fa'


export default function Navbar() {
    return ( 
        <div className="h-fit py-6 bg-white w-full border-b border-slate-400 flex justify-between items-center">
            <div className=''>
                <NavButton content="About" margin={2} />
            </div>
            <div className='inline-flex items-baseline justify-center'>
                <NavButton content={<FaCompass className='h-6 w-6'/>} margin={2} />
                <NavButton content={<FaPalette className='h-6 w-6'/>} margin={2} />
            </div>
        </div>
     )
}