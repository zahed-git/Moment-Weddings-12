import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import Stats from "../../../Shared/Stats";
import Banner from "./Banner";
import HowWorks from "./HowWorks";
import ProfileCard from "./ProfileCard";
import SucessCounter from "./SucessCounter";
import SucessStory from "./SucessStory";


import { Helmet } from 'react-helmet-async';

const Home = () => {
    const {user}=useAuth()
    const [isAdmin]=useAdmin()
    console.log(isAdmin,user?.email)
    return (
        <div className="space-y-14">

            <Helmet>
                <title>Moment||Home</title>
            </Helmet>
            <Banner></Banner>
            <ProfileCard></ProfileCard>
            <HowWorks></HowWorks>
            <Stats></Stats>
            <SucessStory></SucessStory>
        </div>
    );
};

export default Home;