import Image from "next/image";
import Testimonials from "../../component/Testimonials";
import CounterOneSectionSpace from "../../component/counter-one-section-page.jsx";
import TeamOneSectionSpaceTwo from "../../component/team-one-section-space-two";
import ClientCarousel from "../../component/client-carousel";

const AboutUs = () => {
    return (
        <>
         <section className="page-header relative" style={{ height: '320px' }}>
            <div
                className="page-header__bg absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}
            ></div>

            <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                <h2 className="page-header__title text-[55px] font-bold text-white text-center">About us</h2>
                <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                    <li>
                        <a href="/" className="hover:underline">Home</a>
                    </li>
                    <li>
                    <a href="/page/about" className="hover:underline"><span>About us</span></a>
                    </li>
                </ul>
            </div>
        </section>
        
        <section className="section-space" id="about">
            <div className="container mx-auto">
            <div className="flex flex-wrap gap-y-16">
                <div className="lg:w-1/2 wow fadeInLeft" data-wow-duration="1500ms">
                <div className="relative">
                    <Image
                    width={570}
                    height={597}
                    src="/assets/images/about/about-3-1.jpg"
                    alt="about image"
                    className="about-three__image__one w-full h-auto"
                    />
                    <div className="about-three__image__inner">
                    <Image
                    width={270}
                    height={186}
                        src="/assets/images/about/about-3-2.jpg"
                        alt="about image"
                        className="about-three__image__two w-3/4 h-auto"
                    />
                    </div>
    
                    <div className="about-three__experience">
                    <div
                        className="about-three__experience__bg"
                        style={{
                        backgroundImage:
                            "url(assets/images/shapes/about-shape-3-1.png)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        }}
                    ></div>
                    <div className="about-three__experience__content text-center relative z-10">
                        <div className="about-three__experience__text">
                        <h4 className="about-three__experience__title">
                            years of <br /> experience
                        </h4>
                        </div>
                        <h4 className="about-three__experience__year text-4xl font-bold">
                        25+
                        </h4>
                    </div>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/2 wow fadeInRight" data-wow-duration="1500ms">
                <div className="about-three__content">
                    <div className="sec-title">
                    <Image
                    width={100}
                    height={100}
                        src="/assets/images/shapes/sec-title-s-1.png"
                        alt="about boskery meat shop"
                        className="sec-title__img"
                    />
                    <h6 className="sec-title__tagline">about boskery meat shop</h6>
                    <h2 className="sec-title__title text-2xl md:text-5xl">
                        Fresh Cuts Butcher <br /> Shop in city
                    </h2>
                    </div>
                    <p className="about-three__text">
                    We are trusted by many clients from all over the country. Cras
                    non dui id ex mattis vehicula. Nullam posuere ligula non libero
                    mollis, non ornare sapien rutrum. Quisque vitae risus venenatis,
                    dignissim felis id.
                    </p>
                    <div className="about-three__info flex flex-col space-y-6">
                    <div className="about-three__info__inner flex items-center">
                        <div className="about-three__info__icon">
                        <span className="icon-healthcare-1"></span>
                        </div>
                        <div className="about-three__info__content ml-4">
                        <h4 className="about-three__info__title">
                            Health and Safety
                        </h4>
                        </div>
                    </div>
                    <div className="about-three__info__inner flex items-center">
                        <div className="about-three__info__icon">
                        <span className="icon-meat"></span>
                        </div>
                        <div className="about-three__info__content ml-4">
                        <h4 className="about-three__info__title">
                            100% Fresh Produce
                        </h4>
                        </div>
                    </div>
                    </div>
                    <div className="progress-box mt-8">
                    <h4 className="progress-box__title">Quality of Meat</h4>
                    <div className="progress-box__bar relative bg-gray-200 h-4 rounded">
                        <div
                        className="progress-box__bar__inner bg-green-600 h-full"
                        style={{ width: "95%" }}
                        >
                        <div className="progress-box__number count-text text-white">
                            95%
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="about-three__bottom mt-8 flex items-center justify-between">
                    <a
                        href="/page/contactus"
                        className="boskery-btn relative inline-block text-white bg-red-600 py-2 px-4 rounded"
                    >
                        <span className="boskery-btn__hover"></span>
                        <span className="boskery-btn__text">know about us</span>
                        <i className="icon-meat-3 ml-2"></i>
                    </a>
                    <div className="about-three__profile flex items-center">
                        <div className="about-three__profile__left flex items-center">
                        <Image
                        width={100}
                        height={100}
                            src="/assets/images/resources/about-director-3-1.png"
                            alt=""
                            className="about-three__profile__image w-12 h-12 rounded-full"
                        />
                        <div className="about-three__profile__info ml-4">
                            <span className="about-three__profile__designation">
                            director
                            </span>
                            <h5 className="about-three__profile__name">benjamin</h5>
                        </div>
                        </div>
                        <div className="about-three__profile__right ml-4">
                        <Image
                        width={100}
                        height={100}
                            src="/assets/images/shapes/about-director-sign-3-1.png"
                            alt="director-sign"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="relative z-0">
            <div className="about-three__shape absolute inset-0 z-[-1]">
                <Image
                width={100}
                height={100}
                src="/assets/images/shapes/about-shape-3-2.png"
                alt="about shape"
                className="about-three__shape-one"
                />
                <div
                className="about-three__shape__image animate-fadeInLeft"
                data-wow-duration="1500ms"
                >
                <Image
                width={100}
                height={100}
                    src="/assets/images/shapes/about-shape-3-3.png"
                    alt="about shape"
                    className="w-full h-auto"
                />
                </div>
            </div>
            </div>
        </section>
        <CounterOneSectionSpace/>
        
        <section className="delivery-one section-space" id="delivery">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div
                            className="w-full lg:w-1/2 p-4 wow fadeInLeft"
                            data-wow-duration="1500ms"
                        >
                            <div className="delivery-one__content">
                                <div className="sec-title">
                                    <Image
                                        width={72}
                                        height={21}
                                        src="/assets/images/shapes/sec-title-s-1.png"
                                        alt="DELIVERY SERVICE"
                                        className="sec-title__img"
                                    />
                                    <h6 className="sec-title__tagline text-lg font-semibold">
                                        DELIVERY SERVICE
                                    </h6>
                                    <h2 className="m-0 text-[45px] text-[#1E1D1D] font-bold uppercase tracking-[-1.1px] leading-[1.181]">
                                        Express delivery to <br /> your doorstep
                                    </h2>
                                </div>
                                <p className="delivery-one__text text-base">
                                    A meat store is a specialized retail establishment that offers a
                                    wide range of fresh and high-quality meats, including beef,
                                    pork, chicken, lamb, and other varieties. At a meat store,
                                    customers can find a variety of cuts and preparations, from
                                    steaks and roasts to ground meats and sausages.
                                </p>
                                <div className="delivery-one__bottom mt-6">
                                    <a
                                        href="/page/contactus"
                                        className="boskery-btn inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg"
                                    >
                                        <span className="boskery-btn__text">Contact with us</span>
                                        <i className="icon-meat-3 ml-2"></i>
                                    </a>
                                    <div className="contact__info mt-4">
                                        <div className="contact__info__inner flex items-center">
                                            <div className="contact__info__icon mr-3">
                                                <span className="icon-telephone"></span>
                                            </div>
                                            <div className="contact__info__right">
                                                <h4 className="contact__info__title font-semibold">
                                                    Call for Delivery
                                                </h4>
                                                <a
                                                    href="tel:+92(8800)68900"
                                                    className="contact__info__number text-blue-600"
                                                >
                                                    +92 (8800) 68900
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full lg:w-1/2 p-4 wow fadeInRight"
                            data-wow-duration="1500ms"
                        >
                            <div className="delivery-one__image relative">
                                <div className="delivery-one__image__inner-one relative">
                                    <Image
                                        width={351}
                                        height={489}
                                        src="/assets/images/delivery/delivery-1-1.png"
                                        alt="delivery man"
                                        className="delivery-one__image__one w-full h-auto"
                                    />
                                    <div className="delivery-one__image__bg absolute inset-0">
                                        <div
                                            className="delivery-one__image__bg__inner"
                                            style={{
                                                backgroundImage:
                                                    "url(assets/images/shapes/delivery-man-bg-1.png)",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="delivery-one__circle-text">
                                        <div className="absolute top-0 left-0 w-[170px] h-[170px] rounded-full bg-[#ffffff]"></div>
                                        <div className="delivery-one__circle-text__plus"></div>
                                        <div className="h-full animate-rotate">
                                            <div
                                                className="delivery-one__curved-circle__item curved-circle__item"
                                                data-circle-text-options='{
                                                    "radius": 87,
                                                    "forceWidth": true,
                                                    "forceHeight": true
                                                }'
                                            >
                                                <span className="char1" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(-172.39deg)", transformOrigin: "center 5.8em" }}>n</span>
                                                <span className="char2" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(-161.333deg)", transformOrigin: "center 5.8em" }}>a</span>
                                                <span className="char3" style={{ position: "absolute", left: "50%", marginLeft: "-0.333333em", transform: "rotate(-151.281deg)", transformOrigin: "center 5.8em" }}>t</span>
                                                <span className="char4" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(-140.726deg)", transformOrigin: "center 5.8em" }}>u</span>
                                                <span className="char5" style={{ position: "absolute", left: "50%", marginLeft: "-0.333333em", transform: "rotate(-130.172deg)", transformOrigin: "center 5.8em" }}>r</span>
                                                <span className="char6" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(-119.618deg)", transformOrigin: "center 5.8em" }}>a</span>
                                                <span className="char7" style={{ position: "absolute", left: "50%", marginLeft: "-0.3em", transform: "rotate(-109.566deg)", transformOrigin: "center 5.8em" }}>l</span>
                                                <span className="char8" style={{ position: "absolute", left: "50%", marginLeft: "-0.2em", transform: "rotate(-102.027deg)", transformOrigin: "center 5.8em" }}>&nbsp;</span>
                                                <span className="char9" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(-93.4826deg)", transformOrigin: "center 5.8em" }}>o</span>
                                                <span className="char10" style={{ position: "absolute", left: "50%", marginLeft: "-0.333333em", transform: "rotate(-82.9281deg)", transformOrigin: "center 5.8em" }}>r</span>
                                                <span className="char11" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(-72.3736deg)", transformOrigin: "center 5.8em" }}>g</span>
                                                <span className="char12" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(-61.3165deg)", transformOrigin: "center 5.8em" }}>a</span>
                                                <span className="char13" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(-50.2595deg)", transformOrigin: "center 5.8em" }}>n</span>
                                                <span className="char14" style={{ position: "absolute", left: "50%", marginLeft: "-0.2em", transform: "rotate(-41.7153deg)", transformOrigin: "center 5.8em" }}>i</span>
                                                <span className="char15" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(-33.1712deg)", transformOrigin: "center 5.8em" }}>c</span>
                                                <span className="char16" style={{ position: "absolute", left: "50%", marginLeft: "-0.2em", transform: "rotate(-24.6271deg)", transformOrigin: "center 5.8em" }}>&nbsp;</span>
                                                <span className="char17" style={{ position: "absolute", left: "50%", marginLeft: "-0.433333em", transform: "rotate(-15.0778deg)", transformOrigin: "center 5.8em" }}>m</span>
                                                <span className="char18" style={{ position: "absolute", left: "50%", marginLeft: "-0.333333em", transform: "rotate(-3.51816deg)", transformOrigin: "center 5.8em" }}>e</span>
                                                <span className="char19" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(6.53373deg)", transformOrigin: "center 5.8em" }}>a</span>
                                                <span className="char20" style={{ position: "absolute", left: "50%", marginLeft: "-0.333333em", transform: "rotate(16.5856deg)", transformOrigin: "center 5.8em" }}>t</span>
                                                <span className="char21" style={{ position: "absolute", left: "50%", marginLeft: "-0.2em", transform: "rotate(24.6271deg)", transformOrigin: "center 5.8em" }}>&nbsp;</span>
                                                <span className="char22" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(33.6738deg)", transformOrigin: "center 5.8em" }}>n</span>
                                                <span className="char23" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(44.7309deg)", transformOrigin: "center 5.8em" }}>a</span>
                                                <span className="char24" style={{ position: "absolute", left: "50%", marginLeft: "-0.333333em", transform: "rotate(54.7828deg)", transformOrigin: "center 5.8em" }}>t</span>
                                                <span className="char25" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(65.3373deg)", transformOrigin: "center 5.8em" }}>u</span>
                                                <span className="char26" style={{ position: "absolute", left: "50%", marginLeft: "-0.333333em", transform: "rotate(75.8918deg)", transformOrigin: "center 5.8em" }}>r</span>
                                                <span className="char27" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(86.4463deg)", transformOrigin: "center 5.8em" }}>a</span>
                                                <span className="char28" style={{ position: "absolute", left: "50%", marginLeft: "-0.3em", transform: "rotate(96.4982deg)", transformOrigin: "center 5.8em" }}>l</span>
                                                <span className="char29" style={{ position: "absolute", left: "50%", marginLeft: "-0.2em", transform: "rotate(104.037deg)", transformOrigin: "center 5.8em" }}>&nbsp;</span>
                                                <span className="char30" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(112.581deg)", transformOrigin: "center 5.8em" }}>o</span>
                                                <span className="char31" style={{ position: "absolute", left: "50%", marginLeft: "-0.333333em", transform: "rotate(123.136deg)", transformOrigin: "center 5.8em" }}>r</span>
                                                <span className="char32" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(133.69deg)", transformOrigin: "center 5.8em" }}>g</span>
                                                <span className="char33" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(144.747deg)", transformOrigin: "center 5.8em" }}>a</span>
                                                <span className="char34" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(155.804deg)", transformOrigin: "center 5.8em" }}>n</span>
                                                <span className="char35" style={{ position: "absolute", left: "50%", marginLeft: "-0.2em", transform: "rotate(164.348deg)", transformOrigin: "center 5.8em" }}>i</span>
                                                <span className="char36" style={{ position: "absolute", left: "50%", marginLeft: "-0.366667em", transform: "rotate(172.893deg)", transformOrigin: "center 5.8em" }}>c</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="delivery-one__image__inner-two relative">
                                    <Image
                                        width={237}
                                        height={405}
                                        src="/assets/images/delivery/delivery-1-2.jpg"
                                        alt="delivery"
                                        className="delivery-one__image__two w-full h-auto"
                                    />
                                    <div className="delivery-one__image__box"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="delivery-one__shape wow fadeInLeft"
                    data-wow-duration="1500ms"
                >
                    <Image
                        width={318}
                        height={134}
                        src="/assets/images/shapes/delivery-shape-1-1.png"
                        alt="delivery-shape"
                    />
                </div>
            </section>
            <TeamOneSectionSpaceTwo/>
            <Testimonials/>
            <ClientCarousel/>
      </>
    );
  };
  
  export default AboutUs;
  