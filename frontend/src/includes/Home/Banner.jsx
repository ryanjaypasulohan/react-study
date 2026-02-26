import React from 'react'
import {useState} from 'react'
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {

    const [activeIndex, setActiveIndex] = useState(0);


    //if multiple slogans/headlines are needed for each slide, uncoment the below arrays 
    // const slogan = ['1st slide for slogan', '2nd slide for slogan', '3rd slide for slogan', '4th slide for slogan', '5th slide for slogan'];
    // const headline = ['1st slide for headline', '2nd slide for headline', '3rd slide for headline', '4th slide for headline', '5th slide for headline'];


    return (

        <div className="banner">
            <Swiper
                modules={[Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                effect='fade'
                fadeEffect={{crossFade: true}}
                onSwiper={(swiper) => console.log(swiper)}
                //if multiple slogans/headlines are needed for each slide, uncoment the below line
                // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex) } 
                onSlideChange={(swiper) => {}}         
                autoplay={{
                        delay: 4000, 
                        disableOnInteraction: false}}
            >
                <SwiperSlide><figure><img src="/Home/banner/banner1.jpg" alt="A gloved hand holds a small green plant, showcasing care for nature and gardening" /></figure></SwiperSlide>
                <SwiperSlide><figure><img src="/Home/banner/banner2.jpg" alt="Colorful hot air balloons soaring above majestic mountains under a clear blue sky" /></figure></SwiperSlide>
                <SwiperSlide><figure><img src="/Home/banner/banner3.jpg" alt="A panoramic view of the Masters Golf Course, showcasing its lush greens and iconic azaleas in full bloom" /></figure></SwiperSlide>
                <SwiperSlide><figure><img src="/Home/banner/banner4.jpg" alt="A serene beach scene featuring clear water under a bright blue sky" /></figure></SwiperSlide>
                <SwiperSlide><figure><img src="/Home/banner/banner5.jpg" alt="Autumn leaves in a New Zealand park, showcasing vibrant orange and yellow foliage under a clear blue sky" /></figure></SwiperSlide>
            </Swiper>
            <div className="banner_information">
                <h2 className='slogan'>Your Company Slogan</h2>
                <p className='headline'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, sint.</p>
                {/* if multiple slogans/headlines are needed for each slide, uncoment the below lines */}
                {/* <h2 className={`slogan fadeEffect`}>{slogan[activeIndex]}</h2>
                <p className={`headline fadeEffect`} >{headline[activeIndex]}</p> */}
                <Link to="/about-us" className='default_btn'>Read More &#8627;</Link>
            </div>
        </div>
    );
};

export default Banner