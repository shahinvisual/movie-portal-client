// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
// import required modules
import { Scrollbar } from 'swiper/modules';

import MoviePoster_1 from '../../assets/MoviePoster_1.jpg'
import MoviePoster_2 from '../../assets/MoviePoster_2.jpg'
import MoviePoster_3 from '../../assets/MoviePoster_3.jpg'
import MoviePoster_4 from '../../assets/MoviePoster_4.jpg'
import MoviePoster_5 from '../../assets/MoviePoster_5.jpg'
import MoviePoster_6 from '../../assets/MoviePoster_6.jpg'
import MoviePoster_7 from '../../assets/MoviePoster_7.jpg'
const SwiperBanner = () => {
    return (
        <div className='mt-7 mb-12'>
            <>
                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper h-[450px] rounded-xl"
                >
                    <SwiperSlide><img className='object-cover h-full w-full' src={MoviePoster_1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover h-full w-full' src={MoviePoster_2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover h-full w-full' src={MoviePoster_3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover h-full w-full' src={MoviePoster_4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover h-full w-full' src={MoviePoster_5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover h-full w-full' src={MoviePoster_6} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='object-cover h-full w-full' src={MoviePoster_7} alt="" /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default SwiperBanner;