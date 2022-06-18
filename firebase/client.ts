import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import config from '../config'

export const app = initializeApp({
    apiKey: "AIzaSyC4VmtuqzZCVhQIRXRr9qd-rzJGmD5bnOU",
    authDomain: "wafflehack-73627.firebaseapp.com",
    projectId: "wafflehack-73627",
    storageBucket: "wafflehack-73627.appspot.com",
    messagingSenderId: "70430189201",
    appId: "1:70430189201:web:b592d741d44745493fc130",
    measurementId: "G-849CLDBSZ0"
  })

export const db = getFirestore(app)

export const auth  = getAuth(app)
