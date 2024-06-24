import { Helmet } from "react-helmet-async";
import useBiodata from "../../../Hooks/useBiodata";
import useClient from "../../../Hooks/useClient";
import useMarried from "../../../Hooks/useMarried";
import Taitle from "../../../SmallComponent/Taitle";
import useStatus from "../../../Hooks/useStatus";
import Stats from "../../../Shared/Stats";
import Charts from "./Charts";


const Admin = () => {
    return (
        <div className="mt-10">
            <Helmet>
                <title>Moment||dashboard||Admin</title>
            </Helmet>
            {/* --------------------------------------------------- */}
           
                  {
                    <Stats  ></Stats>
                  }
           
        </div>
    );
};

export default Admin;