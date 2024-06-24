import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Taitle from "../../../SmallComponent/Taitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hooks/useAuth";
import useStatus from "../../../Hooks/useStatus";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const CreatBio = () => {
   const [refetch,stats]=useStatus()
   const createId=stats.result+1
    const [startDate, setStartDate] = useState(new Date());
    const dateStr = startDate.toString();
    const extractedDate = dateStr?.slice(4, 15);
    const { user } = useAuth()
    const [ft, setFt] = useState(5)
    const [inch, setIn] = useState(5)
    const [wegt, setWeight] = useState(60)
    const [pWeight, setPWeight] = useState(60)
    const [pAge, setPAge] = useState(33)
    const [pHeight, setPHeight] = useState()
    const heightVal = `${ft}'${inch}"`
    
    console.log(typeof createId)



    const axiosPublic = useAxiosPublic()

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
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        setTimeout( async() => {
            const name = data.name;
            const biodataType = data.biodataType
            const permanentDivision = data.permanentDivision
            const presentDivision = data.presentDivision
            const age= data.age
            const dob = extractedDate
            const height = heightVal
            const weight = wegt
            const race = data.race
            const fathersName = data.father
            const mothersName = data.mother
            const occupation = data.occupation
            const expectedPartnerAge = pAge
            const expectedPartnerHeight = pHeight
            const expectedPartnerWeight = pWeight
            const contactEmail = user.email
            const mobileNumber = data.mobile
            const imageFile = { image: data.photo[0] };
           
                console.log(imageFile.image)
                const res =await axiosPublic.post(image_hosting_api, imageFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }

                })
                const imgBBphoto = res.data.data.display_url
           



console.log(imgBBphoto)

            setTimeout(async() => {
                const userInfo = {
                    name: name,
                    biodataId:createId,
                    profileImage: imgBBphoto,
                    biodataType: biodataType,
                    permanentDivision: permanentDivision,
                    presentDivision: presentDivision,
                    age: age,
                    dob: dob,
                    height: height,
                    weight: weight,
                    race: race,
                    fathersName: fathersName,
                    mothersName: mothersName,
                    occupation: occupation,
                    expectedPartnerAge: expectedPartnerAge,
                    expectedPartnerHeight: expectedPartnerHeight,
                    expectedPartnerWeight: expectedPartnerWeight,
                    contactEmail: contactEmail,
                    mobileNumber: mobileNumber
                }
                console.log(userInfo)
                setTimeout(() => {
                    axiosPublic.post('/biodata', userInfo)
                        .then(res => {
                           
                            console.log("axios post", res.data)
                            if (res.data.insertedId) {
                                refetch()
                                reset()
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Successfully Created",
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
                <title>Moment||about</title>
            </Helmet>
            <h1>.</h1>
            <div className=" mt-10">
                <Taitle
                    heading={"create your Your Bio-Data"}

                >
                </Taitle>
                <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full  relative bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)]   ">
                        <div className=" ">
                            <div className="text-center">
                                <div className="max-w-sm mx-auto">
                                    <label htmlFor="photobutton" className="text-xs font-medium text-gray-500">Update Your Photo :</label>
                                    <div className="relative z-0 mt-0.5 flex w-full -space-x-px">
                                        <input {...register("photo",{ required: true })} id="photobutton" type="file" className="block w-full cursor-pointer appearance-none rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                                        {errors.photo && <span>PLS select a Photo</span>}
                                    </div>
                                </div>

                               
                                <h1 className=""><h1 className="text-xl font-bold">Biodata Id :</h1><input disabled defaultValue={createId}  type="text" name="name" id="" className="rounded bg-blue-gray-500 p-1 text-center" /></h1>
                                <h1 className=""><h1 className="text-xl font-bold">Name :</h1><input {...register("name",{ required: true })}  type="text" name="name" id="" className="rounded bg-blue-gray-500 p-1 text-center" /></h1>
                                {errors.name && <span>PLS give a Photo-URL</span>}
                                <h1 className=""><h1 className="text-xl font-bold">Permanent Division :</h1>

                                    <select {...register("permanentDivision",{ required: true })} className="rounded bg-blue-gray-500 p-1 text-center">

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
                                {errors.permanentDivision && <span>PLS select any</span>}
                                <h1 className=""><h1 className="text-xl font-bold">Occupation :</h1>

                                    <select {...register("occupation",{ required: true })} className="rounded bg-blue-gray-500 p-1 text-center">
                                        <option value="Doctor">Doctor</option>
                                        <option value="Student">Student</option>
                                        <option value="Nurse">Nurse</option>
                                        <option value="Engineer">Engineer</option>
                                        <option value="Business Man">Business Man</option>
                                        <option value="Job Holder">Job Holder</option>
                                    </select>
                                </h1>
                                {errors.occupation && <span>PLS select any</span>}

                                <p className="mt-5 text-center"></p>
                            </div>
                            <div>
                                <div className="lg:flex items-center justify-center gap-6  mx-auto my-5 ">
                                    <div className="px-2 space-y-6">

                                        <h1 className="">
                                            <h1 className="text-xl font-bold">
                                                Type :</h1>
                                            <select {...register("biodataType",{ required: true })} className="rounded bg-blue-gray-500 p-1 text-center">
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </h1>
                                        {errors.biodataType && <span>PLS select any</span>}
                                        <h1 className=""><h1 className="text-xl font-bold">Date Of Birth :</h1>
                                            <DatePicker required selected={startDate} onChange={(date) => setStartDate(date)} className="rounded bg-blue-gray-500 p-1 text-center" />
                                        </h1>
                                        <h1 className=""><h1 className="text-xl font-bold">Father:</h1><input {...register("father",{ required: true })}  type="text" name="father" id="" className="rounded bg-blue-gray-500 p-1 text-center" /></h1>
                                        {errors.father && <span>PLS fill up the field</span>}
                                        <h1 className=""><h1 className="text-xl font-bold">Mother :</h1><input {...register("mother",{ required: true })}  type="text" name="mother" id="" className="rounded bg-blue-gray-500 p-1 text-center" /></h1>
                                        {errors.mother && <span>PLS fill up the field</span>}
                                        <h1 className=""><h1 className="text-xl font-bold">Present Division :</h1>
                                            <select {...register("presentDivision",{ required: true })} className="rounded bg-blue-gray-500 p-1 text-center">

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
                                        {errors.presentDivision && <span>PLS select any</span>}
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
                                            <input {...register("age",{ required: true })} type="text" name="age" id="" className="rounded bg-blue-gray-500 p-1 text-center" />
                                        </h1>
                                        {errors.age && <span>give your age</span>}
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
                                            <select {...register("race",{ required: true })} className="rounded bg-blue-gray-500 p-1 text-center">
                                                <option value="Asian">Asian</option>
                                                <option value="African">African</option>
                                                <option value="European">Euopian</option>
                                            </select>
                                        </h1>
                                        {errors.race && <span>PLS select any</span>}
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
                                        <h1 className=""><h1 className="text-xl font-bold">Expected Partner Age :</h1>
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
                                    <h1 className=" "> <h2 className="text-2xl font-bold">Mobile :</h2> <input {...register("mobile",{ required: true })}  type="text" name="mobile" id="" className="bg-blue-gray-500 rounded" /></h1>
                                    <h1 className=" "> <h2 className="text-2xl font-bold">Email :</h2><input disabled defaultValue={user?.email} type="text" name="email" id="" className="bg-blue-gray-500 rounded" /></h1>
                                </div>


                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
                            <button type="submit" className=" flex-1 p-3 border  border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">Save</button>
                            {/* <button type="submit" className=" flex-1 p-3 border  border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">Publish</button> */}
                            <Link to={'/dashbord/viewbio'}><button className="w-full flex-1 px-3 border border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">View</button></Link>


                        </div>

                    </form>
            </div>

        </div>
    );
};

export default CreatBio;