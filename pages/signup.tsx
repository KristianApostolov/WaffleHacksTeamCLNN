import type { NextPage } from "next";
import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { CenterDiv } from "components/utils";
import { TextInput, Button, A } from "components/atoms";
import {ScreenContainer, SideContainer, SideContainerImage, FormMargin, Welcome} from "components/auth/authPage";
import {auth} from "../firebase/client";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import Root from "components/Root";
import { useState } from "react";
import Router from "next/router";

const Signup: NextPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    function EmailSignUp(e:any){
        e.preventDefault()
        password === passwordConfirm && createUserWithEmailAndPassword(auth,email,password).then(()=>{
            Router.push("/")
        })
    }
    
    function GoogleSignUp(e:any){
        e.preventDefault()
        const goolgeProvider = new GoogleAuthProvider()
        signInWithPopup(auth,goolgeProvider).then(()=>{
        Router.push("/")
    })
    }
    
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
                                        value={email}
                                        onChange={(e:any) => setEmail(e.target.value)}
                                        placeholder="John Doe"
                                        icon={<FaEnvelope />}
                                        mt
                                    />
                                    <TextInput
                                        value={password}
                                        onChange={(e:any) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        icon={<FaLock />}
                                        mt
                                    />
                                    <TextInput
                                        value={passwordConfirm}
                                        onChange={(e:any) => setPasswordConfirm(e.target.value)}
                                        placeholder="Confirm Password"
                                        icon={<FaLock />}
                                        mt
                                    />
                                </FormMargin>

                                <FormMargin>
                                    <Button onClick={(e:any)=>EmailSignUp(e)} $mt>Sign Up</Button>
                                    <Button onClick={(e:any)=>GoogleSignUp(e)} $secondary $mt>
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
                            <Link href="/login">
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
