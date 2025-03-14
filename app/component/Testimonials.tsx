'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Pagination } from 'swiper/modules';

// Dữ liệu testimonials
interface Testimonial {
  name: string;
  designation: string;
  text: string;
  image: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Whitney R. Watts',
    designation: 'Marketing Manager',
    text: 'Posuere luctus orci. Donec vitae mattis quam vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet including.',
    image: '/assets/images/testimonials/testimonial-1-1.jpg',
    rating: 5,
  },
  {
    name: 'Kenneth S.',
    designation: 'Marketing Manager',
    text: 'Posuere luctus orci. Donec vitae mattis quam vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet including.',
    image: '/assets/images/testimonials/testimonial-1-2.jpg',
    rating: 5,
  },
];

// Cài đặt cho Swiper
const settings = {
  spaceBetween: 30,
  slidesPerView: 2,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  modules: [Autoplay, Pagination],
};

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-one section-space-two py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="col-lg-7 col-md-9">
          <div className="testimonials-one__content col-lg-7 col-md-9 mb-8">
            <div className="sec-title flex justify-between items-center">
              <div>
                <Image
                  src="/assets/images/shapes/sec-title-s-1.png"
                  alt="WHAT CLIENTS SAYS"
                  width={72}
                  height={21}
                  className="sec-title__img"
                />
                <h6 className="text-lg font-semibold text-primary sec-title__tagline">
                  WHAT CLIENTS SAYS
                </h6>
                <h2 className="text-3xl font-bold text-gray-800 sec-title__title">
                  what they’re talking <br /> about boskery
                </h2>
              </div>
              <div className="flex items-center">
                <button className="flex justify-center items-center w-[50px] h-[50px] bg-[#7A7373] text-white rounded-full mr-2 transition-colors duration-300 hover:bg-[#A42125]">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="flex justify-center items-center w-[50px] h-[50px] bg-[#7A7373] text-white rounded-full transition-colors duration-300 hover:bg-[#A42125]">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sử dụng Swiper thay vì Slider */}
        <Swiper {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card mx-5">
                <div
                  className="testimonial-card__bg"
                  style={{ backgroundImage: 'url(/assets/images/shapes/testimonial-card-bg-1-1.png)' }}
                ></div>
                <div className="testimonial-card__content">
                  <div className="boskery-ratings">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="icon-star"></span>
                    ))}
                  </div>
                  <p className="testimonial-card__text">{testimonial.text}</p>
                  <div className="testimonial-card__identity">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="testimonial-card__image"
                    />
                    <div className="testimonial-card__identity__inner">
                      <h4 className="testimonial-card__name">{testimonial.name}</h4>
                      <span className="testimonial-card__designation">{testimonial.designation}</span>
                    </div>
                  </div>
                  <div className="testimonial-card__quotes">
                    <span className="icon-quotes"></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonials-one__shape">
          <Image
            src="/assets/images/shapes/testimonial-shape-1-1.png"
            width={100}
            height={100}
            alt="testimonial shape"
            className="testimonials-one__shape__one"
          />
          <Image
            width={100}
            height={100}
            src="/assets/images/shapes/testimonial-shape-1-2.png"
            alt="testimonial shape"
            className="testimonials-one__shape__two"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
