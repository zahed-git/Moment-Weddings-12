import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePremium = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
const {data : isPremium, isPending:isPremiumLoading}=useQuery({
    queryKey:[user?.email,'isPremium'],
    queryFn: async()=>{
        const res =await axiosSecure.get(`/users/premium/${user.email}`)
        console.log(res.data)
        return res.data?.admin
    }
})
return[isPremium,isPremiumLoading]
};

export default usePremium;