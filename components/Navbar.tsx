import { auth } from "../firestore/client";
import NavButton from "./NavButton";
import { FaCompass, FaPalette } from "react-icons/fa";

export default function Navbar() {
    return ( 
        <div className="h-fit py-6 flex justify-between items-center">
            <div className='about-button'>
                <NavButton content="&nbsp; &nbsp; &nbsp; &nbsp; artly" margin={2} />
            </div>
            <div className='inline-flex items-baseline justify-center'>
                <NavButton content={<FaCompass className='h-6 w-6'/>} margin={2} />
                &nbsp; &nbsp;
                <NavButton content={<FaPalette className='h-6 w-6'/>} margin={2} />
                &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
            <style jsx> {`
                .h-fit {
                    color: white;
                    background-color: #0a6997;
                }
                .about-button {
                    font-size: 1.25rem;
                `}
            </style>
        </div>
<<<<<<< HEAD
    );
}
=======

     )
}
>>>>>>> 192a354a36231a8ae5190dfd81b526ea9d5a80c5
