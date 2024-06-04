import { Outlet } from "react-router-dom";
import Navv from "../../Shared/Navv";


const Main = () => {
    return (
        <div>
            <Navv></Navv>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;