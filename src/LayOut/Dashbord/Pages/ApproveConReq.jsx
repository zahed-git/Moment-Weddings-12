import { Helmet } from "react-helmet-async";
import useContactReq from "../../../Hooks/useContactReq";
import { FaUpload } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const ApproveConReq = () => {

    const [conReq, refetch] = useContactReq()
    const axiosSecure = useAxiosSecure()

    const handleUpdate = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to share the info",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes ,give the Permition"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id)
                axiosSecure.patch(`/contact-req/pending/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            //    --------------------
                            Swal.fire({
                                title: "Updated",
                                text: `Now he/she can see the info`,
                                icon: "success"
                            });
                        }
                        else {
                            Swal.fire({
                                title: "Fail",
                                text: "Operation fail.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error.message)
                    })

            }

        });
    }

    return (
        <div>
            <Helmet>
                <title>Moment||dashboard||Con-req</title>
            </Helmet>
            <div className="mt-10">

                <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                User Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Request contact by id
                            </th>

                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>

                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            conReq && conReq.map((data, idx) =>
                            (<tr key={idx}>
                                {
                                    data?.status === 'pending' ?
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">

                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {data.email}
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 text-center">
                                                {data.biodataId}
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="text-sm text-gray-900">
                                                    <h2 className="text-deep-orange-700 ">{data.status}</h2>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                                <button
                                                    onClick={() => handleUpdate(data._id)}
                                                    className="btn btn-ghost btn-xs text-red-500 text-sm">
                                                    <FaUpload />
                                                </button>



                                            </td>
                                        </> : <>
                                        </>
                                }
                              
                            </tr>)
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveConReq;