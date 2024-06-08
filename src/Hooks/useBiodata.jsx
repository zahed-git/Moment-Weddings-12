import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useBiodata = () => {
    const axiosPublic=useAxiosPublic()
    const {refetch,data:biodata = []}=useQuery({
        queryKey:['/biodata'],
        queryFn: async()=>{
            const res= await axiosPublic.get('/biodata')
            return res.data
        }
    })
    return [biodata,refetch]
};

export default useBiodata;