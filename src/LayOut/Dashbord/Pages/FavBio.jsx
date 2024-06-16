import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useFavList from "../../../Hooks/useFavList";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const FavBio = () => {
    const { user } = useAuth()
    const [favList, refetch] = useFavList()
    const axiosPablic = useAxiosPublic
    const userFav = favList?.filter(data => data.email === user.email)
    const handleDelete = (id) => {
        axiosPablic.delete(`/fav-list/${id}`)
            .then(res => {
                refetch()
                console.log(res.data)
            })

    }

    return (
        <div>
            <Helmet>
                <title>Moment||dashboard||Fav-Bio</title>
            </Helmet>
            <div className="mt-10">

                <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Profile Photo
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Id No
                            </th>

                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Permanent Division
                            </th>

                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            userFav && userFav.map((data, idx) =>
                            (<tr key={idx}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src={data.profileImage} alt="profile_img" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {user.permanentDivision}
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-500 text-center">
                                    {data.biodataId}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="text-sm text-gray-900">

                                        <h2 className=" text-gray-500 text-center">{data.permanentDivision}</h2>

                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">

                                    <Link
                                        to={`/biodetail/${data.biodataId}`}
                                        className="btn btn-ghost text-gray-500 btn-xs text-sm">
                                        See Full Bio Detail
                                    </Link>



                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="text-sm text-gray-900">
                                        <button
                                            onClick={() => handleDelete(data._id)}
                                            className="btn  btn-ghost btn-xs text-red-500 text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                            </svg>

                                        </button>

                                    </div>
                                </td>
                            </tr>)
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FavBio;