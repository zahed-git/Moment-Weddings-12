import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useCurrentBio from "../../../Hooks/useCurrentBio";
import Taitle from "../../../SmallComponent/Taitle";


const ViewBio = () => {
    const [,currentUserBio] = useCurrentBio()
    console.log(currentUserBio[0])
    const user = currentUserBio[0]
    const { name, biodataId, biodataType, profileImage, permanentDivision, presentDivision, age, dob, height, weight, race, fathersName, mothersName, occupation, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, contactEmail, mobileNumber } = user || {}






    return (
        <div>
            <Helmet>
                <title>Moment||dashboard||view-bio</title>
            </Helmet>

            <div className="p-10 w-full bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240]">
                <h1 className="text-blue">.</h1>
                <div
                    className=" bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240]   text-[#9e9cb6]">
                    <Taitle
                        heading={"Your Bio Data"}
                    >
                    </Taitle>
                    <section
                        className="w-full mx-auto max-w-[430px] relative bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)] backdrop-blur-sm mx-2 overflow-hidden">


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

                        <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
                            <Link to={'/dashbord/editbio'}><button className="flex-1 p-5 border border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">Edit</button></Link>

                        </div>

                    </section>

                    {/* --------------------------------------------- */}


                </div>


            </div>
        </div>
    );
};

export default ViewBio;