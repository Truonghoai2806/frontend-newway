import Image from 'next/image';
import React from 'react';

const products = [
    {
        id: 1,
        name: 'Game birds',
        price: '$82.00',
        image: '/assets/images/products/product-1-7.png',
    },
    {
        id: 2,
        name: 'Ground beef',
        price: '$78.00',
        image: '/assets/images/products/product-1-1.png',
    },
    {
        id: 3,
        name: 'Veal cutlets',
        price: '$33.00',
        image: '/assets/images/products/product-1-2.png',
    },
    {
        id: 4,
        name: 'Lamb chops',
        price: '$49.00',
        image: '/assets/images/products/product-1-3.png',
    },
];

const ProductSection: React.FC = () => {
    return (
        <section className="product-one section-space-two" id="shop">
            <div className="container mx-auto">
                <div className="sec-title sec-title--center ">
                    <Image src="/assets/images/shapes/sec-title-s-1.png" width={10} height={10} alt="featured products" className="sec-title__img flex" />
                    <h6 className="sec-title__tagline">featured products</h6>
                    <h2 className="sec-title__title">popular products</h2>
                </div>
                <div className="row gutter-y-30 flex flex-wrap justify-center gap-7">
                    {products.map((product, index) => (
                        <div key={product.id} className="col-xl-3 col-lg-4 col-sm-6">
                            <div className={`product__item wow fadeInUp animated `} style={{ animationDelay : `${index * 1500}ms` }}>
                                <div className="product__item__image">
                                    <Image src={product.image} width={300} height={300} alt={product.name} />
                                </div>
                                <div className="product__item__content">
                                    <div className="boskery-ratings flex">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                    </div>
                                    <h4 className="product__item__title">
                                        <a href="spage/product-detail">{product.name}</a>
                                    </h4>
                                    <div className="product__item__price">{product.price}</div>
                                    <a href="/page/cart" className="boskery-btn product__item__link">
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__text">Add to Cart</span>
                                        <i className="icon-meat-3"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="product-one__shape">
                <Image src="/assets/images/shapes/product-shape-1-1.png" width={366} height={154} alt="product shape" className="product-one__shape__image" />
            </div>
        </section>
    );
};

export default ProductSection;
