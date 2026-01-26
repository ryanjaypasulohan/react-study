import React from 'react'

const Services = () => {
  return (
    <>
      <div className="services_container_con py-5">
        <div className="wrapper">
          <h2 className='text-center'>Serivces We Offer</h2>
          <p className='text-center mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, at?</p>
          <div className="mx-auto max-w-7xl text-center">
            <div className="flex flex-wrap justify-center gap-4 mt-3 w-full">
              <div className="serv_boxes flex-1 shadow-lg">
                <figure><img src="/Home/services/code.png" alt="code" /></figure>
                <h5>Web Development</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.</p>
              </div>
              <div className="serv_boxes flex-1 shadow-lg">
                <figure><img src="/Home/services/phone.png" alt="phone" /></figure>
                <h5>Mobile Apps</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.</p>
              </div>
              <div className="serv_boxes flex-1 shadow-lg">
                <figure><img src="/Home/services/cloud.png" alt="cloud" /></figure>
                <h5>Cloud Solution</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.</p>
              </div>
              <div className="serv_boxes flex-1 shadow-lg text-left">
                <figure><img src="/Home/services/bulb.png" alt="bulb" /></figure>
                <h5>Consulting</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services