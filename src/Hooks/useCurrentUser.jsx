import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useCurrentUser = () => {
    const {user}=useAuth()
    const email=user.email
    const axiosSecure=useAxiosSecure()
    const {data:currentUser = []}=useQuery({
        queryKey:[`/users/${email}`],
        enabled:!!email,
        queryFn: async()=>{
            const res= await axiosSecure.get(`/users/${email}`)
            return res.data
        }
    })
    return [currentUser]
};

export default useCurrentUser;