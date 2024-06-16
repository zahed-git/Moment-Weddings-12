import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFavList = () => {
    const axiosSecure=useAxiosSecure()
    const {refetch,data:favList = []}=useQuery({
        queryKey:['/fav-list'],
        queryFn: async()=>{
            const res= await axiosSecure.get('/fav-list')
            return res.data
        }
    })
    return [favList,refetch]
};

export default useFavList;