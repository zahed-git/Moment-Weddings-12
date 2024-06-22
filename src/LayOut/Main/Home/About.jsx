import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Moment||about</title>
            </Helmet>
            <section className="bg-gray-100" id="aboutus">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg">
                    We provides our customers with the highest quality services. We offer a
                    wide variety of Bio-data and location to choose from, and we are always happy to help our customers find
                    the perfect Match for their needs.
                    We are committed to providing our customers with the best possible experience. We offer competitive
                    prices, fast  and excellent customer service. We are also happy to answer any questions
                    that our customers may have about our  services.
                    If you are looking for a date  that can provide you with the highest
                    quality soulmate , then we are the company for you. We look forward to serving you!</p>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default About;