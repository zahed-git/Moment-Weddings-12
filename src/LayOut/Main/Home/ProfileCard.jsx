



import Taitle from '../../../SmallComponent/Taitle';
import { Link } from 'react-router-dom';
import useClient from '../../../Hooks/useClient';

const ProfileCard = () => {
    const [clients] = useClient()
    return (
        <div >
            <Taitle
                heading={"Our Premium clients"}
            >
            </Taitle>
            <table className="min-w-full divide-y divide-gray-200 overflow-x-auto mx-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Id
                        </th>

                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Permanent  division
                        </th>

                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        clients && clients.map((data, idx) =>
                        (<tr key={idx}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">

                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src={data.profileImage} alt="profile_img" />
                                            </div>
                                            <div className="px-6 py-4 text-gray-500 text-center">
                                            Age : {data.age}, &nbsp;
                                          {data.occupation} 
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
                                    <h2 className="text-gray-500 ">{data.biodataType}</h2>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="text-sm text-gray-900">
                                    <h2 className="text-gray-500 ">{data.permanentDivision}</h2>
                                </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                <Link
                                    to={`/biodetail/${data.biodataId}`}
                                    className="btn btn-ghost text-gray-500 btn-xs text-sm">
                                    See Full Bio Detail
                                </Link>


                            </td>


                        </tr>)
                        )
                    }

                </tbody>
            </table>






        </div>
    );
};

export default ProfileCard;