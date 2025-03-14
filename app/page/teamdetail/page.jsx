'use client';
import Image from 'next/image';
import React from 'react';
export default function TeamDetail() {


    return (

        <>
            <section className="page-header relative" style={{ height: '320px' }}>
                <div className="page-header__bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title font-bold text-white text-center">Kenneth Z. Burke</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <span className="hover:underline">Our Team</span>
                        </li>
                        <li>
                            <span>Kenneth Z. Burke</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="team-details section-space">
                <div className="container mx-auto">
                <div className="team-details__inner wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>

                        <div className="team-details__image flex justify-center">
                            <Image
                               width={391}
                               height={474}
                                src="/assets/images/team/team-d-1.jpg"
                                alt="Kenneth Z. Burke"
                                className="max-w-full h-auto object-contain"
                            />
                        </div>
                        <div className="team-details__content">
                            <div className="team-details__top">
                                <div className="team-details__identity">
                                    <h4 className="team-details__name">Kenneth Z. Burke</h4>
                                    <span className="team-details__designation">Gemini market</span>
                                </div>
                                <div className="team-details__social flex justify-center">
                                    <a href="https://facebook.com" className="mx-2">
                                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="https://twitter.com" className="mx-2">
                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                        <span className="sr-only">Twitter</span>
                                    </a>
                                    <a href="https://linkedin.com" className="mx-2">
                                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                        <span className="sr-only">Linkedin</span>
                                    </a>
                                    <a href="https://youtube.com" aria-hidden="true" className="mx-2">
                                        <i className="fab fa-youtube"></i>
                                        <span className="sr-only">Youtube</span>
                                    </a>
                                </div>
                            </div>
                            <div className="team-details__description">
                                <p className="team-details__text">Prior to joining company, she spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and sales. Most recently, he was SVP &amp; Global Head of the Manufacturing business.</p>
                                <p className="team-details__text">As well as a board member of their software subsidiary. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels.</p>
                            </div>
                            <Image
                                width={91}
                                height={50}
                                src="/assets/images/shapes/team-d-sign.png" alt="team-d-sign" className="" />
                            <ul className="team-details__info">
                                <li>
                                    <span className="icon-phone-call"></span>
                                    <a href="tel:+9156980036420">+91 5698 0036 420</a>
                                </li>
                                <li>
                                    <span className="icon-paper-plane"></span>
                                    <a href="mailto:info@Boskery.com">info@Boskery.com</a>
                                </li>
                                <li>
                                    <span className="icon-maps-and-flags"></span>
                                    <a href="https://www.google.com/maps/@23.506657,90.3443647,7z?entry=ttu">26 Manor St, Braintree UK</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-skills-one">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <div className="team-skills-one__info">
                        <div className="team-skills-one__content">
                            <h3 className="team-skills-one__title">Personal Information</h3>
                            <div className="team-skills-one__description wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                                <p className="team-skills-one__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                                <p className="team-skills-one__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-skills-one__skills">
                        <h3 className="team-skills-one__title team-skills-one__skills__title">Personal skills</h3>
                        <div className="team-skills-one__skills__inner">
                            <div className="team-skills-one__progress progress-box">
                                <h4 className="progress-box__title">Quality of Meat</h4>
                                <div className="progress-box__bar">
                                    <div className="progress-box__bar__inner count-bar counted" data-percent="95%" style={{ width: '95%' }}>
                                        <div className="progress-box__number count-text">95%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-skills-one__progress progress-box">
                                <h4 className="progress-box__title">Quality of Meat</h4>
                                <div className="progress-box__bar">
                                    <div className="progress-box__bar__inner count-bar counted" data-percent="90%" style={{ width: '90%' }}>
                                        <div className="progress-box__number count-text">90%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-skills-one__progress progress-box">
                                <h4 className="progress-box__title">Quality of Meat</h4>
                                <div className="progress-box__bar">
                                    <div className="progress-box__bar__inner count-bar counted" data-percent="85%" style={{ width: '85%' }}>
                                        <div className="progress-box__number count-text">85%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-skills-one__progress progress-box">
                                <h4 className="progress-box__title">Quality of Meat</h4>
                                <div className="progress-box__bar">
                                    <div className="progress-box__bar__inner count-bar counted" data-percent="80%" style={{ width: '80%' }}>
                                        <div className="progress-box__number count-text">80%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-skills-one__description wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                            <p className="team-skills-one__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="details-form details-form--team section-space-bottom">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <div className="details-form__content ">
                        <div className="sec-title @@extraClassName">
                            <h2 className="sec-title__title">Get in touch</h2>
                        </div>
                        <p className="details-form__text">Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <form className="form-one details-form__form contact-form-validated" action="assets/inc/sendemail.php" novalidate="novalidate">
                        <div className="form-one__group form-one__group--grid">
                            <div className="form-one__control wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                                <input type="text" name="name" placeholder="Your Name" className="w-full p-2" />
                            </div>
                            <div className="form-one__control wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="50ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '50ms', animationName: 'fadeInUp' }}>
                                <input type="email" name="email" placeholder="Your Email" className="w-full p-2" />
                            </div>
                            <div className="form-one__control form-one__control--full wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <textarea name="message" placeholder="Write Message . . ." className="w-full p-2"></textarea>
                            </div>
                            <div className="form-one__control form-one__control--full wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="150ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '150ms', animationName: 'fadeInUp' }}>
                                <button type="submit" className="boskery-btn">
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__text">Send message</span>
                                    <i className="icon-meat-3"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="result"></div>
                </div>
            </section>
        </>
    );
}
