
'use client';
import { useState, useEffect } from 'react';
import ProductSlider from '../../../component/ProductSlider';
import axios from 'axios';
import { useParams } from "next/navigation";
import Image from 'next/image';
import Cookies from "js-cookie";



export default function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1);
  const [setError] = useState(false);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://api-core.dsp.one/api/client/product/${id}`);
        if (response.status === 200) {
          setProduct(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(true);
      }
    };
    fetchProducts();
  }, [id, setError]);

    const loginData = Cookies.get("loginData");
    const userId = loginData ? JSON.parse(loginData).user_id : null;

  const AddToCart = async (productId) => {
    try {
      const response = await fetch("/api/auth/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_id: userId,
          address: "test address",
          details: [
            {
              product_id: productId,
              quantity: quantity,
              price: product.price,
              total_price_detail: 0,
            },
          ],
          shipping_unit: "test address",
        }),
      });

      if (!response.ok) {
        throw new Error("Không thể thêm sản phẩm vào giỏ hàng. Vui lòng thử lại.");
      }

      const data = await response.json();
      console.log("Thêm vào giỏ hàng thành công:", data);

      alert("Sản phẩm đã được thêm vào giỏ hàng!");
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error.message);
      alert(error.message || "Đã xảy ra lỗi không xác định.");
    }
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
          <h2 className="page-header__title text-[55px] font-bold text-white text-center">PRODUCT DETAILS</h2>
          <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <span>PRODUCTS DETAILS</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="product-details section-space">
        <div className="product-details__gallery-top container mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <ProductSlider />

            {/* Right Column */}
            <div className="wow fadeInRight animated" data-wow-delay="300ms">
              {/* {product((product) => ( */}
              <>
                <div className="product-details__content">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2 items-center gap-[21px]">
                      <h3 className="product-details__name text-2xl font-bold">
                        {product ? product.name : "Loading..."}
                      </h3>
                      <h4 className="product-details__price text-xl text-gray-700">{product ? product.price : "Loading..."}</h4>
                    </div>
                    <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="video-button">
                      <span className="icon-play"></span>
                    </a>
                  </div>
                  <div className="product-details__review mb-4">
                    <div className="boskery-ratings">
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className="icon-star"></span>
                      ))}
                    </div>
                    <a href="/page/product-detail/1">(3 customer reviews)</a>
                  </div>
                  <div className="product-details__excerpt mb-4">
                    <p>
                      {product ? product.short_description: "Loading..."}

                    </p>
                  </div>
                  <div className="product-details__color mb-4">
                    <h3 className="product-details__content__title">Color</h3>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((color) => (
                        <button key={color} className={`product-details__color__btn product-details__color__btn--${color}`}>
                          <span></span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="product-details__size mb-4">
                    <h3 className="product-details__content__title">Size</h3>
                    <div className="flex space-x-2">
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <button key={size} className="product-details__size__btn">
                          <span>{size}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="product-details__info mb-4 flex">
                    <div className="product-details__quantity mb-4 flex">
                      <h3 className="product-details__content__title">Quantity</h3>
                      <div className="quantity-box flex items-center">
                        <button type="button" className="sub" onClick={decreaseQuantity}><i className="fa fa-minus"></i></button>
                        <input type="text" id="1" value={quantity} readOnly className="mx-2 w-12 text-center" />
                        <button type="button" className="add" onClick={increaseQuantity}><i className="fa fa-plus"></i></button>
                      </div>
                    </div>
                    <div className="product-details__socials mb-4">
                      <h3 className="product-details__socials__title">Share:</h3>
                      <div className="boskery-social flex space-x-2">
                        {['facebook', 'twitter', 'linkedin', 'youtube'].map((platform) => (
                          <a key={platform} href={`https://${platform}.com`}>
                            <i className={`fab fa-${platform}`} aria-hidden="true"></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="product-details__buttons">
                    <button onClick={AddToCart} className="product-details__btn boskery-btn">
                      <span className="boskery-btn__hover"></span>
                      <span className="boskery-btn__hover"></span>
                      <span className="boskery-btn__hover"></span>
                      <span className="boskery-btn__hover"></span>
                      <span className="boskery-btn__hover"></span>
                      <span className="boskery-btn__hover"></span>
                      <span className="boskery-btn__text">Add To Cart</span>
                      <i className="icon-meat-3"></i>
                    </button>
                  </div>
                </div>
              </>
              {/* ))} */}
            </div>
          </div>

          {/* Product Description */}
          <div className="product-details__description-wrapper mt-10">
            <div className="container">
              <div className="product-details__description">
                <h3 className="product-details__description__title">Product Description</h3>
                <div className="product-details__text__box wow fadeInUp animated" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                  <p className="product-details__description__text">
                    {product ? product.description: "Loading..."}
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* End of Product Description */}

          <div className="container">
            <div className="comments-one product-details__comment">
              <h3 className="comments-one__title">02 reviews, for Organ Meat</h3>
              <ul className="list-unstyled comments-one__list">
                <li className="comments-one__card wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                  <div className="comments-one__card__image">
                    <Image src="/assets/images/blog/blog-comment-1-1.png" width={70} height={70} alt="Kevin martin" />
                  </div>
                  <div className="comments-one__card__content">
                    <div className="comments-one__card__top">
                      <div className="comments-one__card__info">
                        <h3 className="comments-one__card__title">Kevin martin</h3>
                        <p className="comments-one__card__date">March 20, 2023 at 2:37 pm</p>
                      </div>
                      <div className="boskery-ratings">
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                      </div>
                    </div>
                    <p className="comments-one__card__text">Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                  </div>
                </li>
                <li className="comments-one__card wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                  <div className="comments-one__card__image">
                    <Image src="/assets/images/blog/blog-comment-1-2.png" width={70} height={70} alt="Sarah albert" />
                  </div>
                  <div className="comments-one__card__content">
                    <div className="comments-one__card__top">
                      <div className="comments-one__card__info">
                        <h3 className="comments-one__card__title">Sarah albert</h3>
                        <p className="comments-one__card__date">March 20, 2023 at 2:37 pm</p>
                      </div>
                      <div className="boskery-ratings">
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                      </div>
                    </div>
                    <p className="comments-one__card__text">Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Review Form */}
          <div className="product-details__comments-form comments-form mt-10">
            <div className="product-details__comments-form__top">
              <h3 className="product-details__comments-form__title comments-form__title sec-title__title">Add a Review</h3>
              <p className="product-details__comments-form__text">Your email address will not be published. Required fields are marked *</p>
              <div className="product-details__comments-form__ratings">
                <h5 className="product-details__comments-form__ratings__text">Rate this product? *</h5>
                <div className="boskery-ratings">
                  <span className="icon-star"></span>
                  <span className="icon-star"></span>
                  <span className="icon-star"></span>
                  <span className="icon-star"></span>
                  <span className="icon-star"></span>
                </div>
              </div>
            </div>
            <form action="/assets/inc/sendemail.php" className="comments-form__form contact-form-validated form-one">
              <div className="form-one__group form-one__group--grid">
                <div className="form-one__control wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                  <input type="text" name="name" placeholder="Your Name" />
                </div>
                <div className="form-one__control wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="50ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '50ms', animationName: 'fadeInUp' }}>
                  <input type="email" name="email" placeholder="Your Email" />
                </div>
                <div className="form-one__control form-one__control--full wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="100ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                  <textarea name="message" placeholder="Write Message . ."></textarea>
                </div>
                <div className="form-one__control form-one__control--full wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="150ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '150ms', animationName: 'fadeInUp' }}>
                  <button type="submit" className="boskery-btn">
                    <span className="boskery-btn__hover"></span>
                    <span className="boskery-btn__hover"></span>
                    <span className="boskery-btn__hover"></span>
                    <span className="boskery-btn__hover"></span>
                    <span className="boskery-btn__hover"></span>
                    <span className="boskery-btn__hover"></span>
                    <span className="boskery-btn__text">post review</span>
                    <i className="icon-meat-3"></i>
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </div>
        </div>
      </section>
    </>
  );
}
