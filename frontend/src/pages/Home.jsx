import React from 'react'
import '../stlyesheets/home.scss'
import Header from '../includes/Header'
import Banner from '../includes/Banner'


const Home = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Banner />
            </div>
        </>
    )
}

export default Home
