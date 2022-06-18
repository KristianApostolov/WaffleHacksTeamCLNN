import tw from "tailwind-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

import merge from "utils/mergeTailwind";

interface ButtonProps {
    secondary?: boolean;
    mt?: boolean;
}

export const Button = tw.button`
    py-2
    px-4
    rounded-lg

    flex
    items-center
    justify-center
    gap-2

    ${({ mt }: ButtonProps) => (mt ? "mt-3" : "")}

    ${({ secondary }: ButtonProps) =>
        secondary
            ? "border border-slate-400 text-slate-400"
            : "bg-sky-500 text-white"}
`;

export const A = tw.a`
    text-sky-500
    underline
    cursor-pointer
`;

// input elements
interface TextInputProps {
    icon?: IconDefinition;
    [key: string]: any;
}

export const TextInput = ({ icon, mt, ...props }: TextInputProps) => (
    <div
        className={merge(
            "py-2 px-4 flex items-center gap-2 rounded-lg border border-slate-400 text-slate-400 focus-within:border-sky-500 focus-within:text-sky-500",
            mt ? "mt-3" : ""
        )}
    >
        {icon && <FontAwesomeIcon icon={icon} />}
        <input
            className="outline-none text-black placeholder:text-slate-500"
            {...props}
        />
    </div>
);
