import Image from "next/image";
import React from "react";

function ContactUs() {
  return (
    <div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        />
        <div className="container mx-auto">
          <h2 className="page-header__title">Contact Us</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
            <a href="/page/contactus" className="hover:underline"><span>Contact Us</span></a>
            </li>
          </ul>
        </div>
      </section>
      <section className="contact-page section-space-top">
        <div className="container mx-auto">
          <div className="contact-page__wrapper">
            <div className="contact-page__content">
              <div className="contact-page__sec-title">
                <h2 className="contact-page__title">Get In Touch</h2>

                <p className="contact-page__text">
                  consectetur adipiscing elit. Phasellus et metus augue. Mauris
                  ut libero eget erat scelerisque vehicula. Phasellus nec
                  blandit metus.
                </p>
              </div>

              <form
                action="assets/inc/sendemail.php"
                className="contact-page__form contact-form-validated form-one"
                noValidate="novalidate"
              >
                <div className="form-one__group">
                  <div
                    className="form-one__control wow fadeInUp animated"
                    data-wow-duration="1500ms"
                    data-wow-delay="00ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "0ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <input type="text" name="name" placeholder="Your Name" />
                  </div>

                  <div
                    className="form-one__control wow fadeInUp animated"
                    data-wow-duration="1500ms"
                    data-wow-delay="50ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "50ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <input type="email" name="email" placeholder="Your Email" />
                  </div>

                  <div
                    className="form-one__control form-one__control--full wow fadeInUp animated"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "100ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <textarea
                      name="message"
                      placeholder="Write Message . ."
                      defaultValue={""}
                    />
                  </div>

                  <div
                    className="form-one__control form-one__control--full wow fadeInUp animated"
                    data-wow-duration="1500ms"
                    data-wow-delay="150ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "150ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <button type="submit" className="boskery-btn">
                      <span className="boskery-btn__hover" />
                      <span className="boskery-btn__hover" />
                      <span className="boskery-btn__hover" />
                      <span className="boskery-btn__hover" />
                      <span className="boskery-btn__hover" />
                      <span className="boskery-btn__hover" />
                      <span className="boskery-btn__text">send message</span>
                      <i className="icon-meat-3" />
                    </button>
                  </div>
                </div>
              </form>

              <div className="result" />
            </div>

            <div
              className="contact-page__image wow fadeInRight animated"
              data-wow-duration="1500ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationName: "fadeInRight",
              }}
            >
              <Image
              width={438}
              height={512}
                src="/assets/images/resources/contact-1-1.jpg"
                alt="contact"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="contact-info section-space-bottom">
        <div
          className="contact-info__bg boskery-jarallax"
          data-jarallax=""
          data-speed="0.3"
          style={{ backgroundImage: "none", zIndex: 0 }}
          data-jarallax-original-styles="background-image: url(assets/images/backgrounds/contact-bg.jpg);"
        >
          <div
            id="jarallax-container-0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              zIndex: -100,
            }}
          >
            <div
              style={{
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                  'url("https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/boskery/files/assets/images/backgrounds/contact-bg.jpg")',
                position: "fixed",
                top: 0,
                left: 0,
                width: 1903,
                height: "731.409px",
                overflow: "hidden",
                pointerEvents: "none",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform, opacity",
                marginTop: "-43.2047px",
                transform: "translate3d(0px, 28.6078px, 0px)",
              }}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Grid Item */}
            <div
              className="wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "0ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="contact-info__contact">
                <div
                  className="contact-info__contact__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/contact-bg-1-1.png)",
                  }}
                />
                <div className="contact-info__contact__content">
                  <div className="contact-info__top">
                    <h4 className="contact-info__title">
                      You’re always welcome to visit us
                    </h4>
                    <p className="contact-info__text">
                      Our friendly staff will be happy to assist you with any
                      questions or concerns you may have.
                    </p>
                  </div>
                  <div className="contact-info__contact-list">
                    {/* Contact Info List Items */}
                    <div className="contact-info__contact-list__item">
                      <span className="contact-info__contact-list__icon icon-phone-call justify-center items-center" style={{display: "flex"}} />
                      <div className="contact-info__contact-list__content">
                        <span className="contact-info__contact-list__title">
                          Call Now
                        </span>
                        <a
                          href="tel:+9156980036420"
                          className="contact-info__contact-list__link"
                        >
                          +91 5698 0036 420
                        </a>
                      </div>
                    </div>
                    <div className="contact-info__contact-list__item">
                      <span className="contact-info__contact-list__icon icon-paper-plane justify-center items-center"  style={{display: "flex"}} />
                      <div className="contact-info__contact-list__content">
                        <span className="contact-info__contact-list__title">
                          Email
                        </span>
                        <a
                          href="mailto:info@Boskery.com"
                          className="contact-info__contact-list__link"
                        >
                          info@Boskery.com
                        </a>
                      </div>
                    </div>
                    <div className="contact-info__contact-list__item">
                      <span className="contact-info__contact-list__icon icon-maps-and-flags justify-center items-center"  style={{display: "flex"}} />
                      <div className="contact-info__contact-list__content">
                        <span className="contact-info__contact-list__title">
                          Address
                        </span>
                        <a
                          href="https://maps.app.goo.gl/BGEEPPnogKLavEVV8"
                          className="contact-info__contact-list__link"
                        >
                          26 Manor St, Braintree UK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Grid Item */}
            <div
              className="wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "200ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="contact-info__business-hours">
                <div
                  className="contact-info__business-hours__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/contact-bg-1-2.png)",
                  }}
                />
                <div className="contact-info__business-hours__content">
                  <div className="contact-info__top contact-info__top--business-hours">
                    <h4 className="contact-info__title contact-info__title--business-hours">
                      Our business hours
                    </h4>
                    <p className="contact-info__text contact-info__text--business-hours">
                      Our friendly staff will be happy to assist you with any
                      questions or concerns you may have.
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table contact-info__business-hours__table">
                      <tbody>
                        <tr>
                          <td className="table__left-data">
                            <i className="icon-check" /> Monday
                          </td>
                          <td className="table__border">
                            <div className="table__border__line" />
                          </td>
                          <td className="table__right-data">
                            10:00AM - 07:00PM
                          </td>
                        </tr>
                        <tr>
                          <td className="table__left-data">
                            <i className="icon-check" /> Tuesday
                          </td>
                          <td className="table__border">
                            <div className="table__border__line" />
                          </td>
                          <td className="table__right-data">
                            10:00AM - 07:00PM
                          </td>
                        </tr>
                        <tr>
                          <td className="table__left-data">
                            <i className="icon-check" /> Wednesday
                          </td>
                          <td className="table__border">
                            <div className="table__border__line" />
                          </td>
                          <td className="table__right-data">
                            10:00AM - 07:00PM
                          </td>
                        </tr>
                        <tr>
                          <td className="table__left-data">
                            <i className="icon-check" /> Thursday
                          </td>
                          <td className="table__border">
                            <div className="table__border__line" />
                          </td>
                          <td className="table__right-data">
                            10:00AM - 07:00PM
                          </td>
                        </tr>
                        <tr>
                          <td className="table__left-data">
                            <i className="icon-check" /> Friday
                          </td>
                          <td className="table__border">
                            <div className="table__border__line" />
                          </td>
                          <td className="table__right-data">
                            10:00AM - 07:00PM
                          </td>
                        </tr>
                        <tr>
                          <td className="table__left-data">
                            <i className="icon-check" /> Saturday
                          </td>
                          <td className="table__border">
                            <div className="table__border__line" />
                          </td>
                          <td className="table__right-data">
                          closed
                          </td>
                        </tr>
                        {/* Repeat rows for other days */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-map">
        <div className="container-fluid">
          <div className="google-map google-map__contact">
            <iframe
              title="template google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
              className="map__contact"
              allowFullScreen=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
