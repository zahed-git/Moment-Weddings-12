import { Outlet } from "react-router-dom";
import Navv from "../../Shared/Navv";
import Footer from "../../Shared/Footer";


const Main = () => {
    return (
        <div>
            <Navv></Navv>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;