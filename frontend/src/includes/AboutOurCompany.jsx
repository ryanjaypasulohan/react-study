import React from 'react'
import { Link } from 'react-router-dom';

const AboutOurCompany = () => {
    return (
        <>
            <div className="about_our_company_con py-5">
                <div className="wrapper">
                    <div className="about_our_company_con flex flex-row items-center justify-between gap-4 overflow-hidden">
                        <div className="about_content">
                            <h2 className='mb-3'>About Our Company</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Link to='/about-us'>Learn More &#8627;</Link>
                        </div>
                        <div className="about_image w-full">
                            <figure>
                                <img className='w-full' src="Home/aboutourcompany/about-img1.jpg" alt="About Our Company" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutOurCompany