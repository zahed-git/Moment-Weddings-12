import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useCurrentBio from "../../../Hooks/useCurrentBio";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Taitle from "../../../SmallComponent/Taitle";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const EditBio = () => {
    const [refetch, currentUserBio] = useCurrentBio()
    const cUser = currentUserBio[0]
    const { _id, name, biodataId, biodataType, profileImage, permanentDivision, presentDivision, age, dob, height, weight, race, fathersName, mothersName, occupation, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, contactEmail, mobileNumber } = cUser || {}
    console.log(age)
    const [startDate, setStartDate] = useState(new Date());
    const dateStr = startDate.toString();
    const extractedDate = dateStr?.slice(4, 15);
    const { user } = useAuth()
    const [ft, setFt] = useState(5)
    const [inch, setIn] = useState(5)
    const [wegt, setWeight] = useState(60)
    const [pWeight, setPWeight] = useState(60)
    const [pAge, setPAge] = useState(33)
    const [pHeight, setPHeight] = useState(expectedPartnerHeight)
    const [photo, setPhoto] = useState('')
    const heightVal = `${ft}'${inch}"`




    const axiosSecure = useAxiosSecure()

    const handleFeet = (event) => {
        console.log(Number(event.target.value))
        setFt(Number(event.target.value));
    };
    const handleInch = (event) => {
        setIn(Number(event.target.value));
    };
    const handleWeight = (event) => {
        setWeight(Number(event.target.value));
    };
    const handlePAge = (event) => {
        setPAge(Number(event.target.value));
    };
    const handlePWeight = (event) => {
        setPWeight(Number(event.target.value));
    };
    const handlePHeight = (event) => {
        setPHeight(Number(event.target.value));
    };


    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit =  (data) => {
        setTimeout(async() => {
            const name1 = data.name;
            const biodataType1 = data.biodataType
            const permanentDivision1 = data.permanentDivision
            const presentDivision1 = data.presentDivision
            const age1 = data.age
            const dob1 = extractedDate
            const height1 = heightVal
            const weight1 = wegt
            const race1 = data.race
            const fathersName1 = data.father
            const mothersName1 = data.mother
            const occupatio1 = data.occupation
            const expectedPartnerAge1 = pAge
            const expectedPartnerHeight1 = pHeight
            const expectedPartnerWeight1 = pWeight
            const contactEmail1 = contactEmail
            const mobileNumber1 = data.mobile
            const imageFile = { image: data.photo[0] };
            console.log(imageFile.image)
            if (imageFile.image !== undefined) {
                console.log(imageFile.image)
                const res = await axiosSecure.post(image_hosting_api, imageFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }

                })
                const imgBBphoto = res.data.data.display_url
                console.log(imgBBphoto)
                setPhoto(imgBBphoto)
            }
            else {
                setPhoto(profileImage)
            }





            setTimeout(() => {
                const userInfo = {
                    name: name1 ? name1 : name1,
                    profileImage: photo,
                    biodataType: biodataType1 ? biodataType1 : biodataType,
                    permanentDivision: permanentDivision1 ? permanentDivision1 : permanentDivision,
                    presentDivision: presentDivision1 ? presentDivision1 : presentDivision,
                    age: age1 ? age1 : age,
                    dob: dob1 ? dob1 : dob,
                    height: height1 ? height1 : height,
                    weight: weight1 ? weight1 : weight,
                    race: race1 ? race1 : race,
                    fathersName: fathersName1 ? fathersName1 : fathersName,
                    mothersName: mothersName1 ? mothersName1 : mothersName,
                    occupation: occupatio1 ? occupatio1 : occupation,
                    expectedPartnerAge: expectedPartnerAge1 ? expectedPartnerAge1 : expectedPartnerAge,
                    expectedPartnerHeight: expectedPartnerHeight1 ? expectedPartnerHeight1 : expectedPartnerHeight,
                    expectedPartnerWeight: expectedPartnerWeight1 ? expectedPartnerWeight1 : expectedPartnerWeight,
                    contactEmail: contactEmail1 ? contactEmail1 : contactEmail,
                    mobileNumber: mobileNumber1 ? mobileNumber1 : mobileNumber
                }
                console.log(userInfo)
                setTimeout(() => {
                    axiosSecure.put(`/biodata/${_id}`, userInfo)
                        .then(res => {
                            refetch()
                            console.log("axios put", res.data)
                            if (res.data.modifiedCount) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Successfully Updated",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }

                        })
                        .catch(err => {
                            console.log(err.message)
                        })
                }, 30);

            }, 50);
        }, 100);

    }
    return (
        <div>
            <Helmet>
                <title>Moment||dashboard||Edi-Bio</title>
            </Helmet>
            <div className="p-10 w-full bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240]">
                <h1 className="text-blue">.</h1>
                <div
                    className=" bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240]   text-[#9e9cb6]">
                    <Taitle
                        heading={"Edit Your Bio-Data"}
                    >
                    </Taitle>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full  relative bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)] backdrop-blur-sm mx-2 overflow-hidden  ">
                        <div className=" ">
                            <div className="text-center">

                                <img src={profileImage} {...register("profileImage")} className="rounded-full w-[250px] mx-auto my-5 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd" />
                                <h2 className="block my-1 text-center">Bio-Data Id : {biodataId}</h2>
                                <div className="max-w-sm mx-auto">
                                    <label htmlFor="photobutton" className="text-xs font-medium text-gray-500">Update Your Photo :</label>
                                    <div className="relative z-0 mt-0.5 flex w-full -space-x-px">
                                        <input {...register("photo")} id="photobutton" type="file" className="block w-full cursor-pointer appearance-none rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />

                                    </div>
                                </div>

                                <h1 className=""><h1 className="text-xl font-bold">Name :</h1><input {...register("name")} defaultValue={name} type="text" name="name" id="" className="rounded bg-blue-gray-500 p-1 text-center" /></h1>
                                <h1 className=""><h1 className="text-xl font-bold">Permanent Division :</h1>

                                    <select {...register("permanentDivision")} className="rounded bg-blue-gray-500 p-1 text-center">

                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Shylet">Shylet</option>
                                        <option value="Maymansign">Maymansign</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Comilla">Comilla</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                    </select>
                                </h1>
                                <h1 className=""><h1 className="text-xl font-bold">Occupation :</h1>

                                    <select {...register("occupation")} className="rounded bg-blue-gray-500 p-1 text-center">
                                        <option value="Doctor">Doctor</option>
                                        <option value="Student">Student</option>
                                        <option value="Nurse">Nurse</option>
                                        <option value="Engineer">Engineer</option>
                                        <option value="Business Man">Business Man</option>
                                        <option value="Job Holder">Job Holder</option>
                                    </select>
                                </h1>

                                <p className="mt-5 text-center"></p>
                            </div>
                            <div>
                                <div className="lg:flex items-center justify-center gap-6  mx-auto my-5 ">
                                    <div className="px-2 space-y-6">

                                        <h1 className="">
                                            <h1 className="text-xl font-bold">
                                                Type :</h1>
                                            <select {...register("biodataType")} className="rounded bg-blue-gray-500 p-1 text-center">
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Date Of Birth :</h1>
                                            <DatePicker {...register("dob")} selected={startDate} onChange={(date) => setStartDate(date)} className="rounded bg-blue-gray-500 p-1 text-center" />
                                        </h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Father:</h1><input {...register("father")} defaultValue={fathersName} type="text" name="father" id="" className="rounded bg-blue-gray-500 p-1 text-center" /></h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Mother :</h1><input {...register("mother")} defaultValue={mothersName} type="text" name="mother" id="" className="rounded bg-blue-gray-500 p-1 text-center" /></h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Present Division :</h1>
                                            <select {...register("presentDivision")} className="rounded bg-blue-gray-500 p-1 text-center">

                                                <option value="Dhaka">Dhaka</option>
                                                <option value="Chittagong">Chittagong</option>
                                                <option value="Rangpur">Rangpur</option>
                                                <option value="Shylet">Shylet</option>
                                                <option value="Maymansign">Maymansign</option>
                                                <option value="Khulna">Khulna</option>
                                                <option value="Comilla">Comilla</option>
                                                <option value="Rajshahi">Rajshahi</option>
                                            </select>
                                        </h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Expected partner Height :</h1>
                                            <label className="flex">
                                                <select onChange={handlePHeight} className="rounded bg-blue-gray-500 p-1 text-center" >
                                                    {[...Array(530).keys()].map(feet => (
                                                        <option key={feet} value={feet}>{feet}</option>
                                                    ))}

                                                </select>
                                                <h1 className="text-xl font-bold">inch</h1>
                                            </label>
                                        </h1>


                                    </div>
                                    <div className=" px-2 space-y-6">
                                        <h1 className=""><h1 className="text-xl font-bold">Age :</h1>
                                            <input {...register("age")} defaultValue={age} type="text" name="" id="" className="rounded bg-blue-gray-500 p-1 text-center" />
                                        </h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Height :</h1>
                                            <div className="flex gap-2">
                                                <label className="flex">
                                                    <select onChange={handleFeet} className="rounded bg-blue-gray-500 p-1 text-center" >
                                                        {[...Array(13).keys()].map(feet => (
                                                            <option key={feet} value={feet}>{feet}</option>
                                                        ))}

                                                    </select>
                                                    <h1 className="text-xl font-bold">feet</h1>
                                                </label>

                                                <label className="flex">
                                                    <select onChange={handleInch} className="rounded bg-blue-gray-500 p-1 text-center" >
                                                        {[...Array(13).keys()].map(inch => (
                                                            <option key={inch} value={inch}>{inch}</option>
                                                        ))}
                                                    </select>
                                                    <h1 className="text-xl font-bold">inch</h1>
                                                </label>
                                            </div>

                                        </h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Race :</h1>
                                            <select {...register("race")} className="rounded bg-blue-gray-500 p-1 text-center">
                                                <option value="Asian">Asian</option>
                                                <option value="African">African</option>
                                                <option value="European">Euopian</option>
                                            </select>
                                        </h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Weight :</h1>
                                            <label className="flex">
                                                <select onChange={handleWeight} className="rounded bg-blue-gray-500 p-1 text-center" >
                                                    {[...Array(530).keys()].map(feet => (
                                                        <option key={feet} value={feet}>{feet}</option>
                                                    ))}

                                                </select>
                                                <h1 className="text-xl font-bold">Kg</h1>
                                            </label>
                                        </h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Expect Partner Age :</h1>
                                            <label className="flex">
                                                <select onChange={handlePAge} className="rounded bg-blue-gray-500 p-1 text-center" >
                                                    {[...Array(530).keys()].map(feet => (
                                                        <option key={feet} value={feet}>{feet}</option>
                                                    ))}

                                                </select>
                                                <h1 className="text-xl font-bold">Years</h1>
                                            </label>
                                        </h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Expect Partner Weight :</h1>
                                            <label className="flex">
                                                <select onChange={handlePWeight} className="rounded bg-blue-gray-500 p-1 text-center" >
                                                    {[...Array(530).keys()].map(feet => (
                                                        <option key={feet} value={feet}>{feet}</option>
                                                    ))}

                                                </select>
                                                <h1 className="text-xl font-bold">Kg</h1>
                                            </label>
                                        </h1>





                                    </div>



                                </div>


                            </div>
                        </div>


                        {/* --------------------------contact info */}
                        <div className="px-2 space-y-3 text-center">

                            <div >

                                <h2 className="text-xl font-bold text-center">Contact info</h2>
                                <div className="   mx-auto my-5 space-y-2">
                                    <h1 className=" "> <h2 className="text-2xl font-bold">Mobile :</h2> <input {...register("mobile")} defaultValue={mobileNumber} type="text" name="" id="" className="bg-blue-gray-500 rounded" /></h1>
                                    <h1 className=" "> <h2 className="text-2xl font-bold">Email :</h2><input disabled defaultValue={user.email} type="text" name="" id="" className="bg-blue-gray-500 rounded" /></h1>
                                </div>


                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
                            <button type="submit" className=" flex-1 p-3 border  border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">Save</button>
                            {/* <button type="submit" className=" flex-1 p-3 border  border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">Publish</button> */}
                            <Link to={'/dashbord/viewbio'}><button className="w-full flex-1 px-3 border border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">View</button></Link>


                        </div>

                    </form>

                    {/* --------------------------------------------- */}


                </div>


            </div>
        </div>
    );
};

export default EditBio;