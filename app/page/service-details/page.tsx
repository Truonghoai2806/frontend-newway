// pages/service-details.tsx
'use client'
import Image from "next/image";
import { useState } from "react";

const ServiceDetails = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (

    
    <>
    
<section className="page-header relative" style={{ height: '320px' }}>
        <div
          className="page-header__bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')",
          }}
        ></div>

        <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
          <h2 className="page-header__title text-[55px] font-bold text-white text-center">CUSTOM CUTTING</h2>
          <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li> 
              <span>SERVICE </span>
            </li>
            <li>
              <span>CUSTOM CUTTING</span>
            </li>
          </ul>
        </div>
      </section>
      
    <section className="service-details section-space  px-4 ">

      <div className="container mx-auto px-4 lg:flex-nowrap " style={{paddingBottom: "120px"}}>
        <div className="row gutter-y-60 flex flex-wrap">
          <div className="col-lg-8 w-full lg:w-2/3 pr-8 lg:pr-8 mb-8 lg:mb-0">
            <div className="service-details__content">
              <div className="service-details__content__inner-1">
                <div className="service-details__thumbnail mb-6">
                  <Image
                    width={700}
                    height={500}
                    src="/assets/images/services/service-d-1.jpg"
                    alt="Custom Cutting"
                    className="w-full h-auto lg:w-1/3"
                  />
                </div>
                <h3 className="service-details__title text-2xl font-semibold mb-4">Custom Cutting</h3>
                <p className="service-details__text mb-4">
                  Butcher shops primarily sell a variety of meats, including
                  beef, pork, lamb, chicken, turkey, and more. They may offer
                  different cuts and preparations to meet customer preferences.
                  Many butcher shops offer custom cutting services, where
                  customers can request specific cuts of meat tailored to their
                  needs.
                </p>
                <p className="service-details__text mb-4">
                  Butchers can help customers with meat preparation, such as
                  deboning, trimming, and tying roasts. They can also provide
                  advice on cooking techniques and recipes.
                </p>
              </div>

              <div className="service-details__content__inner-2">
                <h3 className="service-details__title text-2xl font-semibold mb-4">
                  What We Do in the Butcher Shop
                </h3>
                <p className="service-details__text mb-4">
                  Butcher shops primarily sell a variety of meats, including
                  beef, pork, lamb, chicken, turkey, and more. They may offer
                  different cuts and preparations to meet customer preferences.
                  Many butcher shops offer custom cutting services where
                  customers can request specific cuts of meat.
                </p>
              </div>

              <div className="service-details__lists flex mb-8">
                <ul className="service-details__list mb-4 space-y-2">
                  <li className="flex items-start space-x-2">
                    <i className="icon-check text-green-500"></i>
                    <span>Butchers are skilled in cutting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="icon-check text-green-500"></i>
                    <span>Butchers trim excess fat</span>
                  </li>
                </ul>
                <ul className="service-details__list mb-4 space-y-2">
                  <li className="flex items-start space-x-2">
                    <i className="icon-check text-green-500"></i>
                    <span>Shop offers ground meat</span>
                  </li>
                  <li className=" flex items-start space-x-2">
                    <i className="icon-check text-green-500"></i>
                    <span>Marinating and seasoning</span>
                  </li>
                </ul>
                <ul className="service-details__list space-y-2">
                  <li className="flex items-start space-x-2">
                    <i className="icon-check text-green-500"></i>
                    <span>Butchers carefully display</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="icon-check text-green-500"></i>
                    <span>Customer service</span>
                  </li>
                </ul>
              </div>

              <div className="service-details__inner mb-8">
                <div className="row gutter-y-30 flex grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-md-6">
                    <div className="service-details__inner__image">
                      <Image
                        width={700}
                        height={500}
                        src="/assets/images/services/service-d-1-1.jpg"
                        alt="service details"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="service-details__inner__image">
                      <Image
                        width={700}
                        height={500}
                        src="/assets/images/services/service-d-1-2.jpg"
                        alt="service details"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-details__content__inner-3 mb-8">
                <h3 className="service-details__title text-2xl font-semibold mb-4">Meat Trimming</h3>
                <p className="service-details__text mb-4">
                  Butcher shops primarily sell a variety of meats, including
                  beef, pork, lamb, chicken, turkey, and more. They may offer
                  different cuts and preparations to meet customer preferences.
                </p>
              </div>

              <div className="service-details__faq">
                <h3 className="service-detais__title service-details__faq__title text-2xl font-semibold mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="faq-accordion boskery-accordion">
                  <div
                    className={`accordion mb-4 ${activeFaq === 1 ? "active" : ""
                      }`}
                  >
                    <div
                      className="accordion-title cursor-pointer"
                      onClick={() => toggleFaq(1)}
                    >
                      <h4 className=" text-xl font-medium">
                        What is a boskery meat shop?
                        <span className="accordion-title__icon"></span>
                      </h4>
                    </div>
                    <div
                      className={`accordion-content ${activeFaq === 1 ? "block" : "hidden"
                        }`}
                    >
                      <div className="inner">
                        <div className="inner__bg">
                          <Image
                            width={700}
                            height={500}
                            src="/assets/images/resources/faq-1-1.jpg"
                            alt="service-details"
                            className="w-full h-auto"
                          />

                          <p>
                            Boskery meat shop specializes in selling fresh cuts of
                            meat and other services such as custom cutting.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`accordion mb-4 ${activeFaq === 2 ? "active" : ""
                      }`}
                  >
                    <div
                      className="accordion-title cursor-pointer"
                      onClick={() => toggleFaq(2)}
                    >
                      <h4 className=" text-xl font-medium">
                        Is meat from a meat shop fresh?
                        <span className="accordion-title__icon"></span>
                      </h4>
                    </div>
                    <div
                      className={`accordion-content ${activeFaq === 2 ? "block" : "hidden"
                        }`}
                    >

                      <div className="inner">
                        <div className="inner__bg">
                          <Image
                            width={700}
                            height={500}
                            src="/assets/images/resources/faq-1-1.jpg"
                            alt="service-details"
                            className="w-full h-auto"
                          />
                          <p>
                            Yes, meat shops specialize in selling fresh cuts of
                            meat, although some may also offer frozen options.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div
                    className={`accordion mb-4 ${activeFaq === 3 ? "active" : ""
                      }`}
                  >
                    <div
                      className="accordion-title cursor-pointer"
                      onClick={() => toggleFaq(3)}
                    >
                      <h4 className="text-xl font-medium">
                        Do butcher shops sell other products besides meat?
                        <span className="accordion-title__icon"></span>
                      </h4>
                    </div>
                    <div
                      className={`accordion-content ${activeFaq === 3 ? "block" : "hidden"
                        }`}
                    >
                      <div className="inner">
                        <div className="inner__bg">
                          <Image
                            width={700}
                            height={500}
                            src="/assets/images/resources/faq-1-1.jpg"
                            alt="service-details"
                            className="w-full h-auto"
                          />
                          <p>
                            Yes, some butcher shops may offer other items such as
                            marinades, sauces, and prepared meals.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div
                    className={`accordion ${activeFaq === 4 ? "active" : ""
                      }`}
                  >
                    <div
                      className="accordion-title cursor-pointer"
                      onClick={() => toggleFaq(4)}
                    >
                      <h4 className="text-xl font-medium">
                        Can I request custom cuts at a butcher shop?
                        <span className="accordion-title__icon"></span>
                      </h4>
                    </div>
                    <div
                      className={`accordion-content ${activeFaq === 4 ? "block" : "hidden"
                        }`}
                    >
                      <div className="inner">
                        <div className="inner__bg">
                          <Image
                            width={700}
                            height={500}
                            src="/assets/images/resources/faq-1-1.jpg"
                            alt="service-details"
                            className="w-full h-auto"
                          />
                          <p>
                            Yes, most butcher shops allow you to request custom
                            cuts based on your needs.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 w-full  lg:w-1/3">
            <div className="service-sidebar">
              <div className="service-sidebar__single mb-8">
                <ul className="list-unstyled service-sidebar__nav space-y-4">
                  <li className="current relative">
                    <div className="service-sidebar__nav__bg"> </div>
                    <a href="/page/service-details">
                      Custom Cutting
                    </a>
                  </li>
                  <li>
                    <div className="service-sidebar__nav__bg"> </div>
                    <a href="/page/service-details" >
                      Meat Preparation
                    </a>
                  </li>
                  <li >
                    <div className="service-sidebar__nav__bg"></div>
                    <a href="/page/service-details" >
                      Meat Packaging
                    </a>
                  </li>
                  <li>
                    <div className="service-sidebar__nav__bg"></div>
                    <a href="/page/service-details">Online Ordering </a>
                  </li>
                  <li>
                    <div className="service-sidebar__nav__bg"> </div>
                    <a href="/page/service-details"> Beef Tenderloin</a>
                  </li>
                  <li>
                    <div className="service-sidebar__nav__bg"></div>
                    <a href="/page/service-details">Specialty Product</a>
                  </li>
                </ul>
              </div>

              <div className="service-sidebar__single wow fadeInRight animated ">
                <div className="contact">
                  <div className="contact__bg"  style={{ backgroundImage: "url(/assets/images/resources/service-sidebar-info-bg-1.jpg)" }}>

                    {/* <Image
                      width={700}
                        height={500}
                      src="/assets/images/resources/service-sidebar-info-bg-1.jpg"
                      alt="resources"
                      className="w-full h-auto "
                    /> */}
                  
                  </div>
                  <div className="contact__content flex">
                    <h3 className="contact__title text-xl font-semibold mb-4">Call for Direct Customer Service</h3>
                    <div className="contact__info flex items-center">
                      <div className="contact__info__inner flex">
                        <div className="contact__info__icon flex">
                          <span className="icon-telephone "></span>
                        </div>
                        <div className="contact__info__right">

                          <h4 className="contact__info__title font-medium">Call for Delivery</h4>
                          <a href="tel:+92(8800)68900" className="contact__info__number ">
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
        </div>
      </div>



      <section className="details-form_content details-form--service py-16" style={{marginTop: "20px"}}>
        <div className="container mx-auto">
          <div className="details-form__content">
            <div className="sec-title">
              <h2 className="sec-title__title text-3xl font-semibold mb-4">
                Get in touch
              </h2>
            </div>
            <p className="details-form__text mb-4">
              Your email address will not be published. Required fields are marked *
            </p>
          </div>

          <form
            className="form-one details-form__form contact-form-validated"
            action="assets/inc/sendemail.php"
            method="POST"
            noValidate
          >
            <div className="form-one__group grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-one__control">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="form-one__control">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="form-one__control form-one__control--full wow fadeInUp  col-span-2">
                <textarea
                  name="message"
                  placeholder="Write Message..."
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="form-one__control  col-span-2 ">
                <button
                  type="submit"
                  className="boskery-btn"
                >
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>
                  <span className="boskery-btn__hover"></span>

                  <span className="boskery-btn__text"></span>
                  Send message
                  <i className="ml-2 icon-meat-3"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </section>
</>
  );
};

export default ServiceDetails;

