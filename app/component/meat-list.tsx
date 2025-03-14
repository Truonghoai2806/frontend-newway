"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

const MeatList = () => {
    const settings = {
        spaceBetween: 10,
        slidesPerView: 8, // Số icon hiển thị trên màn hình lớn
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1920: {
                slidesPerView: 8,
            },
            1440: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            361: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
        modules: [Autoplay],
    };

    const meatList = [
        { icon: 'icon-bull', title: 'Beef meat' },
        { icon: 'icon-turkey', title: 'Turkey' },
        { icon: 'icon-chicken-1', title: 'Chicken' },
        { icon: 'icon-sheep-front', title: 'Lamb' },
        { icon: 'icon-goat', title: 'Goat' },
        { icon: 'icon-duck', title: 'Duck' },
        { icon: 'icon-reindeer', title: 'Deer' },
        { icon: 'icon-rabbit', title: 'Rabbit' },
    ];

    return (
        <>
            <section className="meat-list bg-white">
                <div className="container-fluid mx-auto">
                    <Swiper {...settings}>
                        {meatList.map((meat, index) => (
                            <SwiperSlide key={index} className="meat-list__item item">
                                <div className="meat-list__icon">
                                    <span className={meat.icon}></span>
                                </div>
                                <h6 className="meat-list__title text-center">{meat.title}</h6>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default MeatList;
