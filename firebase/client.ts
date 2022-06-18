import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import config from "./config";

export const app = initializeApp(config);

export const db = getFirestore(app);

export const auth = getAuth(app);