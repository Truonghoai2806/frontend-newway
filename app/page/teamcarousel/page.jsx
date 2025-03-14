"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Navigation styles

const TeamOneSectionSpaceTwo = () => {
    const teamMembers = [
        { name: "Whitney R. Watts", designation: "Gemini Market", img: "/assets/images/team/team-1-1.jpg" },
        { name: "Crystal R. Jones", designation: "Gemini Market", img: "/assets/images/team/team-1-2.jpg" },
        { name: "Joann A. Turner", designation: "Gemini Market", img: "/assets/images/team/team-1-3.jpg" },
        { name: "James D. Perry", designation: "Gemini Market", img: "/assets/images/team/team-1-4.jpg" },
        { name: "Helen A. Howard", designation: "Gemini Market", img: "/assets/images/team/team-1-5.jpg" },
        { name: "Michael R. Simmons", designation: "Gemini Market", img: "/assets/images/team/team-1-6.jpg" },
    ];

    return (
        <>
            <section className="page-header relative" style={{ height: '320px' }}>
                <div
                    className="page-header__bg absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}
                ></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title text-[55px] font-bold text-white text-center">Our Team</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <span>Our Team</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="relative section-space-two" id="team">
                <div className="relative container mx-auto 2xl:h-[600px]">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{ delay: 4500 }}
                        pagination={{ clickable: true, el: '.swiper-pagination' }}
                        
                        breakpoints={{
                            1920: { slidesPerView: 3 },
                            1400: { slidesPerView: 3 },
                            1024: { slidesPerView: 2 },
                            768: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            300: { slidesPerView: 1 },
                        }}
                        modules={[Autoplay, Pagination, Navigation]} // Include Navigation module
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
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
                                            <a href="/page/teamdetails">{member.name}</a>
                                        </h3>
                                        <h6 className="team-card__designation">{member.designation}</h6>
                                    </div>
                                    <div className="team-card__image">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
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
                        ))}
                    </Swiper>
                    <div className="swiper-pagination pt-[60px]"></div>
                    
                </div>
            </section>
        </>
    );
};

export default TeamOneSectionSpaceTwo;
