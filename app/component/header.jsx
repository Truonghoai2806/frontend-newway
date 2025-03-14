"use client";
import { useState, useRef, useEffect } from 'react';
import MobileNav from '../component/MobileNav';
import SearchPopup from '../component/SearchPopup';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
    const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
    const currentPage = 'home';
    const mainMenuRef = useRef(null);
    const mobileNavRef = useRef(null);

    useEffect(() => {
        const fileName = window.location.href.split("/").pop();
        const mainNavUL = mainMenuRef.current;
        if (mainNavUL) {
            mainNavUL.querySelectorAll("li").forEach(li => {
                const anchor = li.querySelector("a");
                if (anchor && anchor.getAttribute("href") === fileName) {
                    li.classList.add("current");
                }
            });
        }

        const mobileNavContainer = mobileNavRef.current;
        if (mobileNavContainer && mainNavUL) {
            mobileNavContainer.innerHTML = mainNavUL.innerHTML;
        }
    }, []);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const openPopup = () => setIsSearchPopupOpen(true);
    const closePopup = () => setIsSearchPopupOpen(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev); // Đảo ngược trạng thái của menu con
    };

    const toggleShopDropdown = () => {
        setIsShopDropdownOpen(prev => !prev); // Đảo ngược trạng thái của menu Shop
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(prev => !prev); // Đảo ngollectors
    };

    const toggleNewsDropdown = () => {
        setIsNewsDropdownOpen(prev => !prev); // Đảo ngollectors
    };


    // Handlers for mouse events
    const handleMouseEnter = (menu) => {
        if (menu === 'pages') setIsDropdownOpen(true);
        if (menu === 'shop') setIsShopDropdownOpen(true);
        if (menu === 'services') setIsServicesDropdownOpen(true);
        if (menu === 'news') setIsNewsDropdownOpen(true);
    };

    const handleMouseLeave = (menu) => {
        if (menu === 'pages') setIsDropdownOpen(false);
        if (menu === 'shop') setIsShopDropdownOpen(false);
        if (menu === 'services') setIsServicesDropdownOpen(false);
        if (menu === 'news') setIsNewsDropdownOpen(false);
    };



    const [userData, setUserData] = useState(null);
    const loginData = Cookies.get("loginData");
    const token = loginData ? JSON.parse(loginData).token : null;

    
    useEffect(() => {

        const fetchUserData = async (user_id) => {
            try {
                const response = await fetch(`/api/auth/user/user-profile/${user_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
    
                if (!response.ok) {
                    console.error('Failed to fetch user data:', response.status, response.statusText);
                    return null;
                }
    
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching user data:', error);
                return null;
            }
        };
    
        const loginData = Cookies.get('loginData');
        const authData = loginData ? JSON.parse(loginData) : null;
    
        if (authData && authData.user_id && token) {
            const getUserData = async () => {
                const user = await fetchUserData(authData.user_id);
                if (user) {
                    setUserData(user);
                } else {
                    console.error('Failed to retrieve user data.');
                }
            };
    
            getUserData();
        } else {
            console.warn('No valid login data or token found.');
        }
    }, [token]);
    

    // console.log(authData.data.name);
    // console.log(userData);

    return (
        <header className="w-full flex justify-start items-center bg-white pl-30 font-boskery-heading-font">
            <MobileNav isOpen={isOpen}
                toggleMenu={toggleMenu}
                currentPage={currentPage}
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                isShopDropdownOpen={isShopDropdownOpen}
                toggleShopDropdown={toggleShopDropdown}
                isServicesDropdownOpen={isServicesDropdownOpen}
                toggleServicesDropdown={toggleServicesDropdown}
                isNewsDropdownOpen={isNewsDropdownOpen}
                toggleNewsDropdown={toggleNewsDropdown}
            />
            <SearchPopup isSearchPopupOpen={isSearchPopupOpen} closePopup={closePopup} />
            <div className="flex items-center space-x-4" style={{ marginRight: "78px" }}>
                <Image src="/assets/images/logo-dark.png" alt="Company Logo" width={100} height={100} className="w-[100px] h-full" style={{ maxWidth: "100px" }} />
            </div>

            <div className="w-full">
                <div className="bg-red-700 text-white flex justify-between items-center px-[70px] py-3 hidden md:flex">
                    <div className="flex items-center space-x-4 hidden xxl:flex">
                        <i className="fas fa-envelope"></i>
                        <span className='hover:underline'>needhelp@company.com</span>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className='hover:underline'>85 Ketch Harbour Road Bensalem, PA 19020</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ul className="list-unstyled topbar__pages flex space-x-4">
                            <li><Link href="page/contactus" className="text-white hover:text-black">Help</Link></li>
                            <li><Link href="page/contactus" className="text-white hover:text-black">Support</Link></li>
                            <li><Link href="page/contactus" className="text-white hover:text-black">Contact</Link></li>
                        </ul>
                        <div className="flex space-x-4">
                            <i className="fab fa-facebook-f hover:text-black"></i>
                            <i className="fab fa-twitter hover:text-black"></i>
                            <i className="fab fa-pinterest hover:text-black"></i>
                            <i className="fab fa-instagram hover:text-black"></i>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex justify-between items-center h-[80px]">
                    <nav className="relative z-50">
                        <ul className="hidden xxl:flex lg:space-x-6">
                            {['home', 'about us', 'services', 'pages', 'shop', 'news', 'Contact Us'].map((page) => (
                                <li key={page}
                                    className="relative py-[30.5px] group"
                                    onMouseEnter={() => handleMouseEnter(page)}
                                    onMouseLeave={() => handleMouseLeave(page)}
                                >
                                    <a
                                        href={page === 'about us' ? '/page/about' : page === 'services' ? '/page/service' : page === 'news' ? '/page/newslist' : page === 'pages' ? '#' : page === 'Contact Us' ? '/page/contactus' : page === 'home' ? '/' : `/${page}`}
                                        className={`text-gray-700 hover:text-black hover:font-bold text-[16px] ${currentPage === page ? 'font-bold text-black' : ''}`}
                                    >
                                        {page.toUpperCase()}
                                    </a>

                                    {/* Submenu for "Pages" */}
                                    {page === 'pages' && isDropdownOpen && (
                                        <ul
                                            className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-[200px] z-50 opacity-100 scale-100 transition-transform duration-200 ease-in-out"
                                            style={{ transformOrigin: 'top left' }}
                                        >
                                            <li><a href="/page/ourteam" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Our Team</a></li>
                                            <li><a href="/page/teamcarousel" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Team Carousel</a></li>
                                            <li><a href="/page/teamdetail" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Team detail</a></li>
                                            <li><a href="/page/pricing" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Pricing</a></li>
                                            <li><a href="/page/testimonials" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Testimonials</a></li>
                                            <li><a href="/page/galleryfillter" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Gallery</a></li>
                                            <li><a href="/page/faqs" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">FAQ</a></li>
                                            <li><a href="/page/login" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Login</a></li>
                                            <li><a href="/page/register" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Register</a></li>
                                            <li><a href="/page/editprofile" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Edit Profile</a></li>
                                            <li><a href="/page/PurchaseHistory" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Purchase History</a></li>
                                            <li><a href="/page/vieworder" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">View Order</a></li>
                                        </ul>
                                    )}

                                    {/* Submenu for "Shop" */}
                                    {page === 'shop' && isShopDropdownOpen && (
                                        <ul
                                            className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-[200px] z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-transform duration-200 ease-in-out"
                                            style={{ transformOrigin: 'top left' }}
                                        >
                                            <li><a href="/page/product" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Product</a></li>
                                            <li><a href="/page/productcarousel" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Product Carousel</a></li>
                                            <li><a href="/page/product-detail/1" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Product Detail</a></li>
                                            <li><a href="/page/cart" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Cart</a></li>
                                            <li><a href="/page/checkout" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Check Out</a></li>
                                        </ul>
                                    )}

                                    {/* Submenu for "Services" */}
                                    {page === 'services' && isServicesDropdownOpen && (
                                        <ul
                                            className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-[200px] z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100  transition-transform duration-200 ease-in-out"
                                            style={{ transformOrigin: 'top left' }}
                                        >
                                            <li><a href="/page/service" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Services</a></li>
                                            <li><a href="/page/servicescarousel" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Services Carousel</a></li>
                                            <li><a href="/page/service-details" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">Custom Cutting</a></li>
                                        </ul>
                                    )}

                                    {/* Submenu for "News" */}
                                    {page === 'news' && isNewsDropdownOpen && (
                                        <ul
                                            className="absolute left-0 bg-white shadow-lg rounded-md mt-2 w-[200px] z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-transform duration-200 ease-in-out"
                                            style={{ transformOrigin: 'top left' }}
                                        >
                                            <li><a href="/page/newsgrid" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">News Grid</a></li>
                                            <li><a href="/page/newslist" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">News List</a></li>
                                            <li><a href="/page/leftnew" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">News List Left Sidebar</a></li>
                                            <li><a href="/page/rightnew" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">News List Right Sidebar</a></li>
                                            <li><a href="/page/newsdetail/1" className="block px-4 py-2 text-gray-700 hover:bg-[#A42125] hover:text-white">News Detail</a></li>
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Mobile navigation button */}
                        <div className="mobile-nav__btn mobile-nav__toggler flex flex-col justify-center items-center cursor-pointer xxl:hidden ml-4" onClick={toggleMenu}>
                            <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-1 bg-gray-700"></span>
                        </div>
                    </nav>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 hidden xl:flex gap-[20px]">
                            <span className="main-header__call__icon icon-mobile"></span>
                            <div>
                                <span className="">CALL ANYTIME</span>
                                <span className="block text-black font-bold">+ 92(8800) - 9850</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="#" onClick={openPopup} className="search-toggler main-header__search flex items-center text-black hover:text-red-700">
                                <i className="fas fa-search"></i>
                                <span className="sr-only">Search</span>
                            </Link>
                            <i className="fas fa-shopping-cart text-black"></i>
                        </div>
                        <div className="flex justify-center items-center hidden dt:flex">
                            {userData ? (
                                // Nếu người dùng đã đăng nhập, hiển thị tên người dùng
                                <Link href="/page/editprofile" className="relative-order1 text-[11px] font-[\'Roboto Condensed\', sans-serif] font-bold uppercase relative text-center  flex justify-center items-center bg-red-700 text-white ml-[51px]">
                                    Xin chào, {userData.data.name || "null"}
                                </Link>
                            ) : (
                                <Link href="/page/contactus" className="relative-order1 text-[11px] font-[\'Roboto Condensed\', sans-serif] font-bold uppercase relative text-center  flex justify-center items-center bg-red-700 text-white ml-[51px]">
                                    <span className="relative-order1__hover"></span>
                                    <span className="relative-order1__hover"></span>
                                    <span className="relative-order1__hover"></span>
                                    <span className="relative-order1__hover"></span>
                                    <span className="relative-order1__hover"></span>
                                    <span className="relative-order1__hover"></span>
                                    <span className="relative z-10">Order Now</span>
                                    <i className="icon-meat-3 relative z-10 ml-6 text-[18px]">
                                        <i className='absolute top-1/2 left-[-15px] w-[1px] h-[calc(100%+2px)] bg-[rgba(255,255,255,0.2)] transition-all duration-[400ms] ease-in-out transform -translate-y-1/2'></i>
                                    </i>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
