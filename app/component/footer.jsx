import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#1E1D1D] relative">
      <div
        className="absolute inset-0 mix-blend-multiply bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(/assets/images/backgrounds/footer-bg.png)',
        }}
      ></div>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0 pt-12 px-0 pb-8 ">
          <div className="w-full md:w-1/4 animate-fadeIn">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/footer-logo-light.png"
                width="119"
                height="33"
                alt="Boskery HTML Template"
              />
            </Link>
          </div>
          <div className="w-full md:w-[40%] animate-fadeIn">
            <form
              action="#"
              data-url="MAILCHIMP_FORM_URL"
              className="flex items-center space-x-3"
              noValidate
            >
              <input
                type="text"
                name="EMAIL"
                style={{ marginRight: "-45px" }}
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" style={{ marginRight: "20px" }} className="flex-shrink-0">
                <span className="sr-only">submit</span>
                <i className="icon-paper-plane text-[#A42125]"></i>
              </button>
            </form>
            <div className="mc-form__response mt-2"></div>
          </div>
        </div>


        <i className="flex w-[1170px] h-[1px] bg-[#FFFFFF]"></i>

        <div className="py-10 mt-[74px] mb-[60px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full animate-fadeIn mt-[30px]">
              <div className="footer-widget footer-widget--about">
                <h2 className="footer-widget__title text-xl font-bold">
                  Providing fresh and organic meat from our farm in a very hygienic way.
                </h2>
                <a
                  href="/page/contactus"
                  className="relative-order mt-3 inline-flex items-center px-6 py-2 border border-transparent  bg-blue-500 text-white"
                >
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__hover"></span>
                  <span className="relative-order__text">Contact Us</span>
                  <i className="icon-meat-3 ml-2"></i>
                </a>
              </div>
            </div>
            <div className="w-full animate-fadeIn mt-[30px]">
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title text-xl font-bold">Explore</h2>
                <ul className="list-none">
                  <li>
                    <Link href="page/about" className="hover:underline boskery-text">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="page/checkout" className="hover:underline boskery-text">
                      Place Order
                    </Link>
                  </li>
                  <li>
                    <Link href="page/ourteam" className="hover:underline boskery-text">
                      Meet the Team
                    </Link>
                  </li>
                  <li>
                    <Link href="page/newslist" className="hover:underline boskery-text">
                      Latest News
                    </Link>
                  </li>
                  <li>
                    <Link href="page/contactus" className="hover:underline boskery-text">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full animate-fadeIn mt-[30px]">
              <div className="footer-widget footer-widget--contact" style={{ paddingLeft: "0" }}>
                <h2 className="footer-widget__title text-xl font-bold">Contact</h2>
                <div className="footer-widget__contact">
                  <address className="footer-widget__address">
                    85 Ketch Harbour Road Bensal PA 19020
                  </address>
                  <ul className="list-none">
                    <li>
                      <span className="icon-paper-plane text-[#A42125]"></span>{" "}
                      <Link href="page/contactus" className="hover:underline boskery-text">
                        needhelp@company.com
                      </Link>
                    </li>
                    <li>
                      <span className="icon-phone-call text-[#A42125]"></span>{" "}
                      <Link href="tel:+9156980036420" className="hover:underline boskery-text">
                        +91 5698 0036 420
                      </Link>
                    </li>
                  </ul>
                  <div className="footer-widget__social flex space-x-4">
                    <Link href="https://facebook.com" className="text-gray-500 ">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="https://twitter.com" className="text-gray-500 ">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://linkedin.com" className="text-gray-500 ">
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                      <span className="sr-only">Linkedin</span>
                    </Link>
                    <Link href="https://youtube.com" aria-hidden="true" className="text-gray-500 ">
                      <i className="fab fa-youtube"></i>
                      <span className="sr-only">Youtube</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full animate-fadeIn mt-[30px]">
              <div className="footer-widget footer-widget--gallery">
                <h2 className="footer-widget__title text-xl font-bold">Gallery</h2>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <Link href="/page/galleryfillter" className="relative block w-[83px] group">
                    <Image
                      src="/assets/images/gallery/footer-widget-gallery-1.jpg"
                      width={183}
                      height={183}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-base text-white bg-[#A42125D3] transform rotate-x-[90deg] origin-[0%_50%] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:rotate-x-0">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>

                  <Link href="/page/galleryfillter" className="relative block w-[83px] group">
                    <Image
                      src="/assets/images/gallery/footer-widget-gallery-2.jpg"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-base text-white bg-[#A42125D3] transform rotate-x-[90deg] origin-[0%_50%] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:rotate-x-0">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                  <Link href="/page/galleryfillter" className="relative block w-[83px] group">
                    <Image
                      src="/assets/images/gallery/footer-widget-gallery-3.jpg"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-base text-white bg-[#A42125D3] transform rotate-x-[90deg] origin-[0%_50%] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:rotate-x-0">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                  <Link href="/page/galleryfillter" className="relative block w-[83px] group">
                    <Image
                      src="/assets/images/gallery/footer-widget-gallery-4.jpg"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-base text-white bg-[#A42125D3] transform rotate-x-[90deg] origin-[0%_50%] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:rotate-x-0">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                  <Link href="/page/galleryfillter" className="relative block w-[83px] group">
                    <Image
                      src="/assets/images/gallery/footer-widget-gallery-5.jpg"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-base text-white bg-[#A42125D3] transform rotate-x-[90deg] origin-[0%_50%] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:rotate-x-0">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                  <Link href="/page/galleryfillter" className="relative block w-[83px] group">
                    <Image
                      src="/assets/images/gallery/footer-widget-gallery-6.jpg"
                      width={83}
                      height={83}
                      alt="footer-widget-gallery"
                      className="w-full h-auto"
                    />
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-base text-white bg-[#A42125D3] transform rotate-x-[90deg] origin-[0%_50%] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:rotate-x-0">
                      <i className="icon-plus"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <p className="text-white">
              © Copyright <span className="dynamic-year">2024</span> by Boskery HTML Template.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
