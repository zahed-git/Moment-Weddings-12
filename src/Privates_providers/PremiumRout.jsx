import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { PropsWithChildren } from "react";
import {  Spinner } from "@material-tailwind/react";
import usePremium from "../Hooks/usePremium";

const PremiumRout = ({children}) => {
    const [isPremium,isPremiumLoading] = usePremium()
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading || isPremiumLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50" />
    }
    if (user && isPremium) {
        return children
    }
    return (
        <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
};

export default PremiumRout;