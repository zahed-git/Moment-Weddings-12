import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import Taitle from '../../../SmallComponent/Taitle';
import { Link } from 'react-router-dom';
import useClient from '../../../Hooks/useClient';

const ProfileCard = () => {
    const [clients]=useClient()
    return (
        <div >
            <Taitle
                heading={"Our Premium clients"}
            >
            </Taitle>
            <Swiper navigation={true} modules={[Navigation]} classNameName="mySwiper">

                {
                    clients && clients.map((data, idx) =>
                        <SwiperSlide
                            key={idx}
                            data={data}>


                            <Card className="w-96 mx-auto">
                                <CardHeader floated={false} className="h-80">
                                    <img src={data.profile_image} alt="profile-picture" />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <Typography variant="h4" color="blue-gray" className="mb-2">
                                       {data.name}
                                    </Typography>
                                    <Typography color="blue-gray" className="font-medium" >
                                        {data.occupation}
                                    </Typography>
                                    <Typography color="blue-gray" className="font-medium" >
                                       Gender: {data.biodata_type}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="flex justify-center gap-7 ">
                                    <div className='flex gap-10'>
                                    <Typography color="blue-gray" className="font-medium" >
                                       Age: {data.age}
                                    </Typography>
                                    <Typography color="blue-gray" className="font-medium" >
                                       From: {data.permanent_division}
                                    </Typography>
                                    
                                    </div>
                                    
                                </CardFooter>
                                <Typography color="blue-gray" className='flex  justify-center' >
                                   
                                <Link to={`/detail/${data._id}`}><button className='mx-auto w-56 my-6 py-3 text-base font-bold rounded-lg  bg-lime-300  '>View Profile</button></Link>
                                </Typography>
                            </Card>

                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ProfileCard;