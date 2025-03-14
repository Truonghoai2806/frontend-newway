"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import module Autoplay cho slider
import Image from 'next/image'; // Import Image component từ Next.js

// Import các style cần thiết của Swiper
import 'swiper/css';
import 'swiper/css/autoplay';

const TeamOneSectionSpaceTwo = () => {
    const settings = {
        slidesPerView: 3,  // Hiển thị 3 phần tử cho màn hình lớn
        spaceBetween: 30,  // Khoảng cách giữa các slide
        autoplay: {
            delay: 3000,  // Tốc độ tự động chuyển slide
            disableOnInteraction: false,
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
            },
            1200: {  // Desktop
                slidesPerView: 3,
            },
            1024: {  // Tablet
                slidesPerView: 2,  // Hiển thị 2 phần tử cho tablet
            },
            600: {  // Điện thoại lớn
                slidesPerView: 1,  // Hiển thị 1 phần tử cho điện thoại
            },
            300: {
                slidesPerView: 1,
            }
        },
        loop: true,  // Tương đương với infinite
    };

    return (
        <section className="team-one section-space-two" id="team">
            {/* Background Image */}
            <div
                className="team-one__bg"
                style={{
                    backgroundImage: `url('/assets/images/backgrounds/team-bg-1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}
            />

            <div className="container mx-auto">
                {/* Section Title */}
                <div className="team-one__content">
                    <div className="sec-title sec-title--center">
                        <Image
                            src="/assets/images/shapes/sec-title-s-1.png"
                            alt="Our Team"
                            width={100}
                            height={100} // Điều chỉnh kích thước hình ảnh
                            className="sec-title__img"
                        />
                        <h6 className="sec-title__tagline">Our Team</h6>
                        <h2 className="sec-title__title">Our Expert Teams</h2>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="slider-wrapper">
                    <Swiper {...settings} modules={[Autoplay]}>
                        {/* Team Member 1 */}
                        <SwiperSlide>
                            <div className="team-card">
                                <div className="team-card__bg">
                                    <div
                                        className="team-card__bg__inner"
                                        style={{
                                            backgroundImage: `url('/assets/images/shapes/team-card-bg-1-1.png')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                </div>
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <a href="page/teamdetail">Whitney R. Watts</a>
                                    </h3>
                                    <h6 className="team-card__designation">Gemini Market</h6>
                                </div>
                                <div className="team-card__image">
                                    <Image
                                        src="/assets/images/team/team-1-1.jpg"
                                        alt="Whitney R. Watts"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="team-card__social">
                                    <span className="team-card__social__share icon-share-1"></span>
                                    <div className="team-card__social__list">
                                        <a href="https://facebook.com">
                                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                        <a href="https://twitter.com">
                                            <i className="fab fa-twitter" aria-hidden="true"></i>
                                            <span className="sr-only">Twitter</span>
                                        </a>
                                        <a href="https://linkedin.com">
                                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                            <span className="sr-only">Linkedin</span>
                                        </a>
                                        <a href="https://youtube.com" aria-hidden="true">
                                            <i className="fab fa-youtube"></i>
                                            <span className="sr-only">Youtube</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Team Member 2 */}
                        <SwiperSlide>
                            <div className="team-card">
                                <div className="team-card__bg">
                                    <div
                                        className="team-card__bg__inner"
                                        style={{
                                            backgroundImage: `url('/assets/images/shapes/team-card-bg-1-1.png')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                </div>
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <a href="page/teamdetail">Crystal R. Jones</a>
                                    </h3>
                                    <h6 className="team-card__designation">Gemini Market</h6>
                                </div>
                                <div className="team-card__image">
                                    <Image
                                        src="/assets/images/team/team-1-2.jpg"
                                        alt="Crystal R. Jones"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="team-card__social">
                                    <span className="team-card__social__share icon-share-1"></span>
                                    <div className="team-card__social__list">
                                        <a href="https://facebook.com">
                                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                        <a href="https://twitter.com">
                                            <i className="fab fa-twitter" aria-hidden="true"></i>
                                            <span className="sr-only">Twitter</span>
                                        </a>
                                        <a href="https://linkedin.com">
                                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                            <span className="sr-only">Linkedin</span>
                                        </a>
                                        <a href="https://youtube.com" aria-hidden="true">
                                            <i className="fab fa-youtube"></i>
                                            <span className="sr-only">Youtube</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Team Member 3 */}
                        <SwiperSlide>
                            <div className="team-card">
                                <div className="team-card__bg">
                                    <div
                                        className="team-card__bg__inner"
                                        style={{
                                            backgroundImage: `url('/assets/images/shapes/team-card-bg-1-1.png')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                </div>
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <a href="page/teamdetail">Joann A. Turner</a>
                                    </h3>
                                    <h6 className="team-card__designation">Gemini Market</h6>
                                </div>
                                <div className="team-card__image">
                                    <Image
                                        src="/assets/images/team/team-1-3.jpg"
                                        alt="Joann A. Turner"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="team-card__social">
                                    <span className="team-card__social__share icon-share-1"></span>
                                    <div className="team-card__social__list">
                                        <a href="https://facebook.com">
                                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                        <a href="https://twitter.com">
                                            <i className="fab fa-twitter" aria-hidden="true"></i>
                                            <span className="sr-only">Twitter</span>
                                        </a>
                                        <a href="https://linkedin.com">
                                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                            <span className="sr-only">Linkedin</span>
                                        </a>
                                        <a href="https://youtube.com" aria-hidden="true">
                                            <i className="fab fa-youtube"></i>
                                            <span className="sr-only">Youtube</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section >
    );
};

export default TeamOneSectionSpaceTwo;
