import useClient from '../../../Hooks/useClient';
import Taitle from '../../../SmallComponent/Taitle';
import { MdGirl } from "react-icons/md"
import { MdBoy } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import useMarried from '../../../Hooks/useMarried';
const SucessCounter = () => {
    const [clients]=useClient()
    const [married]=useMarried()
    const boys= clients.filter(people=>people.biodata_type==="Male")
    const girls= clients.filter(people=>people.biodata_type==="Female")
    return (
        <div>
            <Taitle
                heading={"An overview of Our Clients "}
            >
            </Taitle>
            <div>
            <div className="lg:flex gap-14 justify-between  px-10">
                    <div className="m-6 ">
                        <div className="flex gap-2">
                        <TbUsersGroup className='text-2xl'/>
                            <h2>Our Total Client : {clients.length}</h2>
                        </div>
                      </div>
                    <div className="m-6">
                        <div className="flex gap-2">
                            
                        <MdGirl className='text-2xl'/>
                            <h2>Ladys Biodata : {girls.length}</h2>
                        </div>
                     </div>
                    <div className="m-6">
                    <div className="flex gap-2">
                    <MdBoy className='text-2xl'/>

                        <h2>Gents Biodata : {boys.length}</h2>
                    </div>
                     </div>
                   

                </div>
            </div>
            <div className="flex justify-center m-10 gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
</svg>

                            <h2>Total Married : {married.length}</h2>
                        </div>
            
        </div>
    );
};

export default SucessCounter;