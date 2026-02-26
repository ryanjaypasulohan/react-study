import React from 'react'

import Header from '../includes/Home/Header'
import Banner from '../includes/Home/Banner'
import AboutOurCompany from '../includes/Home/AboutOurCompany'
import Services from '../includes/Home/Services'
import Testimonials from '../includes/Home/Whatourclientsays'
import LatestBlog from '../includes/Home/LatestBlog'


const Home = () => {
    return (
        <>
            <div className="">
                <Header />
                <Banner />
                <AboutOurCompany />
                <Services />
                <Testimonials/>
                <LatestBlog/>
            </div>
        </>
    )
}

export default Home
