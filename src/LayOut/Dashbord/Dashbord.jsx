import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";


const Dashbord = () => {
    const { user, logOut } = useAuth()
    const [isAdmin] = useAdmin()
    console.log(isAdmin)
    const handleLogOut = () => {
        console.log(user)
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log out successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="flex">
            <div>
                <div className="flex h-screen bg-gray-100">

                    <div className="hidden md:flex flex-col w-64 bg-gray-800">
                        <div className="flex items-center justify-center h-16 bg-gray-900">
                            <span className="text-white font-bold uppercase">My Dashbord</span>
                        </div>
                        <div className="flex flex-col flex-1 overflow-y-auto">
                            <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-3">
                                {
                                    isAdmin ? <>
                                        <NavLink to='admin' href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">

                                            Admin Dashbord
                                        </NavLink>
                                        <NavLink to='manageUser' href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">

                                            Manage Users
                                        </NavLink>
                                        <NavLink to='approvePremium' href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">

                                            Approved premium
                                        </NavLink>
                                        <NavLink to='approveContactReq' href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">

                                            Approved Contact Request
                                        </NavLink>


                                    </> : <>
                                        <NavLink to='editbio' href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">

                                            Edit Bio-Data
                                        </NavLink>
                                        <NavLink to='viewbio' href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">

                                            View Bio-Data
                                        </NavLink>
                                        <NavLink to='my-con-req' href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">

                                            My Contact Request
                                        </NavLink>
                                        <NavLink to='my-fav-bio' href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">

                                            Favourite Bio-Data
                                        </NavLink>
                                    </>

                                }

                                <button onClick={handleLogOut} className="w-3/4 block mx-auto rounded-full bg-pink-700 hover:shadow-lg font-semibold text-white px-6 py-2">Sign Out</button>
                            </nav>
                        </div>
                    </div>



                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashbord;