import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";


const CheckOut = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/biodata'
    const { biodataId } = useParams()
    const { user } = useAuth()
    const [card, setCard] = useState('')





    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const biodataId = e.target.biodataId.value

        const info = {
            email: email,
            biodataId: biodataId,
            state: 'pending'

        }
        console.log(info)
        axiosPublic.post('contact-req', info)
            .then(res => {
                if (res.data.insertedId) {
                    e.target.reset()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Request successfully Submited",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(from, { replace: true })
                }
            })
    }

    return (
        <div className="bg-purple-600 min-h-screen">
            <div className="text-purple-600 mb-14">,</div>

            <div className="bg-purple-600 min-h-screen flex items-center text-lg">

                <form onSubmit={handleSubmit} className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
                    <div className="shadow">
                        <div className="flex items-center bg-purple-400 rounded-t-lg border-purple-500 border-b">
                            <label className="w-1/3 text-right mr-8 p-4 text-purple-200">Pls pay first :</label>
                            <label className=" text-right mr-8 p-4 text-purple-200">You will be charged usd : 5$</label>
                           
                               
                                
                          

                        </div>

                    </div>

                    <div className="shadow">
                        <div className="flex items-center bg-purple-400 rounded-t-lg border-purple-500 border-b">
                            <label className="w-20 text-right mr-8 p-4 text-purple-200">Biodata Id:</label>
                            <input type="text" disabled name="biodataId" defaultValue={biodataId} placeholder="Put the name You request for contact" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" />
                        </div>
                        <div className="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
                            <label className="w-20 text-right p-4 mr-8 text-purple-200">Your Email</label>
                            <input disabled type="email" name="email" defaultValue={user.email} placeholder="Your Email" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden" />

                        </div>
                        <div className="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
                            <label className="w-20 text-right p-4 mr-8 text-purple-200">Payment</label>
                            <input type="text" name="key" placeholder="Your payment Key" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden" />

                        </div>

                    </div>
                    <Link to={`/checkout/payment/${biodataId}`} >

<button className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">Click here for payment</button>

</Link>
                    <button disabled={!card.length}  type="submit"className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-[#4285F4]/90 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"> Submit</button>
                   
                    
                </form>
            </div>
        </div>
    );
};

export default CheckOut;