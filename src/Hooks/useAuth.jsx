import { useContext } from "react";
import { AuthContext } from "../Privates_providers/AuthProviders";


const useAuth = () => {
    const auth= useContext(AuthContext)
    return auth
};

export default useAuth;