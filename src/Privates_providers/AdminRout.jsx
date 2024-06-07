import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { PropsWithChildren } from "react";
import {  Spinner } from "@material-tailwind/react";

const AdminRout = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50" />
    }
    if (user && isAdmin) {
        return children
    }
    return (
        <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
};

export default AdminRout;