import React from 'react'

import Header from '../includes/Header'
import Banner from '../includes/Banner'
import AboutOurCompany from '../includes/AboutOurCompany'
import Services from '../includes/Services'



const Home = () => {
    return (
        <>
            <div className="">
                <Header />
                <Banner />
                <AboutOurCompany />
                <Services />
            </div>
        </>
    )
}

export default Home
