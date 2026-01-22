import React from 'react'

const AboutOurCompany = () => {
  return (
    <>
    <div className="about_our_company_con d-flex flex-row align-items-center justify-content-between my-5 gap-4 overflow-hidden">
        <div className="about_content">
            <h2 className='mb-3'>About Our Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="about_image w-100">
            <figure>
                <img  className='w-100' src="Home/aboutourcompany/about-img1.jpg" alt="About Our Company" />
            </figure>
        </div>
    </div>
    </>
  )
}

export default AboutOurCompany