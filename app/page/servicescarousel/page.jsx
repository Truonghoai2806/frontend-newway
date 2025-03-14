"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const ServiceCarousel = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://api-core.dsp.one/api/auth/category");
        const data = await response.json();
        setServices(data.data || []); // Đảm bảo có giá trị mặc định
        console.log("Fetched services:", data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        />
        <div className="container mx-auto">
          <h2 className="page-header__title text-3xl font-bold text-center py-8">
            Services Carousel
          </h2>
          <ul className="boskery-breadcrumb list-unstyled flex justify-center space-x-4">
            <li>
              <a href="/" className="text-blue-500">
                Home
              </a>
            </li>
            <li>
              <span>Services</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="product-page section-space">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{ delay: 1500 }}
                pagination={{ clickable: true, el: ".swiper-pagination" }}
                breakpoints={{
                  1920: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  480: { slidesPerView: 1 },
                  300: { slidesPerView: 1 },
                }}
                modules={[Autoplay, Pagination]}
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id}>
                    <div className="flex justify-center item">
                      <div
                        className="item wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="00ms"
                      >
                        <div className="service-card">
                          <div className="service-card__content">
                            <div className="service-card__image">
                              <Image
                                width={500}
                                height={500}
                                src={
                                  service.image?.path
                                    ? `https://api-core.dsp.one/api/auth/file/${service.image.path}`
                                    : "/assets/images/services/service-1-2.jpg"
                                }
                                alt={service.name || "Không có thông tin tên dịch vụ"}
                              />
                              <div className="service-card__icon">
                                <span className="icon-butchering" />
                              </div>
                            </div>
                            <h3 className="service-card__title">
                              <a href={`/page/service-details/${service.slug}`}>
                                {service.name || "Không có thông tin tên dịch vụ"}
                              </a>
                            </h3>
                            <p className="service-card__text">
                              Danh mục nổi bật:{" "}
                              {service.is_outstanding ? "Có" : "Không"}
                            </p>
                          </div>
                          <a
                            href={`/page/service-details/${service.slug}`}
                            className="service-card__btn"
                          >
                            Chi tiết dịch vụ <span className="icon-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                className="swiper-pagination mt-[10px]"
                style={{
                  position: "relative",
                  marginTop: "100px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <style>
                  {`
                    .swiper-pagination-bullet {
                      background-color: gray !important;
                      opacity: 1;
                    }
                    .swiper-pagination-bullet-active {
                      background-color: red !important;
                      border: 1px solid black;
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCarousel;
