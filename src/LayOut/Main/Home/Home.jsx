import Banner from "./Banner";
import HowWorks from "./HowWorks";
import ProfileCard from "./ProfileCard";
import SucessCounter from "./SucessCounter";
import SucessStory from "./SucessStory";


import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="space-y-14">

            <Helmet>
                <title>Moment||Home</title>
            </Helmet>
            <Banner></Banner>
            <ProfileCard></ProfileCard>
            <HowWorks></HowWorks>
            <SucessCounter></SucessCounter>
            <SucessStory></SucessStory>
        </div>
    );
};

export default Home;