import {  Spinner } from "@material-tailwind/react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import {PropsWithChildren} from "react";


const PrivateRout = ({children}) => {
    const {user,loading}=useAuth()
    const location= useLocation()
    if(loading){
        return <Spinner className="h-16 w-16 text-gray-900/50" />
    }
    if(user){
return children
    }
    return (
        <Navigate to={"/login"} state={{from:location}} replace></Navigate>
    );
};

export default PrivateRout;