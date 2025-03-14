"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import module Autoplay
import Image from 'next/image'; // Import thành phần Image của Next.js

import 'swiper/css';
import 'swiper/css/autoplay';

export default function ClientCarousel() {
    const settings = {
        slidesPerView: 5,  // Tương đương với slidesToShow
        spaceBetween: 30,  // Khoảng cách giữa các slide
        autoplay: {
            delay: 3000,  // Tương đương với autoplaySpeed
            disableOnInteraction: false,
        },
        breakpoints: {
            1920: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            },
        },
        loop: true,  // Tương đương với infinite
    };

    return (
        <section className="client-carousel">
            <div className="container mx-auto">
                <Swiper
                    {...settings}
                    modules={[Autoplay]}  // Sử dụng module Autoplay
                >
                    <SwiperSlide>
                        <div className="client-carousel__one__item">
                            <Image
                                src="/assets/images/resources/brand-1-1.png"
                                alt="brand logo"
                                width={106}
                                height={106}
                                priority={true} // Tải ưu tiên
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="client-carousel__one__item">
                            <Image
                                src="/assets/images/resources/brand-1-2.png"
                                alt="brand logo"
                                width={106}
                                height={106}
                                priority={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="client-carousel__one__item">
                            <Image
                                src="/assets/images/resources/brand-1-3.png"
                                alt="brand logo"
                                width={106}
                                height={106}
                                priority={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="client-carousel__one__item">
                            <Image
                                src="/assets/images/resources/brand-1-4.png"
                                alt="brand logo"
                                width={106}
                                height={106}
                                priority={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="client-carousel__one__item">
                            <Image
                                src="/assets/images/resources/brand-1-5.png"
                                alt="brand logo"
                                width={106}
                                height={106}
                                priority={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="client-carousel__one__item">
                            <Image
                                src="/assets/images/resources/brand-1-5.png"
                                alt="brand logo"
                                width={106}
                                height={106}
                                priority={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="client-carousel__one__item">
                            <Image
                                src="/assets/images/resources/brand-1-5.png"
                                alt="brand logo"
                                width={106}
                                height={106}
                                priority={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="client-carousel__one__item">
                            <Image
                                src="/assets/images/resources/brand-1-5.png"
                                alt="brand logo"
                                width={106}
                                height={106}
                                priority={true}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
