
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './All.css'
import useBiodata from '../../../Hooks/useBiodata';
import {  useState } from 'react';
import BioCard from './BioCard';

const Biodata = () => {
    const [biodata,refetch] = useBiodata()
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(90);
    const [gender, setGender] = useState('')
    const [location, setLocation] = useState('Dhaka');
    const [searchResults, setSearchResults] = useState(biodata);
    const handleMinAgeChange = (event) => {
        setMinAge(Number(event.target.value));
    };

    const handleMaxAgeChange = (event) => {
        setMaxAge(Number(event.target.value));
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearch = () => {
            const result = biodata.filter(person =>  
                (person.biodataType === gender  ) &&
                ( person.permanentDivision === location) &&
                ( person.age >= minAge && person.age <= maxAge)) 
                refetch()
           setSearchResults(result)
    };

    return (
        <div className=''>
            <Helmet>
                <title>Moment||BioData</title>
            </Helmet>
            <h1 className='text-white'> ,</h1>
            <div>

            </div>
            <div className="lg:flex mt-10">
                {/* -------------------------------search start---------------------------------- */}
                <div className="w-2/11">

                    <Tabs >
                        <TabList>
                            <Tab>Filter</Tab>
                            <Tab>Advanced Filter</Tab>
                        </TabList>

                        <TabPanel>

                            <div className='border shadow-md border-s-blue-gray-300 p-3 rounded-xl'>
                                <div>
                                    <form >
                                        <div className="sm:col-span-3">
                                            <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">Set Age Limit</label>
                                            <div>
                                                <label>
                                                    <select value={minAge} onChange={handleMinAgeChange}>
                                                        {[...Array(51).keys()].map(age => (
                                                            <option key={age} value={age}>{age}</option>
                                                        ))}
                                                    </select>
                                                </label>

                                                <label>
                                                    to
                                                    <select value={maxAge} onChange={handleMaxAgeChange}>
                                                        {[...Array(91).keys()].map(age => (
                                                            <option key={age} value={age}>{age}</option>
                                                        ))}
                                                    </select>
                                                </label>


                                            </div>

                                        </div>

                                        <div className="sm:col-span-3 mt-6">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Bio-Data Type</label>
                                            <div className="mt-2">
                                                <select onChange={handleGenderChange} name="type" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

                                                    <option value={''}>Any</option>
                                                    <option value={'Male'}>Male</option>
                                                    <option value={'Female'}>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3 mt-6">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">By Division</label>
                                            <div className="mt-2">
                                                <select onChange={handleLocationChange} name="location" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option><button>Dhaka</button></option>
                                                    <option><button>Chattagram</button></option>
                                                    <option><button>Maymansign</button></option>
                                                    <option><button>Sylhet</button></option>
                                                    <option><button>Rangpur</button></option>
                                                    <option><button>Barisal</button></option>
                                                    <option><button>Khulna</button></option>
                                                </select>
                                            </div>
                                        </div>
                                        <button onClick={handleSearch} type="button" className="mt-4 justify-end text-white bg-deep-orange-400 hover:bg-blue-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Search

                                        </button>
                                    </form>
                                </div>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            {/* 2nd tab-------------------- */}
                        </TabPanel>
                    </Tabs>
                </div>
                {/* -------------------------------------search end---------------------------- */}
                {/* ----------------------------------result--------------- */}
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:ml-6">
                   
                        {searchResults.map((person, index) => (
                            <BioCard key={index} person={person}></BioCard>
                        ))}
                    
                    
                </div>
            </div>

        </div>
    );
};

export default Biodata;