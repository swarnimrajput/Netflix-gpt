import { auth } from "../Utils/firebase";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import{useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/Userslice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utils/Constants";
import { toggleGptsearch } from "../Utils/gptslice";
import lang from "../Utils/languageconstants";
import { changeLanguage } from "../Utils/configslice";


const Header = () => {
  const dispatch =useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptsearch= useSelector((store)=>store.gpt.showGptsearch);
    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          
        })
        .catch((error) => {
          navigate("/error");
        });
    };
  
    useEffect(() => {
      const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
      return()=>unsubscribe();
    }, []);

    const handleGptsearch= ()=>{
     dispatch(toggleGptsearch());
    }
    const handleLanguagechange=(e)=>{
      dispatch(changeLanguage(e.target.value));
    }
    return (
        
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img
          className="w-44 mx-auto md:mx-0"
          src={LOGO}
          alt="logo"
        />
        {user && (
          <div className="pl-0 flex p-2 justify-between
          ">
            { showGptsearch && <select className=" md:p-2 m-2  bg-gray-900 text-white" onChange={handleLanguagechange}>
              {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
             

            </select>}
            <button onClick={handleGptsearch} className="w-50 h-12 mx-2 px-2 py-1 bg-blue-500 text-white text-sm font-medium rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-500">
             {showGptsearch ? "HomePage" : " Gptsearch"}
            </button>
            <img className=" hidden md:inline-block w-12 h-12" alt="usericon" src={user?.photoURL} />
            
            <button onClick={handleSignOut} className="w-50 h-12 mx-2 px-2 py-1 bg-blue-500 text-white text-sm font-medium rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-500">
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    );
  };
  export default Header;
  