
import useStatus from '../Hooks/useStatus';
import useBiodata from '../Hooks/useBiodata';
import useMarried from '../Hooks/useMarried';
import Taitle from '../SmallComponent/Taitle';
import { MdBoy, MdGirl, MdPlayCircleFilled } from "react-icons/md"
import useAdmin from '../Hooks/useAdmin';
import Charts from '../LayOut/Dashbord/Pages/Charts';

const Stats = () => {
    const[isAdmin]=useAdmin()

    const [biodata] = useBiodata()
    const boys = biodata.filter(people => people.biodataType === "Male")
    const girls = biodata.filter(people => people.biodataType === "Female")
    const [stats] = useStatus()
    const revenue=stats.revenue
    const total = stats.result
    const marred = stats.marred

    return (
        <div className=' text-gray-800 p-10 bg-gray-200 space-y-11'>
            <Taitle
                heading={"Overview Of Our Clients"}

            >
            </Taitle>
            <div className="flex items-center justify-center  ">

                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6  w-full max-w-6xl">

                    {/* <!-- Tile 1 --> */}
                    {
                        revenue ? <>
                            <div className="flex items-center p-4 bg-white rounded">
                                <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <span className="text-xl font-bold">{revenue}</span>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500"> Total Revenue</span>
                                        <span className="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
                                    </div>
                                </div>
                            </div>
                        </> : <></>

                    }

                    {/* <!-- Tile 2 --> */}
                    <div className="flex items-center p-4 bg-white rounded">
                        <div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
                        <MdPlayCircleFilled className='text-5xl' />
                        </div>
                        <div className="flex-grow flex flex-col ml-4">
                            <span className="text-xl font-bold">{total}</span>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Total Bio data Created</span>
                                <span className="text-red-500 text-sm font-semibold ml-2">-8.1%</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Tile 3 --> */}
                    <div className="flex items-center p-4 bg-white rounded">
                        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                        <MdBoy className='text-5xl' />
                        </div>
                        <div className="flex-grow flex flex-col ml-4">
                            <span className="text-xl font-bold">{boys.length}</span>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Boys Bio data </span>
                                <span className="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded">
                        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                        <MdGirl className='text-5xl' />
                        </div>
                        <div className="flex-grow flex flex-col ml-4">
                            <span className="text-xl font-bold">{girls.length}</span>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Girls Bio data</span>
                                <span className="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded">
                        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                </svg>
                        </div>
                        <div className="flex-grow flex flex-col ml-4">
                            <span className="text-xl font-bold">{marred}</span>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Total Marred</span>
                                <span className="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {isAdmin?
            <>
            <Charts boys={boys} girls={girls}></Charts>
            </>:<></>

            }
        </div>
    );
};

export default Stats;