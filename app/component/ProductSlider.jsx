"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from "next/navigation";
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [setThumbsSwiper] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api-core.dsp.one/api/client/product/${id}`
        );
        if (response.status === 200) {
          setProduct(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(true);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <p className="text-red-500 text-center">Không thể tải dữ liệu sản phẩm.</p>;
  }

  if (!product) {
    return <p className="text-center">Đang tải dữ liệu...</p>;
  }

  return (
    <section className="product-details__gallery-top mx-auto">
      <div className="flex flex-col items-center">
        {/* Phần Swiper chính */}
        <div className="w-[570px] wow fadeInLeft" data-wow-delay="200ms">
          <div className="product-details__img">
            <Swiper
              spaceBetween={10}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSlideChange={(swiper) => setActiveImage(swiper.activeIndex)}
              modules={[Navigation, Pagination, Autoplay]}
              className="w-[570px] h-[570px]"
            >
              <SwiperSlide>
                <div className="flex items-center justify-center bg-[#F6F2EC] h-full">
                  <Image
                    src={`https://api-core.dsp.one/api/auth/file/${product.thumbnail.path}`}
                    width={570}
                    height={570}
                    alt={product.name}
                    className="block object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Phần hình ảnh nhỏ */}
        <div className="flex space-x-4 mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode
            watchSlidesProgress
            className="w-[300px]"
            modules={[Thumbs]}
          >
            <SwiperSlide>
              <div
                className={`w-[100px] h-[100px] flex items-center justify-center bg-[#F6F2EC] cursor-pointer ${
                  activeImage === 0 ? 'border-2 border-blue-500' : ''
                }`}
              >
                <Image
                  src={`https://api-core.dsp.one/api/auth/file/${product.thumbnail.path}`}
                  width={100}
                  height={100}
                  alt="thumbnail"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
