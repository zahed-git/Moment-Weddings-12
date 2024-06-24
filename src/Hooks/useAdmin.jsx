import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useAdmin = () => {
    const { user, loading } = useAuth()
    console.log("useAdmin", user)
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email],
        enabled: !!user?.email && !loading && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;