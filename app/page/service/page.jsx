'use client'

import Image from 'next/image';

const ServiceCarousel = () => {
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
            services carousel
          </h2>
          <ul className="boskery-breadcrumb list-unstyled flex justify-center space-x-4">
            <li>
              <a href="/" className="text-blue-500">
                Home
              </a>
            </li>
            <li>
              <span>services</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="product-page section-space">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                <div className="service-card">
                  <div className="service-card__content">
                    <div className="service-card__image">
                      <Image
                        width={500}
                        height={500}
                        src="/assets/images/services/service-1-1.jpg"
                        alt="Custom Cutting"
                      />
                      <div className="service-card__icon">
                        <span className="icon-butchering" />
                      </div>
                    </div>
                    <h3 className="service-card__title">
                      <a href="/page/service-details">Custom Cutting</a>
                    </h3>
                    <p className="service-card__text">
                      Butcher shops primarily sell a variety of meats, including beef, pork,
                      lamb, chicken, turkey, and more. They may offer
                    </p>
                  </div>
                  <a href="/page/service-details" className="service-card__btn">
                    service details <span className="icon-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCarousel;
