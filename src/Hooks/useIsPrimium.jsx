
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useIsPrimium = () => {
    const axiosSecure=useAxiosSecure()
    const {refetch,data:preMem = []}=useQuery({
        queryKey:[user?.usertype,'premium'],
        queryFn: async()=>{
            const res =await axiosSecure.get(`/users/premium/${user.usertype}`)
             return res.data

        }
    })
    return [preMem,refetch]
};

export default useIsPrimium;