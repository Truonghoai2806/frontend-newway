"use client";
import { useState } from "react";
import Image from "next/image";

export default function Pricing() {
    const [activeTab, setActiveTab] = useState("beaf-meat");

    const productData = {
        "beaf-meat": [
            { id: 1, name: "Rabbit with mustard", weight: 500, price: 59, image: "/assets/images/pricing/pricing-product-1-1.png" },
            { id: 2, name: "Beef with mint", weight: 600, price: 29, image: "/assets/images/pricing/pricing-product-1-2.png" },
            { id: 3, name: "Rabbit with mustard", weight: 500, price: 59, image: "/assets/images/pricing/pricing-product-1-1.png" },
            { id: 4, name: "Beef with mint", weight: 600, price: 29, image: "/assets/images/pricing/pricing-product-1-2.png" },
        ],
        "turkey": [
            { id: 1, name: "Turkey product 1", weight: 500, price: 59, image: "/assets/images/pricing/pricing-product-1-1.png" },
            { id: 2, name: "Turkey product 2", weight: 600, price: 29, image: "/assets/images/pricing/pricing-product-1-2.png" }
        ],
        "poultry": [
            { id: 1, name: "Poultry product 1", weight: 500, price: 59, image: "/assets/images/pricing/pricing-product-1-1.png" },
            { id: 2, name: "Poultry product 2", weight: 600, price: 29, image: "/assets/images/pricing/pricing-product-1-2.png" }
        ],
        "lamb": [
            { id: 1, name: "lamb product 1", weight: 500, price: 59, image: "/assets/images/pricing/pricing-product-1-1.png" },
            { id: 2, name: "lamb product 2", weight: 600, price: 29, image: "/assets/images/pricing/pricing-product-1-2.png" }
        ],
        "goat": [
            { id: 1, name: "goat product 1", weight: 500, price: 59, image: "/assets/images/pricing/pricing-product-1-1.png" },
            { id: 2, name: "goat product 2", weight: 600, price: 29, image: "/assets/images/pricing/pricing-product-1-2.png" }
        ]
    };

    const renderProducts = (products) => {
        return products.map((product) => (
            <div key={product.id} className="w-full md:w-1/2 p-4">
                <div className="pricing-card bg-white flex items-center justify-between p-2 overflow-hidden">
                    <div className="pricing-card__left flex items-center gap-4">
                        <div className="pricing-card__image flex-shrink-0 flex items-center justify-center">
                            <Image width={72} height={21} src={product.image} alt={product.name} className="w-19 h-18" />
                        </div>

                        <div className="pricing-card__name">
                            <h4 className="pricing-card__title text-base sm:text-sm truncate">
                                <a href="/page/product-detail" className="block">{product.name}</a>
                            </h4>
                            <span className="pricing-card__package text-gray-600 whitespace-nowrap text-sm">vacuum package</span>
                        </div>
                    </div>
                    <div className="pricing-card__right flex justify-between items-center text-sm sm:text-xs" >
                        <div className="pricing-card__weight"><span>{product.weight}</span>g</div>
                        <div className="pricing-card__price">$<span>{product.price}</span></div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <>
            <section className="page-header relative" style={{ height: '320px' }}>
                <div className="page-header__bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title font-bold text-white text-center">pricing plan</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <span>pricing plan</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="pricing-one section-space" id="pricing">
                <div className="pricing-one__bg" style={{ backgroundImage: 'url(/assets/images/shapes/pricing-bg-1.png)' }}></div>

                <div className="container mx-auto">
                    <div className="sec-title sec-title--center">

                        <Image width={72} height={21} src="/assets/images/shapes/sec-title-s-1.png" alt="meat assortment" className="sec-title__img" />


                        <h6 className="sec-title__tagline">meat assortment</h6>
                        <h2 className="sec-title__title">Products price</h2>
                    </div>
                    <div className="pricing-one__main-tab-box tabs-box">
                        <ul className="tab-buttons">
                            <li className={`tab-btn boskery-btn ${activeTab === "beaf-meat" ? "active-btn" : ""}`} onClick={() => setActiveTab("beaf-meat")}>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span>Beaf meat</span>
                            </li>
                            <li className={`tab-btn boskery-btn ${activeTab === "turkey" ? "active-btn" : ""}`} onClick={() => setActiveTab("turkey")}>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span>Turkey</span>

                            </li>
                            <li className={`tab-btn boskery-btn ${activeTab === "poultry" ? "active-btn" : ""}`} onClick={() => setActiveTab("poultry")}>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span>Poultry</span>

                            </li>
                            <li className={`tab-btn boskery-btn ${activeTab === "lamb" ? "active-btn" : ""}`} onClick={() => setActiveTab("lamb")}>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span>lamb</span>

                            </li>
                            <li className={`tab-btn boskery-btn ${activeTab === "goat" ? "active-btn" : ""}`} onClick={() => setActiveTab("goat")}>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span className="boskery-btn__hover"></span>
                                <span>goat</span>
                            </li>
                        </ul>
                        <div className="tabs-content">
                            <div className={`tab ${activeTab === "beaf-meat" ? "active-tab" : "active-tab"}`}>
                                <div className="flex flex-wrap">
                                    {renderProducts(productData[activeTab])}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
