import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useContactReq = () => {
    const axiosPublic=useAxiosPublic()
    const {refetch,data:conReq = []}=useQuery({
        queryKey:['/contact-req'],
        queryFn: async()=>{
            const res= await axiosPublic.get('/contact-req')
            return res.data
        }
    })
    return [conReq,refetch]
};

export default useContactReq;