import { ReactNode } from "react"

interface NavButtonProps {
    icon?: ReactNode | string
    text?: ReactNode | string
    onClick: Function
    margin: number
}
interface NavImgProps {
    src: string
    onClick?: Function
    margin: number
}
export default function NavButton({icon, text, onClick, margin}:NavButtonProps) {
    return ( 
        <div 
            style={{marginLeft:margin/4+'rem', marginRight:margin/4+'rem'}} 
            onClick={()=>onClick()}
            className="p-2 group flex font-semibold cursor-pointer text-lg transition duration-200 border-b-2 border-transparent hover:border-white">
            {icon}
            {text}
        </div>
     )
}
export function NavImg({src, onClick, margin}:NavImgProps) {
    return ( 
        <div className="p-2 border-b-2 border-transparent">
            <img src={src} 
                style={{marginLeft:margin/4+'rem', marginRight:margin/4+'rem'}} 
                className="font-semibold cursor-pointer rounded-full h-8 w-8">
            </img>
        </div>
        
     )
}
