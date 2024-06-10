import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useUsers from "../../../Hooks/useUsers";


const DetailBio = () => {
    const { _id } = useParams()
    const [users]=useUsers()
    const [user, setUser] = useState({})
    const [show, setShow] = useState([null])
    const { biodataId, name, biodataType, profileImage, permanentDivision, presentDivision, age, dob, height, weight, race, fathersName, mothersName, occupation, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, contactEmail, mobileNumber } = user
    console.log(show)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:5000/biodata");
            const allData = await res.json()
            const singleData = allData?.find(data => data._id == _id)
            const type = singleData.biodataType
            const typeData = allData?.find(data => (data.biodataType === type) && (data._id !== _id))
            setShow(typeData)
            setUser(singleData)
        }
        fetchData()
    }, [_id])
    return (
        <div className="bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240]">
            <h1 className="text-blue">.</h1>
            <div
                className="mt-10 py-10 bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240] flex items-center justify-center  text-[#9e9cb6]">
                <section
                    className="w-full max-w-[430px] relative bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)] backdrop-blur-sm mx-2 overflow-hidden">


                    <img src={profileImage} className="rounded-full w-[250px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd" />

                    <h1 className="text-xl font-bold text-center">{name}</h1>
                    <small className="block my-1 text-center">{permanentDivision}</small>
                    <small className="block my-1 text-center">{occupation}</small>
                    <small className="block my-1 text-center">Bio-Data Id : {biodataId}</small>
                    <p className="mt-5 text-center"></p>
                    <div className="flex items-center justify-center gap-6  mx-auto my-5 ">
                        <div className="px-2 space-y-3">
                            <h1>Gender : {biodataType}</h1>
                            <h1>Date of Birth : {dob}</h1>
                            <h1>Father : {fathersName}</h1>
                            <h1>Mother : {mothersName}</h1>
                            <h1>Present Division : {presentDivision}</h1>
                            <h1>Expected Partner Height : {expectedPartnerHeight}</h1>
                            
                        </div>
                        <div className="px-2 space-y-3">
                            <h1>Age : {age}</h1>
                            <h1>Height : {height}</h1>
                             <h1>Race : {race}</h1>
                            <h1>Weight : {weight}</h1>
                            <h1>Expected Partner Age : {expectedPartnerAge}</h1>
                            <h1>Expected Partner Weight : {expectedPartnerWeight}</h1>
                            

                        

                        </div>



                    </div>

<div className="px-2 space-y-3">
    {/* <div>
        Contact iformation
    </div> */}
<div >
{user.usertype === 'premium' ?
< >
<h2 className="text-xl font-bold text-center">Contact info</h2>
<div className="   mx-auto my-5 ">
<h1>Mobile : {mobileNumber}</h1>
<h1>Email : {contactEmail}</h1>
</div>

</>:<>
<Link to={`/checkout/${biodataId}`}><button className="w-3/4 block mx-auto rounded-full bg-pink-700 hover:shadow-lg font-semibold text-white px-6 py-2">Requset For Contact info</button></Link>
</>

}
</div>
</div>

                    <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
                        <button className="flex-1 border border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">Add to  Favourite</button>
                        
                    </div>

                </section>

                {/* --------------------------------------------- */}


            </div>
            <div className="bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240] py-10 flex justify-center">
                <div className=" w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Similar Profiles</h5>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </a>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                            {/* {show && show.map((user, index) => (<li key={index} className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src={user?.profileImage} alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {user?.name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $320
                                </div>
                            </div>
                        </li>

                        ))}  */}

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailBio;