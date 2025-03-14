"use client";

import React, { useEffect, useState } from "react";
import PriceRangeFilter from "../../component/PriceRangeFilter";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/product/api/client/product`;  // Sử dụng biến môi trường
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch products.");
      const data = await response.json();

      const formattedProducts = data.data.data.map((item) => {
        // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // Sử dụng biến môi trường cho base URL
        const imagePath = item.thumbnail?.path;

        return {
          id: item.id,
          name: item.name,
          price: item.price,
          thumbnail: imagePath
            ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/file/${imagePath}`
            : "https://via.placeholder.com/150",
          description: item.short_description || "No description available.",
        };
      });

      setProducts(formattedProducts);
    } catch (error) {
      setError(error.message || "An error occurred while fetching products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const loginData = Cookies.get("loginData");
  const userId = loginData ? JSON.parse(loginData).user_id : null;

  const handleAddToCart = async (productId) => {
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
              quantity: 1,
              price: 19.99,
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

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

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
          <h2 className="page-header__title">Shop left sidebar</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>Shop</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="product-page product-page--left section-space-bottom bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <aside className="product__sidebar col-span-1">
              <div className="product__search-box product__sidebar__item">
                <form action="#" className="product__search flex">
                  <input
                    type="text"
                    placeholder="Search Items"
                    className="border border-gray-300 rounded-l px-2 py-1 flex-grow"
                  />
                  <button
                    type="submit"
                    aria-label="search submit"
                    className="bg-gray-300 rounded-r px-3"
                  >
                    <span className="icon-search" />
                  </button>
                </form>
              </div>
              <PriceRangeFilter />
              <div className="product__categories product__sidebar__item">
                <h3 className="product__sidebar__title product__categories__title">
                  Categories
                </h3>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/shop-right" className="text-gray-700">
                      Halal Meat
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="col-span-3 filter-option">
              <div className="flex justify-between items-center mb-4 filter-option-inner">
                <p className="text-lg">
                  Showing 1–{products.length} of {products.length} Results
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white product__item wow fadeInUp animated"
                  >
                    <div className="mb-4">
                      <Link href={`/page/product-detail/${product.id}`}>
                        <Image
                          // src={
                          //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/file/uploads/ ${product.thumbnail}` ||
                          //   "/assets/images/product1.jpg"
                          // }
                          src={product.thumbnail}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-[270px] h-[270px] object-cover"
                        />
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-[#1e1d1d] text-lg font-semibold mb-2 text-center uppercase">
                        <Link href={`/page/product-detail/${product.id}`}>
                          {product.name}
                        </Link>
                      </h4>
                      <div className="text-lg font-bold mb-2 text-center">
                        $ {product.price.toFixed(2)}
                      </div>
                      <div className="flex justify-center">
                        <button
                          onClick={() => handleAddToCart(product.id)}
                          className="px-4 py-2 boskery-btn__text boskery-btn product__item__link flex items-center justify-center mb-5"
                        >
                          <span className="text-white">Add to Cart</span>
                          <i className="icon-meat-3 text-white ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
