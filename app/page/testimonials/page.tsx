'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

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
  {
    name: 'Whitney R. Watts',
    designation: 'Marketing Manager',
    text: 'Posuere luctus orci. Donec vitae mattis quam vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet including.',
    image: '/assets/images/testimonials/testimonial-1-1.jpg',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <section className="page-header relative" style={{ height: '320px' }}>
        <div
          className="page-header__bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}
        ></div>

        <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
          <h2 className="page-header__title text-[55px] font-bold text-white text-center">Testimonials</h2>
          <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <span>Testimonials</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="testimonials-one section-space-two py-12 bg-gray-100">
        <div className="container mx-auto lg:h-[400px] xl:h-[500px] dt:h-[300px]">
          <Swiper
            slidesPerView={2} // Hiển thị 2 testimonials trên màn hình lớn
            spaceBetween={30}
            autoplay={{ delay: 4500 }}
            pagination={{ clickable: true,  el: '.swiper-pagination',}}
            breakpoints={{
              1920: { slidesPerView: 2 }, // Hiện thị 2 testimonials trên màn hình lớn
              1024: { slidesPerView: 2 }, // Hiển thị 2 testimonials trên màn hình lớn
              768: { slidesPerView: 1 },  // Hiển thị 1 testimonial trên màn hình vừa
              480: { slidesPerView: 1 },  // Hiển thị 1 testimonial trên màn hình nhỏ
              320: { slidesPerView: 1 },  // Hiện thị 1 testimonial trên màn hình nhỏ
            }}
            
            modules={[Autoplay, Pagination]}
          >
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
          <div className="swiper-pagination pt-[60px]"></div> {/* Custom pagination class */}

        </div>
      </section>
    </>
  );
};

export default Testimonials;
