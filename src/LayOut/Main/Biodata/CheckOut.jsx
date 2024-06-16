import { Link, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const CheckOut = () => {
    const { biodataId } = useParams()
    const { user } = useAuth()







    return (
        <div className="bg-purple-600 min-h-screen">
            <div className="text-purple-600 mb-14">,</div>

            <div className="bg-purple-600 min-h-screen flex items-center text-lg">

                <form className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
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
                        

                    </div>
                    <Link to={`/checkout/payment/${biodataId}`} >

                        <button className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">Click here for payment</button>

                    </Link>

                </form>
            </div>
        </div>
    );
};

export default CheckOut;