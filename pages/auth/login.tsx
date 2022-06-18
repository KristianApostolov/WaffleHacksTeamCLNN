import type { NextPage } from "next";
import React from "react";

import { FaEnvelope, FaLock } from "react-icons/fa";

import { CenterDiv, FormMargin } from "components/utils";
import { TextInput, Button, A } from "components/atoms";
import Link from "next/link";

const Login: NextPage = () => {
    return (
        <div className="flex items-stretch h-screen">
            <div className="w-1/2 bg-sky-500 px-16">
                <CenterDiv>
                    <img
                        src="/assets/undraw_painting.svg"
                        alt="Girl Painting a Blob"
                        className="max-w-full"
                    />
                </CenterDiv>
            </div>
            <main className="w-1/2">
                <div className="px-6 mx-auto max-w-lg h-full">
                    <CenterDiv className="relative">
                        <div>
                            <h1 className="text-4xl font-semibold font-inter">
                                Hello There!
                            </h1>
                            <p className="text-slate-400 mt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                            </p>

                            <form className="flex flex-col">
                                <FormMargin>
                                    <TextInput
                                        placeholder="Username"
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
                </div>
            </main>
        </div>
    );
};

export default Login;
