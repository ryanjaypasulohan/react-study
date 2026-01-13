import React from 'react'
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';

const Banner = () => {


    return (

        <div className="banner">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect='fade'
                fadeEffect={{crossFade: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                        delay: 4000, 
                        disableOnInteraction: false}}
            >
                <SwiperSlide><figure><img src="/banner/banner1.jpg" alt="A gloved hand holds a small green plant, showcasing care for nature and gardening" /></figure></SwiperSlide>
                <SwiperSlide><figure><img src="/banner/banner2.jpg" alt="Colorful hot air balloons soaring above majestic mountains under a clear blue sky" /></figure></SwiperSlide>
                <SwiperSlide><figure><img src="/banner/banner3.jpg" alt="A panoramic view of the Masters Golf Course, showcasing its lush greens and iconic azaleas in full bloom" /></figure></SwiperSlide>
                <SwiperSlide><figure><img src="/banner/banner4.jpg" alt="A serene beach scene featuring clear water under a bright blue sky" /></figure></SwiperSlide>
                <SwiperSlide><figure><img src="/banner/banner5.jpg" alt="Autumn leaves in a New Zealand park, showcasing vibrant orange and yellow foliage under a clear blue sky" /></figure></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner