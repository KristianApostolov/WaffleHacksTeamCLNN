import React from "react";
import tw from "tailwind-styled-components";

import merge from "utils/mergeTailwind";

interface ButtonProps {
    $secondary?: boolean;
    $mt?: boolean;
}

export const Button = tw.button`
    py-2
    px-4
    rounded-lg

    flex
    items-center
    justify-center
    gap-2

    ${({ $mt }: ButtonProps) => ($mt ? "mt-3" : "")}

    ${({ $secondary }: ButtonProps) =>
        $secondary
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
    icon?: React.ReactNode;
    [key: string]: any;
}

export const TextInput = ({ icon, mt, ...props }: TextInputProps) => (
    <div
        className={merge(
            "py-2 px-4 flex items-center gap-2 rounded-lg border border-slate-400 text-slate-400 bg-slate-100 focus-within:bg-white focus-within:border-sky-500 focus-within:text-sky-500",
            mt ? "mt-3" : ""
        )}
    >
        {icon}
        <input
            className="outline-none bg-transparent text-black placeholder:text-slate-500"
            {...props}
        />
    </div>
);
