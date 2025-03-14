// "use client";

import Image from "next/image";

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Aboutme() {
  return (
    <section className="about-one section-space-top bg-white py-16" id="about">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-y-16">
          <div className="lg:w-1/2 wow fadeInLeft" data-wow-duration="1500ms">
            <div className="about-one__image relative">
              <div className="about-one__image__inner">
                <h3 className="about-one__image__text">since 1996</h3>
                <Image
                  width={400}
                  height={610}
                  src="/assets/images/about/about-1-1.jpg"
                  alt="about image"
                  className="w-full h-auto"
                />
                <a
                  href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                  className="video-button video-popup"
                >
                  <span className="icon-play"></span>
                  <i className="video-button__ripple"></i>
                </a>
                <div className="about-one__image__border"></div>
              </div>
              <Image
                src="/assets/images/shapes/about-shape-1-1.png"
                width={293}
                height={439}
                alt="about shape"
                className="about-one__image__shape"
              />
            </div>
          </div>
          <div className="lg:w-1/2 wow fadeInRight" data-wow-duration="1500ms">
            <div className="about-one__content pl-[30px]">
              <div className="sec-title">
                <Image
                  src="/assets/images/shapes/sec-title-s-1.png"
                  width={72}
                  height={21}
                  alt="about boskery meat shop"
                  className="sec-title__img"
                />
                <h6 className=" text-[#A42125] uppercase font-bold tracking-[2px] font-boskery_heading" >about boskery meat shop</h6>
                <h2 className="text-[2rem] m-0 font-bold uppercase tracking-[-1.1px] leading-[1.181]" >We Provide Best Meat</h2>
              </div>
              <p className="about-one__text">
                We are trusted by many clients from all over the country. Cras
                non dui id ex mattis vehicula. Nullam posuere ligula non libero
                mollis, non ornare sapien rutrum. Quisque vitae risus venenatis,
                dignissim felis id, vulputate nisl. Praesent sed felis aliquam,
                ullamcorper tellus.
              </p>
              <div className="about-one__inner">
                <h5 className="about-one__info-title text-lg font-semibold">
                  Raw Meat Production by Leading Farm
                </h5>
                <ul className="about-one__info list-disc list-inside pl-5" style={{ letterSpacing : '-1px'}}>
                  <li style={{fontSize: '14px'}}>
                    <span className="icon-check-mark"></span>
                    Premium Cuts
                  </li> 
                  <li  style={{fontSize: '14px'}}>
                    <span className="icon-check-mark"></span>
                    Quality Sourcing
                  </li>
                  <li style={{fontSize: '14px'}}>
                    <span className="icon-check-mark"></span>
                    Custom Butchering
                  </li>
                  <li style={{fontSize: '14px'}}>
                    <span className="icon-check-mark"></span>
                    Freshness
                  </li>
                  <li style={{fontSize: '14px'}}>
                    <span className="icon-check-mark"></span>
                    Best Reviews
                  </li>
                  <li style={{fontSize: '14px'}}>
                    <span className="icon-check-mark"></span>
                    100% Organic
                  </li>
                </ul>
              </div>
              <div className="about-one__bottom mt-6">
                <a
                  href="page/about"
                  className="boskery-btn inline-flex items-center bg-primary text-white py-2 px-4 rounded"
                >
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__text">know about us</span>
                  <i className="icon-meat-3 ml-2"></i>
                </a>
                <div className="contact__info mt-4">
                  <div className="contact__info__inner flex items-center">
                    <div className="contact__info__icon mr-4">
                      <span className="icon-telephone"></span>
                    </div>
                    <div className="contact__info__right">
                      <h4 className="contact__info__title text-lg font-semibold">
                        Call for Delivery
                      </h4>
                      <a
                        href="tel:+92(8800)68900"
                        className="contact__info__number text-blue-500"
                      >
                        +92 (8800) 68900
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-one__shape">
        <Image
          src="/assets/images/shapes/about-shape-1-2.png"
          alt="about shape"
          width={418}
          height={223}
          className="about-one__shape__one"
        />
        <Image
          src="/assets/images/shapes/about-shape-1-3.png"
          alt="about shape"
          width={674}
          height={550}
          className="about-one__shape__two"
        />
      </div>
    </section>
  );
}

export default Aboutme;
