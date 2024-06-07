import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import Taitle from '../../../SmallComponent/Taitle';

const ProfileCard = () => {
    const [clients, setClients] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/premium")
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div >
            <Taitle
           
                subheading={""}
                heading={"Our Premium client"}
            >
            </Taitle>
            <Swiper navigation={true} modules={[Navigation]} classNameName="mySwiper">

                {
                    clients && clients.map((data, idx) =>
                        <SwiperSlide
                            key={idx}
                            data={data}>


                            <Card
                                shadow={false}
                                className="mx-auto relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                            >
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                                >
                                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                                </CardHeader>
                                <CardBody className="relative py-14 px-6 md:px-12">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-6 font-medium leading-[1.5]"
                                    >
                                        How we design and code open-source projects?
                                    </Typography>
                                    <Typography variant="h5" className="mb-4 text-gray-400">
                                        Tania Andrew
                                    </Typography>
                                    <Avatar
                                        size="xl"
                                        variant="circular"
                                        alt="tania andrew"
                                        className="border-2 border-white"
                                        src={data.profile_image}
                                    />
                                </CardBody>
                            </Card>

                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ProfileCard;