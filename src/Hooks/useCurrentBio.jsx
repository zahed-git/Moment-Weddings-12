import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCurrentBio = () => {
    const {user}=useAuth()
    const email=user.email
    const axiosSecure=useAxiosSecure()
    const {refetch,data:currentUserBio = []}=useQuery({
        queryKey:[`/biodata/${email}`],
        queryFn: async()=>{
            const res= await axiosSecure.get(`/biodata/${email}`)
            return res.data
        }
    })
    return [refetch,currentUserBio]
};

export default useCurrentBio;