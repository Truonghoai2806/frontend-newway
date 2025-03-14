"use client";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Banner() {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/banner`)
            .then(response => {
                const responseData = response.data.data; // Truy cập trường 'data' trong response
                if (Array.isArray(responseData)) { // Kiểm tra xem responseData có phải là mảng không
                    // const activeSlides = responseData.filter(slide => slide.is_active); // Lọc các slide hoạt động
                    // setSlides(activeSlides);
                    setSlides(responseData);
                } else {
                    console.error('Response data is not an array:', responseData);
                }
            })
            .catch(error => {
                console.error("Error fetching banner data:", error);
            });
    }, []);
    
    

    const settings = {
        slidesPerView: 1,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            clickable: true,
        },
    };

    return (
        <section className="hero-slider-one hero-main-slider" id="home">
            <div className="mx-auto">
                <Swiper {...settings} modules={[Autoplay, Pagination]}>
                    {slides.map((slide, index) => {
                        // Determine text color based on background color
                        const isWhiteBackground = slide.background_color === '#FFFFFF' || slide.background_color === 'white';
                        const textColorClass = isWhiteBackground ? 'text-black' : 'text-white';

                        return (
                            <SwiperSlide key={index}>
                                <div
                                    className={`relative z-30 pt-[197px] pb-[212px] h-[788px] ${textColorClass}`}
                                    style={{
                                        backgroundColor: slide.background_color || 'transparent',
                                        backgroundImage: !slide.background_color ? `url(/assets/images/backgrounds/slider-1-3.jpg)` : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="h-full  flex items-center justify-center">
                                        <div className={`relative z-20 w-[1200px] text-left ${textColorClass}`}>
                                            {/* Overlay Group */}
                                            <span
                                                className="hero-slider-one__title__overlay-group w-1/2"
                                                style={{ animation: 'fadeIn 1s forwards, fadeOut 1s forwards 2s' }}
                                            >
                                                <span className="hero-slider-one__title__overlay"></span>
                                                <span className="hero-slider-one__title__overlay"></span>
                                                <span className="hero-slider-one__title__overlay"></span>
                                                <span className="hero-slider-one__title__overlay"></span>
                                                <span className="hero-slider-one__title__overlay"></span>
                                                <span className="hero-slider-one__title__overlay"></span>
                                            </span>

                                            {/* Sub-title */}
                                            <h5
                                                className={`text-[20px] font-bold leading-normal tracking-[5px] uppercase mb-2.5 pb-2.5 animate-fadeIn ${textColorClass}`}
                                                style={{ animationDelay: `3s` }}
                                            >
                                                {slide.description}
                                            </h5>

                                            {/* Title */}
                                            <h2 className={`hero-slider-one__title animate-slideInLeft w-2/3 ${textColorClass}`} style={{ animationDelay: `0.5s` }}>
                                                {slide.title}
                                            </h2>

                                            {/* Button */}
                                            <div
                                                className={` animate-slideInRight ${isWhiteBackground ? '' : 'hero-slider-one__btn'}`}
                                                style={{ animationDelay: `3.5s` }}
                                            >
                                                <a href={slide.aboutLink} className="boskery-btn">
                                                    <span className="boskery-btn__hover"></span>
                                                    <span className="boskery-btn__hover"></span>
                                                    <span className="boskery-btn__hover"></span>
                                                    <span className="boskery-btn__hover"></span>
                                                    <span className="boskery-btn__hover"></span>
                                                    <span className="boskery-btn__hover"></span>
                                                    <span className="boskery-btn__text">know about us</span>
                                                    <i className="icon-meat-3"></i>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
