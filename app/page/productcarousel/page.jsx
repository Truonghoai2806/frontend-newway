'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import  Cookies   from 'js-cookie';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]); // Lưu danh sách sản phẩm
  const [isLoading, setIsLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const loginData = Cookies.get("loginData");
        const token = loginData ? JSON.parse(loginData).token : null;
        console.log("Token", token);

        const response = await fetch('/api/client/product',
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();
          
          console.log('API Response:', data.data.data); // Log the response for debugging
          if (Array.isArray(data.data.data)) {
            setProducts(data.data.data); // Set state only if data.data is an array
          } else {
            console.error("The response's data is not an array");
            setProducts([]); // Set an empty array if the data is not an array
          }
        } else {
          console.error("Error fetching data from API");
          setProducts([]); // Set empty array on fetch error
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setProducts([]); // Set empty array in case of error
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <p className="text-center py-8">Đang tải sản phẩm...</p>;
  }



  if (products.length === 0) {
    return <p className="text-center py-8">Không có sản phẩm nào để hiển thị.</p>;
  }

  return (
    <>
      <section className="page-header">
        {/* ... */}
      </section>

      <section className="product-page section-space">
        <div className="container mx-auto">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{ delay: 1500 }}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            breakpoints={{
              1920: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              480: { slidesPerView: 2 },
              300: { slidesPerView: 1 },
            }}
            modules={[Autoplay, Pagination]}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex justify-center item">
                  <div className="product__item wow fadeInUp mx-4">
                    <div className="product__item__image">
                      <Image
                        width={270}
                        height={270}
                        src={product.thumbnail?.path ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/file/${product.thumbnail.path}` : "/images/default-product.png"}
                        alt={product.name || 'Product Image'}
                        className="w-[270px] h-[270px] object-cover"
                      />
                    </div>
                    <div className="product__item__content">
                      <div className="boskery-ratings">
                        {/* Hiển thị rating, nếu có */}
                        {Array(product.rating || 5)
                          .fill(0)
                          .map((_, index) => (
                            <span key={index} className="icon-star" />
                          ))}
                      </div>
                      <h4 className="product__item__title">
                        <a href={`/page/product-detail/${product.id}`}>
                          {product.name}
                        </a>
                      </h4>
                      <div className="product__item__price">
                        ${product.price.toFixed(2)}
                      </div>
                      <a
                        href="/page/cart"
                        className="boskery-btn product__item__link"
                      >
                        <span className="boskery-btn__text">Add to Cart</span>
                        <i className="icon-meat-3" />
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
              position: 'relative',
              marginTop: '100px',
              display: 'flex',
              justifyContent: 'center',
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
      </section>
    </>
  );
};

export default ProductCarousel;
