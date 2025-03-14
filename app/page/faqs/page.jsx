"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle accordion
    };

    return (
        <div className="page-wrapper">
            <section className="page-header relative" style={{ height: '320px' }}>
                <div
                    className="page-header__bg absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}
                ></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title text-[55px] font-bold text-white text-center">Faqs</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                        <a href="/page/faqs" className="hover:underline"> <span>Faqs</span></a>
                        </li>
                    </ul>
                </div>
            </section>
            {/* FAQ Page Search Section */}
            <section className="faq-page-search section-space-top">
                <div className="container mx-auto">
                    <div className="faq-page-search__inner wow fadeInUp" data-wow-duration="1500ms">
                        <div
                            className="faq-page-search__bg"
                            style={{ backgroundImage: 'url(assets/images/shapes/faq-search-bg-1.png)' }}
                        ></div>
                        <Image src="/assets/images/shapes/faq-search-meat.png" width={145} height={175} alt="meat" className="faq-page-search__meat" />
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="faq-page-search__content sec-title">
                                    <h2 className="faq-page-search__title sec-title__title">
                                        Welcome Looking <br /> for Help?
                                    </h2>
                                    <p className="faq-page-search__text">
                                        Publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                    </p>
                                    <form action="#" className="faq-page-search__form">
                                        <input type="text" id="error-search" placeholder="Search Here" className="form-control" />
                                        <button type="submit" className="faq-page-search__form__btn" aria-label="Search submit">
                                            <span className="icon-search"></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Page Content Section */}
            <div className="faq-page section-space-bottom py-12">
                <div className="container mx-auto flex flex-wrap gap-6">

                    {/* Box 1 - Contact Section */}
                    <div className="w-full lg:w-[47%]">
                        <div className="contact relative p-6 bg-gray-50 rounded-lg">
                            <div
                                className="contact__bg absolute inset-0 bg-cover rounded-lg"
                                style={{ backgroundImage: "url(/assets/images/resources/faq-contact-info-bg.jpg)" }}
                            ></div>
                            <div className="contact__content relative z-10">
                                <h3 className="contact__title text-2xl font-bold text-gray-800">
                                    You have any questions? <br />
                                    Contact us!
                                </h3>
                                <div className="faq-page__bottom mt-4">
                                    <Link href="/page/contactus" className="boskery-btn inline-flex items-center justify-center bg-red-500 text-white">
                                        Contact Us
                                        <i className="icon-meat-3 ml-2"></i>
                                    </Link>
                                    <div className="contact__info">
                                        <div className="contact__info__inner flex items-center">
                                            <div className="contact__info__icon bg-gray-200 p-3 rounded-full">
                                                <span className="icon-telephone"></span>
                                            </div>
                                            <div className="contact__info__right">
                                                <h4 className="contact__info__title text-lg font-bold">Call for Delivery</h4>
                                                <a href="tel:+92(8800)68900" className="contact__info__number text-blue-500">+92 (8800) 68900</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Box 2 - FAQ Accordion Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="faq-page__accordion">
                            <div className="faq-accordion boskery-accordion" data-grp-name="boskery-accordion">
                                {/* Accordion Item 1 */}
                                <div className={`accordion wow fadeInUp animated ${activeIndex === 0 ? 'active' : ''}`}
                                    data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                                    <div className="accordion-title" onClick={() => toggleAccordion(0)}>
                                        <h4>
                                            What is a boskery meat shop?
                                            <span className={`accordion-title__icon ${activeIndex === 0 ? 'open' : ''}`}></span>
                                        </h4>
                                    </div>
                                    <div className="accordion-content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                                        <div className="inner">
                                            <div
                                                className="inner__bg"
                                                style={{ backgroundImage: 'url(/assets/images/resources/faq-1-1.jpg)' }}
                                            ></div>
                                            <p>
                                                A boskery meat shop specializes in selling fresh cuts of meat. However, some shops may also offer frozen or preserved meats.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 2 */}
                                <div className={`accordion wow fadeInUp animated ${activeIndex === 1 ? 'active' : ''}`}
                                    data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                                    <div className="accordion-title" onClick={() => toggleAccordion(1)}>
                                        <h4>
                                            Is meat from a meat shop fresh?
                                            <span className={`accordion-title__icon ${activeIndex === 1 ? 'open' : ''}`}></span>

                                        </h4>
                                    </div>
                                    <div className="accordion-content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                                        <div className="inner">
                                            <div
                                                className="inner__bg"
                                                style={{ backgroundImage: 'url(/assets/images/resources/faq-1-1.jpg)' }}
                                            ></div>
                                            <p>
                                                Yes, meat shops often specialize in selling fresh cuts of meat. However, some meat shops may also offer frozen or preserved meats.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 3 */}
                                <div className={`accordion wow fadeInUp animated ${activeIndex === 2 ? 'active' : ''}`}
                                    data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                                    <div className="accordion-title" onClick={() => toggleAccordion(2)}>
                                        <h4>
                                            Is meat from a meat shop fresh?
                                            <span className={`accordion-title__icon ${activeIndex === 2 ? 'open' : ''}`}></span>
                                        </h4>
                                    </div>
                                    <div className="accordion-content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                                        <div className="inner">
                                            <div
                                                className="inner__bg"
                                                style={{ backgroundImage: 'url(/assets/images/resources/faq-1-1.jpg)' }}
                                            ></div>
                                            <p>
                                                Yes, meat shops often specialize in selling fresh cuts of meat. However, some meat shops may also offer frozen or preserved meats.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 4 */}
                                <div className={`accordion wow fadeInUp animated ${activeIndex === 3 ? 'active' : ''}`}
                                    data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                                    <div className="accordion-title" onClick={() => toggleAccordion(3)}>
                                        <h4>
                                            Is meat from a meat shop fresh?
                                            <span className={`accordion-title__icon ${activeIndex === 3 ? 'open' : ''}`}></span>
                                        </h4>
                                    </div>
                                    <div className="accordion-content" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
                                        <div className="inner">
                                            <div
                                                className="inner__bg"
                                                style={{ backgroundImage: 'url(/assets/images/resources/faq-1-1.jpg)' }}
                                            ></div>
                                            <p>
                                                Yes, meat shops often specialize in selling fresh cuts of meat. However, some meat shops may also offer frozen or preserved meats.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordion Item 5 */}
                                <div className={`accordion wow fadeInUp animated ${activeIndex === 4 ? 'active' : ''}`}
                                    data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                                    <div className="accordion-title" onClick={() => toggleAccordion(4)}>
                                        <h4>
                                            Is meat from a meat shop fresh?
                                            <span className={`accordion-title__icon ${activeIndex === 4 ? 'open' : ''}`}></span>
                                        </h4>
                                    </div>
                                    <div className="accordion-content" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
                                        <div className="inner">
                                            <div
                                                className="inner__bg"
                                                style={{ backgroundImage: 'url(/assets/images/resources/faq-1-1.jpg)' }}
                                            ></div>
                                            <p>
                                                Yes, meat shops often specialize in selling fresh cuts of meat. However, some meat shops may also offer frozen or preserved meats.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Accordion Item 6 */}
                                <div className={`accordion wow fadeInUp animated ${activeIndex === 5 ? 'active' : ''}`}
                                    data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                                    <div className="accordion-title" onClick={() => toggleAccordion(5)}>
                                        <h4>
                                            Is meat from a meat shop fresh?
                                            <span className={`accordion-title__icon ${activeIndex === 5 ? 'open' : ''}`}></span>
                                        </h4>
                                    </div>
                                    <div className="accordion-content" style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
                                        <div className="inner">
                                            <div
                                                className="inner__bg"
                                                style={{ backgroundImage: 'url(/assets/images/resources/faq-1-1.jpg)' }}
                                            ></div>
                                            <p>
                                                Yes, meat shops often specialize in selling fresh cuts of meat. However, some meat shops may also offer frozen or preserved meats.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Faqs;
