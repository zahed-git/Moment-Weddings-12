
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useIsPrimium = () => {
    const {user}=useAuth()
    console.log(user)
    const axiosSecure=useAxiosSecure()
    const {data : isPremium,isLoading:isPremiumLoading = []}=useQuery({
        queryKey:[user?.email,'premium'],
        queryFn: async()=>{
            const res =await axiosSecure.get(`/users/premium/${user.email}`)
             return res.data

        }
    })
    return [isPremium,isPremiumLoading]
};

export default useIsPrimium;