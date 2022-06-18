import tw from "tailwind-styled-components";

export const ScreenContainer = tw.div`
    flex
    items-stretch
    h-screen
`;

interface SideContainerProps {
    $secondary?: boolean;
}

export const SideContainer = tw.div`
    w-1/2 
    px-6 

    ${(props: SideContainerProps) => (props.$secondary ? "bg-sky-500" : "")}
`;

export const SideContainerImage = tw.img`
    w-[30rem]
    max-w-full
    mx-auto
`;

export const FormMargin = tw.div`
    flex
    flex-col
    w-full
    mt-5
`;

interface WelcomeProps {
    title: string;
    description: string;
}

export const Welcome = ({ title, description }: WelcomeProps) => (
    <>
        <h1 className="text-4xl font-semibold font-inter">{title}</h1>
        <p className="text-slate-400 mt-2">{description}</p>
    </>
);
