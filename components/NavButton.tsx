import { ReactNode } from "react"

interface NavButtonProps {
    content?: ReactNode | string
    onClick: Function
    margin: number
}
interface NavImgProps {
    src: string
    onClick?: Function
    margin: number
}
export default function NavButton({content, onClick, margin}:NavButtonProps) {
    return ( 
        <div 
            style={{marginLeft:margin/4+'rem', marginRight:margin/4+'rem'}} 
            onClick={()=>onClick()}
            className="m-2 font-semibold cursor-pointer hover:text-blue-500 duration-200 text-lg">
            {content}
        </div>
     )
}
export function NavImg({src, onClick, margin}:NavImgProps) {
    return ( 
        <img 
            src={src} 
            style={{marginLeft:margin/4+'rem', marginRight:margin/4+'rem'}} 
            className="m-2 font-semibold cursor-pointer rounded-full h-8 w-8 hover:text-blue-500 duration-200 text-lg">
        </img>
     )
}
