import useAdmin from "../../../Hooks/useAdmin";
import Taitle from "../../../SmallComponent/Taitle";
import Admin from "./Admin";
import ViewBio from "./ViewBio";

const D_Home = () => {
    const[isAdmin]=useAdmin()
    return (
        <div>
            <Taitle
                heading={"Welcome to Your Dashboard"}
            >
            </Taitle>
            {isAdmin?
            <>
            <Admin></Admin>
            </>:<>
            <ViewBio></ViewBio>
            </>

            }
        </div>
    );
};

export default D_Home;