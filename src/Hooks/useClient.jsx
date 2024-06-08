
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useClient = () => {
    const axiosPublic=useAxiosPublic()
    const {refetch,data:clients = []}=useQuery({
        queryKey:['/premium'],
        queryFn: async()=>{
            const res= await axiosPublic.get('/premium')
            return res.data
        }
    })
    return [clients,refetch]
};

export default useClient;