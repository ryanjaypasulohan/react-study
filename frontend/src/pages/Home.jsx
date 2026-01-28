import React from 'react'

import Header from '../includes/Header'
import Banner from '../includes/Banner'
import AboutOurCompany from '../includes/AboutOurCompany'
import Services from '../includes/Services'
import Testimonials from '../includes/Whatourclientsays'


const Home = () => {
    return (
        <>
            <div className="">
                <Header />
                <Banner />
                <AboutOurCompany />
                <Services />
                <Testimonials/>
            </div>
        </>
    )
}

export default Home
