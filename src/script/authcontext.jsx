import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect,useState } from "react";
import { auth } from "./firebasesdk";

const authcontext = createContext()


export function UserAuthContextProvider({children}){
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true)

    function logIn(email, password){
        return signInWithEmailAndPassword(auth,email, password)
    }

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        signOut(auth)
    }

    function googleSignIn(){
        const googleauthprovider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleauthprovider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          console.log("Auth", currentuser);
          setLoading(false)
          setUser(currentuser);
        });
    
        return () => {
          setLoading(false)
          unsubscribe();
        };
      }, []);
      

    return (
        <authcontext.Provider value={{user, logIn, signUp, logOut, googleSignIn}}>
            {children}
        </authcontext.Provider>
    )

}

export function use_user_auth(){
    return useContext(authcontext);
}