
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useContactReq = () => {
    const axiosSecure=useAxiosSecure()
    const {refetch,data:conReq = []}=useQuery({
        queryKey:['/contact-req'],
        queryFn: async()=>{
            const res= await axiosSecure.get('/contact-req')
            return res.data
        }
    })
    return [conReq,refetch]
};

export default useContactReq;