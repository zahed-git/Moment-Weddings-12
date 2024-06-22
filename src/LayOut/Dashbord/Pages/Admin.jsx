import { Helmet } from "react-helmet-async";
import useBiodata from "../../../Hooks/useBiodata";
import useClient from "../../../Hooks/useClient";
import useMarried from "../../../Hooks/useMarried";
import Taitle from "../../../SmallComponent/Taitle";


const Admin = () => {
    const [clients] = useClient()
    const [biodata] = useBiodata()
    console.log(biodata)
    const [married] = useMarried()
    const boys = biodata.filter(people => people.biodataType === "Male")
    const girls = biodata.filter(people => people.biodataType === "Female")
    return (
        <div className="mt-10">
            <Helmet>
                <title>Moment||dashboard||Admin</title>
            </Helmet>
            {/* --------------------------------------------------- */}
            <Taitle
                heading={"Administrative Dashboard"}
            >
            </Taitle>
            <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total Bio Data Count
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Girls Bio-Data
                        </th>

                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Boys Bio-Data
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total Married
                        </th>

                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Premium Members
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                    <tr >
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                            {biodata.length}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                            {girls.length}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-center">
                            {boys.length}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap  text-center">
                            {married.length}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-center">
                            {clients.length}
                        </td>
                    </tr>



                </tbody>
            </table>
        </div>
    );
};

export default Admin;