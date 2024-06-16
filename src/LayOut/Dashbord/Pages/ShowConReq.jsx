import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const ShowConReq = () => {
    const {biodataId}= useParams()
    const [user, setUser] = useState({})
    const {  name, biodataType, profileImage, permanentDivision, presentDivision, age, dob, height, weight, race, fathersName, mothersName, occupation, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, contactEmail, mobileNumber } = user
    
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:5000/biodata");
            const allData = await res.json()
            const singleData = allData?.find(data => data.biodataId == biodataId)
           
            setUser(singleData)
        }
        fetchData()
    }, [biodataId])

    return (
        <div className="p-10 w-full bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240]">
            <h1 className="text-blue">.</h1>
            <div
                className=" bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240] flex items-center justify-center  text-[#9e9cb6]">
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
                          
                                    <h2 className="text-xl font-bold text-center">Contact info</h2>
                                    <div className="   mx-auto my-5 ">
                                        <h1>Mobile : {mobileNumber}</h1>
                                        <h1>Email : {contactEmail}</h1>
                                    </div>

                               
                        </div>
                    </div>

                   

                </section>

                {/* --------------------------------------------- */}


            </div>
           

        </div>
    );
};

export default ShowConReq;