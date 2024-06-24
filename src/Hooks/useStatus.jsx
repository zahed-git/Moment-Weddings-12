import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useStatus = () => {
    const axiosPublic=useAxiosPublic()
    const {data:stats = []}=useQuery({
        queryKey:['/states'],
        queryFn: async()=>{
            const res= await axiosPublic.get('/states')
            return res.data
        }
    })
    return [stats]
};

export default useStatus;