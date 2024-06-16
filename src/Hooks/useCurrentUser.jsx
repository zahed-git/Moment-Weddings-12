import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useCurrentUser = () => {
    const {user}=useAuth()
    const email=user.email
    const axiosPablic=useAxiosPublic()
    const {refetch,data:currentUser = []}=useQuery({
        queryKey:[`/users/${email}`],
        queryFn: async()=>{
            const res= await axiosPablic.get(`/users/${email}`)
            return res.data
        }
    })
    return [currentUser,refetch]
};

export default useCurrentUser;