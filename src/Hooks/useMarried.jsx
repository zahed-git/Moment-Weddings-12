import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMarried = () => {

   const axiosPublic=useAxiosPublic()
    const {refetch,data:married = []}=useQuery({
        queryKey:['/sucess_story'],
        queryFn: async()=>{
            const res= await axiosPublic.get('/sucess_story')
            return res.data
        }
    })
    return [married,refetch]
};

export default useMarried;