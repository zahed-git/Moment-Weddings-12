import { Helmet } from "react-helmet-async";
import useContactReq from "../../../Hooks/useContactReq";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const MyContactReq = () => {
    const [conReq,refetch] = useContactReq()
    const axiosPablic=useAxiosPublic()
    const { user } = useAuth()
    const data = conReq?.filter(con => (con.email === user.email))
    const handleDelete=(id)=>{
        axiosPablic.delete(`/contact-req/${id}`)
        .then(res=>{
           console.log(res.data)
           refetch()
        })
      
   }
    return (
        <div>
            <Helmet>
                <title>Moment||dashboard||con-req</title>
            </Helmet>
            <div className="mt-10">

                <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Request id
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Payment transactionId
                            </th>

                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>

                            {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th> */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            data && data.map((data, idx) =>
                            (<tr key={idx}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">

                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {data.biodataId}
                                            </div>

                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-500 text-center">
                                    {data.transactionId}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="text-sm text-gray-900">
                                        {
                                            data.state === 'pending' ?
                                                <>
                                                    <h2 className="text-deep-orange-700 ">pending</h2>
                                                </> : <>

                                                    <Link to={`/dashbord/my-con-req/showConReq/${data.biodataId}`}>Show</Link>
                                                </>
                                        }
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                    {
                                        data.state === 'pending' ?
                                            <>
                                                <button
                                                    onClick={() => handleDelete(data._id)}
                                                    className="btn  btn-ghost btn-xs text-red-500 text-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                                    </svg>

                                                </button>
                                            </> : <>
                                                <h1 className="px-6 py-4 text-gray-500"> Already settled</h1>
                                            </>
                                    }


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

export default MyContactReq;