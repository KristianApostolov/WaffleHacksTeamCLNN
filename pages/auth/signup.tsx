import type { NextPage } from "next";
import Link from "next/link";

import React from "react";

import { FaEnvelope, FaLock } from "react-icons/fa";

import { CenterDiv } from "components/utils";
import { TextInput, Button, A } from "components/atoms";

import {
    ScreenContainer,
    SideContainer,
    SideContainerImage,
    FormMargin,
    Welcome,
} from "components/auth/authPage";

import Root from "components/Root";

const Signup: NextPage = () => {
    return (
        <Root title="Sign Up">
            <ScreenContainer>
                <SideContainer $secondary>
                    <CenterDiv>
                        <SideContainerImage
                            src="/assets/undraw_painting.svg"
                            alt="Girl Painting a Blob"
                        />
                    </CenterDiv>
                </SideContainer>
                <SideContainer $as="main">
                    <CenterDiv className="max-w-lg mx-auto h-full relative">
                        <div>
                            <Welcome
                                title="Welcome."
                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis eveniet eaque autem, commodi repellat."
                            />

                            <form className="flex flex-col">
                                <FormMargin>
                                    <TextInput
                                        placeholder="John Doe"
                                        icon={<FaEnvelope />}
                                        mt
                                    />
                                    <TextInput
                                        placeholder="Password"
                                        icon={<FaLock />}
                                        mt
                                    />
                                    <TextInput
                                        placeholder="Confirm Password"
                                        icon={<FaLock />}
                                        mt
                                    />
                                </FormMargin>

                                <FormMargin>
                                    <Button $mt>Sign Up</Button>
                                    <Button $secondary $mt>
                                        <img
                                            src="/assets/google_logo.png"
                                            alt="Google Logo"
                                            className="w-6"
                                        />
                                        Sign up with Google
                                    </Button>
                                </FormMargin>
                            </form>
                        </div>

                        <p className="absolute text-slate-400 bottom-8">
                            Have an account already?{" "}
                            <Link href="/auth/login">
                                <A>Login.</A>
                            </Link>
                        </p>
                    </CenterDiv>
                </SideContainer>
            </ScreenContainer>
        </Root>
    );
};

export default Signup;
