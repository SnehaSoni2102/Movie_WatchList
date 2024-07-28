import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {

  const navigate = useNavigate();

  const user = useSelector(store => store.user);
  console.log(user);

  const handlSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/")
    });
  }

    return (
      <div className="absolute top-0 left-0 p-4 z-10 grid grid-flow-col grid-cols-2 w-screen bg-gradient-to-b from-black">
        <img
          className="m-4"
          src="https://omdb.mathub.io/img/logo-omdb.png"
          alt="netflix-logo"
          height={40}
          width={100}
        />
        {user && (<div className="flex justify-end  text-white gap-4 mx-8">
          <img 
           className=" w-12 h-12 my-10"
           src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
           alt="netflix-logo"
           height={40}
           width={40}
          />
          <button className="font-bold" onClick={handlSignOut}>Sign Out</button>
        </div>)}
      </div>
    );
  };
  