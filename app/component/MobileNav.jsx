"use client";
import Image from 'next/image';
import React from 'react';

const MobileNav = ({ isOpen, toggleMenu, currentPage, isDropdownOpen, toggleDropdown, isShopDropdownOpen, toggleShopDropdown, isServicesDropdownOpen, toggleServicesDropdown, isNewsDropdownOpen, toggleNewsDropdown }) => {
    return (
        <div className={`mobile-nav__wrapper ${isOpen ? 'expanded' : 'hidden'}`}>
            <div className="mobile-nav__overlay" onClick={toggleMenu}></div>
            <div className="mobile-nav__content">
                <span className="mobile-nav__close cursor-pointer" onClick={toggleMenu}>
                    <i className="fa fa-times"></i>
                </span>
                <div className="logo-box">
                    <a href="/" aria-label="logo image">
                        <Image
                            src="/assets/images/logo-light.png"
                            width={100}
                            height={100}
                            alt="logo"
                        />
                    </a>
                </div>

                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        {['home', 'about us', 'services', 'pages', 'shop', 'news', 'Contact Us'].map((page) => (
                            <li key={page} className="relative ">

                                <a
                                    href={page === 'about us' ? '/page/about' : page === 'Contact Us' ? '/page/contactus' : page === 'login' ? '/page/login' : page === 'home' ? '/' : page === 'news grid' ? '/page/newsgrid' : `/${page}`}
                                    className={`text-gray-700 hover:text-black hover:font-bold text-[16px] ${currentPage === page ? 'font-bold text-black' : ''}`}
                                    onClick={
                                        page === 'pages' ? (e) => { e.preventDefault(); } : 
                                        page === 'shop' ? (e) => { e.preventDefault(); } : 
                                        page === 'services' ? (e) => { e.preventDefault(); } : 
                                        page === 'news' ? (e) => { e.preventDefault();  } : undefined}
                                >
                                    {page.toUpperCase()}
                                    {(page === 'pages' || page === 'shop' || page === 'services' || page === 'news') && (
                                    <button 
                                        aria-label="dropdown toggler" 
                                        onClick={
                                            page === 'pages' ? toggleDropdown : 
                                            page === 'shop' ? toggleShopDropdown : 
                                            page === 'services' ? toggleServicesDropdown : 
                                            toggleNewsDropdown
                                        }
                                        className="ml-2 w-[30px] h-[30px] bg-[#A42125] text-white "
                                    >
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                )}
                                </a>

                                {/* Nút dropdown toggler */}
                                {/* {(page === 'pages' || page === 'shop' || page === 'services' || page === 'news') && (
                                    <button 
                                        aria-label="dropdown toggler" 
                                        onClick={
                                            page === 'pages' ? toggleDropdown : 
                                            page === 'shop' ? toggleShopDropdown : 
                                            page === 'services' ? toggleServicesDropdown : 
                                            toggleNewsDropdown
                                        }
                                        className="ml-2 w-[30px] h-[30px] bg-[#A42125] text-white "
                                    >
                                        <i className="fa fa-angle-down"></i>
                                    </button>
                                )} */}

                                {/* Submenu cho "Pages" */}
                                {page === 'pages' && (
                                    <ul className={`${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`} style={{ transformOrigin: 'top left' }}>
                                         <li><a href="/page/ourteam" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Our Team</a></li>
                                            <li><a href="/page/teamcarousel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Team Carousel</a></li>
                                            <li><a href="/page/teamdetail" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Team detail</a></li>
                                            <li><a href="/page/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Pricing</a></li>
                                            <li><a href="/page/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Testimonials</a></li>
                                            <li><a href="/page/galleryfillter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Gallery</a></li>
                                            <li><a href="/page/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>FAQ</a></li>
                                            <li><a href="/page/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Login</a></li>
                                            <li><a href="/page/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Register</a></li>
                                            <li><a href="/page/editprofile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Edit Profile</a></li>
                                            <li><a href="/page/purchasehistory" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Purchase History</a></li>
                                            <li><a href="/page/vieworder" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>View Order</a></li>
                                    </ul>
                                )}

                                {/* Submenu cho "Shop" */}
                                {page === 'shop' && (
                                        <ul
                                            className={`${isShopDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                                            style={{ transformOrigin: 'top left' }}
                                        >
                                            <li><a href="/page/product" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Product</a></li>
                                            <li><a href="/page/productcarousel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Product Carousel</a></li>
                                            <li><a href="/page/product-detail" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Product Detail</a></li>
                                            <li><a href="/page/cart" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Cart</a></li>
                                            <li><a href="/page/checkout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Check Out</a></li>
                                    </ul>
                                )}

                                {/* Submenu cho "Services" */}
                                {/* {page === 'services' && (
                                        <ul
                                        className={`${isServicesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                                            style={{ transformOrigin: 'top left' }}>
                                            <li><a href="/page/servicescarousel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Services Carousel</a></li>
                                            <li><a href="/page/service-details" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Custom Cutting</a></li>
                                    </ul>
                                )} */}

                                {page === 'services' && (
                                        <ul
                                        className={`${isServicesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                                            style={{ transformOrigin: 'top left' }}>
                                            <li><a href="/page/service" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>Services</a></li>
                                            <li><a href="/page/servicescarousel" className="{`block px-4 py-2 text-gray-700 hover:bg-gray-100 `}" style={{color: "white"}}>Services Carousel</a></li>
                                            <li><a href="/page/service-details" className="{`block px-4 py-2 text-gray-700 hover:bg-gray-100 `}" style={{color: "white"}}>Custom Cutting</a></li>
                                    </ul>
                                )}

                                {/* Submenu cho "News" */}
                                {page === 'news' && (
                                        <ul
                                        className={`${isNewsDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                                            style={{ transformOrigin: 'top left' }}>
                                            <li><a href="/page/newsgrid" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>News Grid</a></li>
                                            <li><a href="/page/newslist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>News List</a></li>
                                            <li><a href="/page/leftnew" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>News List Left Sidebar</a></li>
                                            <li><a href="/page/rightlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>News List Right Sidebar</a></li>
                                            <li><a href="/page/newsdetail" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{color: "white"}}>News Detail</a></li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:needhelp@boskery.com">needhelp@boskery.com</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:+92(8800)-9850">+ 92(8800) - 9850</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__social">
                        <a href="https://facebook.com">
                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://twitter.com">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="https://pinterest.com">
                            <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                            <span className="sr-only">Pinterest</span>
                        </a>
                        <a href="https://instagram.com">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
