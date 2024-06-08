import { useEffect, useState } from "react";
import Taitle from "../../../SmallComponent/Taitle";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import useMarried from "../../../Hooks/useMarried";

const SucessStory = () => {
    const [married]=useMarried()
    const byDate=married.sort((a, b) => new Date(a.date) - new Date(b.date));
 
   

   
    return (
        <div>
            <Taitle
                heading={"Matrimony Service with Millions of Success Stories"}
            >
            </Taitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                {
                    byDate?.map((couple,idx)=><SwiperSlide couple={couple} key={idx} className="sm:mx-5 lg:mx-32"> 
                    <Card className="sm:w-72 lg:w-96 mx-auto "> 
                    <CardHeader floated={false} className="">
                    <img src={couple.image} alt="wedding-pictures" /> 
                    </CardHeader> <CardBody className="text-center">
                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={couple.rating}
                                        readOnly
                                        className="mx-auto m-4"
                                    ></Rating>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                    Marriage Date: {couple.date}
                    </Typography> <Typography color="blue-gray" className="font-extralight" >
                        {couple.story}
                    </Typography> </CardBody> </Card>
            </SwiperSlide>)
                }
             </Swiper>

        </div>
    );
};

export default SucessStory;