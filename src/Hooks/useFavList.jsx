import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useFavList = () => {
   const {user}=useAuth()
    const email= user.email
    
    const axiosSecure = useAxiosSecure()
    const { refetch, data: favList = [] } = useQuery({
        queryKey: ['/fav-list'],
        enabled:!!email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/fav-list/${email}`)
            return res.data
        }
    })
    return [favList, refetch]
};

export default useFavList;