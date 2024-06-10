
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import useUsers from "../../../Hooks/useUsers";


const ManageUser = () => {
    const axiosSecure=useAxiosSecure()
    
    const [users]=useUsers()
    const handleAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.modifiedCount > 0) {
                        //    --------------------
                            Swal.fire({
                                title: "Updated",
                                text: `${user.name} is now Admin`,
                                icon: "success"
                            });
                        }
                        else {
                            Swal.fire({
                                title: "Fail",
                                text: "Operation fail.",
                                icon: "error"
                            });
                        }
                    })


            }
        });

    }
    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {
                            // --------------
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        else {
                            Swal.fire({
                                title: "Fail",
                                text: "Operation fail.",
                                icon: "error"
                            });
                        }
                    })


            }
        });

    }
    return (
        <div className="mt-10">
            <Helmet>
                <title>Moment||dashboard||userManagement</title>
            </Helmet>
{/* --------------------------------------------------- */}
<table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Type
            </th>
            
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
            </th>
            
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
            </th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        {
              users && users.map((user, idx) =>
              (<tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="profile_img"/>
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                            {user.name}
                            </div>
                            <div className="text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {
                                            user.usertype === 'premium' ?
                                            <>
                                            <h2 >premium</h2>
                                        </> : <>
                                            User
                                        </>
                                        }
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {
                                            user.role === 'admin' ?
                                                <>
                                                    <h2 >Admin</h2>
                                                </> : <>
                                                    <button
                                                        onClick={() => handleAdmin(user)}
                                                        className="btn p-2 rounded  btn-xs text-white bg-red-300 text-sm">
                                                       Make Admin
                                                    </button>
                                                </>
                                        }
                </td>
               
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                    <button
                                            onClick={() => handleDelete(user._id)}
                                            className="btn btn-ghost btn-xs text-red-500 text-sm">
                                            <FaTrash />
                                        </button>
                </td>
            </tr>)
              )
        }
        
        </tbody>
    </table>
        </div>
    );
};

export default ManageUser;