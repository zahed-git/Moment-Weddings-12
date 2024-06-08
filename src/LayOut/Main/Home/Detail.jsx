import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    const { _id } = useParams()
    const [user,setUser]=useState()
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:5000/premium");
            const allData = await res.json()
            const singleData = allData?.find(data => data._id == _id)
            setUser(singleData)
        }
        fetchData()
    }, [_id])
    return (
        <div
    className="bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240] flex items-center justify-center min-h-screen text-[#9e9cb6]">
            <section
                className="w-full max-w-[430px] relative bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)] backdrop-blur-sm mx-2 overflow-hidden">
                
                <a  target="_blank" className="">
                    <img src={user?.profile_image} className="rounded-full w-[120px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd" />
                </a>
                <h1 className="text-xl font-bold text-center">{user?.name}</h1>
                <small className="block my-1 text-center">{user?.permanent_division}</small>
                <small className="block my-1 text-center">{user?.occupation}</small>
                <p className="mt-5 text-center"></p>
                <div className="flex items-center justify-center gap-6 w-[80%] mx-auto mt-5 mb-10">
                    <h1>Gender: {user?.biodata_type}</h1>
                    <h1>Age: {user?.age}</h1>  
                </div>
                <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
                    <button className="flex-1 border border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">Message</button>
                    <button className="flex-1 border border-[#231f39] text-[#ffffff] rounded-[4px] py-3 transition-all duration-150 ease-in hover:bg-[#472e99]  hover:text-white">Following</button>
                </div>
             
            </section>
        </div>
    );
};

export default Detail;