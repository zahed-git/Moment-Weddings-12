import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import SocialLogin from "../SmallComponent/SocialLogin";
import { Helmet } from "react-helmet-async";


const SignUp = () => {
    const {createUser,updateUserProfile} = useAuth()
    const axiosPublic= useAxiosPublic()
    const navigate= useNavigate()
    const location= useLocation()
    const from = location.state?.from?.pathname || "/"

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const photo = data.photo;
        const password = data.password;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const loggerUser = result.user
                console.log(loggerUser)
                updateUserProfile(name, photo)
                    .then((data) => {
                        console.log("user created & updated",data)
                        const userInfo = {
                            email: email,
                            name: name,
                            photoURL: photo,
                        }
                        axiosPublic.post('users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "SingUp successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true })
                                }
                            })

                    })
                    .catch((error) => {
                        console.log(error.message)
                    });

            })
            .catch(error => {
                console.log(error.msg)
            })
    }
    return (
        <div>
            <Helmet>
                <title>Moment||singUp</title>
            </Helmet>
            <div className="h-screen md:flex">
                <div
                    className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
                        <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                        <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                    <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello & Wellcome</h1>
                        
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd" />
                            </svg>
                            <input {...register("name", { required: true })} className="pl-2 outline-none border-none" type="text" name="name" id="" placeholder="Full name" required/>
                            {errors.name && <span>PLS enter your name</span>}
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoine="round" strokeWidth="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                            <input {...register("photo", { required: true })} className="pl-2 outline-none border-none" type="text" name="photo" id="" placeholder="Photo_URL" required/>
                            {errors.photo && <span>PLS give a Photo-URL</span>}
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoine="round" strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input {...register("email", { required: true })} className="pl-2 outline-none border-none" type="text" name="email" id="" placeholder="Email Address" required/>
                            {errors.email && <span>Enter Your valid Email Address</span>}
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd" />
                            </svg>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/ })} className="pl-2 outline-none border-none" type="text" name="password" id="" placeholder="Password" required/>
                            {errors.password?.type === 'minLength' && <span>password must 6 minimum char</span>}
                            {errors.password?.type === 'maxLength' && <span>password must 20 maximum char</span>}
                            {errors.password?.type === 'pattern' && <span>capital & small letter ,number and special charter needed</span>}
                        </div>
                        <input type="submit" value="SignUp" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-[#4285F4]/90 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"/>
                       <SocialLogin></SocialLogin>
                        <Link to='/login' className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Have an Account pls Login</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;