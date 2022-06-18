import type { NextPage } from "next";
import Link from "next/link";

import React from "react";

import { FaEnvelope, FaLock } from "react-icons/fa";

import { CenterDiv } from "components/utils";
import { TextInput, Button, A } from "components/atoms";

import Root from "components/Root";

import {
    ScreenContainer,
    SideContainer,
    SideContainerImage,
    FormMargin,
    Welcome,
} from "components/auth/authPage";

const Login: NextPage = () => {
    return (
        <Root title="Login">
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
                                title="Hello There!"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
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
                                </FormMargin>

                                <FormMargin>
                                    <Button $mt>Login</Button>
                                    <Button $secondary $mt>
                                        <img
                                            src="/assets/google_logo.png"
                                            alt="Google Logo"
                                            className="w-6"
                                        />
                                        Login with Google
                                    </Button>
                                </FormMargin>
                            </form>
                        </div>

                        <p className="absolute text-slate-400 bottom-8">
                            Don’t have an account yet?{" "}
                            <Link href="/auth/signup">
                                <A>Sign up.</A>
                            </Link>
                        </p>
                    </CenterDiv>
                </SideContainer>
            </ScreenContainer>
        </Root>
    );
};

export default Login;
