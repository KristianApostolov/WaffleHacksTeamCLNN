import { ReactNode } from "react"

interface NavButtonProps {
    content: ReactNode | string
    onClick?: Function
    margin: number
}

export default function NavButton({content, onClick, margin}:NavButtonProps) {
    return ( 
        <div style={{margin:margin/4+'rem'}} className="m-2 font-semibold cursor-pointer">
            {content}
        </div>
     )
}