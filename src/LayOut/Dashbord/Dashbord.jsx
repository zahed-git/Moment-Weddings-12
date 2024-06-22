import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";
import { Helmet } from "react-helmet-async";


const Dashbord = () => {
    const { logOut } = useAuth()
    const [isAdmin] = useAdmin()

    const handleLogOut = () => {
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
        <div >
            <Helmet>
                <title>Moment||dashboard</title>
            </Helmet>
            <div className=" lg:flex gap-4">
                <div className="flex sm:h-96 lg:h-screen sm:mx-auto bg-gray-100 lg:flex-1">

                    <div className="sm:mx-auto md:flex lg:flex flex-col w-64 bg-gray-800">
                        <div className="flex items-center justify-center h-16 bg-gray-900">
                            <span className="text-white font-bold uppercase">My Dashbord</span>
                        </div>
                        <div className="flex flex-col flex-1 overflow-y-auto">
                            <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-3">
                                {/* {
                                    isAdmin ? <> */}
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


                                {/* </> : <> */}
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
                                {/* </>

                                } */}
                                <a href="#" className="flex items-center space-x-2 bg-pink-700 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" ></path>
                                    </svg>
                                    <Link to='/'> <span>Return Home</span></Link>
                                </a>
                                <button onClick={handleLogOut} className="w-full flex gap-3 mx-auto rounded bg-pink-700 hover:bg-blue-700  font-semibold text-white px-6 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                    </svg>

                                    Sign Out</button>
                            </nav>
                        </div>
                    </div>



                </div>
                <div className="flex-auto">
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default Dashbord;