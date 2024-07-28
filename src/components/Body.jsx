import { useEffect } from "react";
import { Login } from "./Login"
import { auth } from "../utils/firebase";
import { SearchMovie } from "./SearchMovies"
import {onAuthStateChanged } from "firebase/auth";
import { RouterProvider,createBrowserRouter} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


export const Body = () =>{
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/search",
            element:<SearchMovie/>
        },
       ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}));
            } else {
              // User is signed out
              dispatch(removeUser());

            }
          });
    },[])

    return(
    <div>
      <RouterProvider router={appRouter} />
    </div>
    )
}