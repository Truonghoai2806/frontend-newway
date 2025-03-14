import React from "react";
import PriceRangeFilter from "./../../component/PriceRangeFilter";
import Image from "next/image";
import Link from "next/link";

// Lấy dữ liệu sản phẩm từ API nội bộ
async function fetchProducts() {
  const response = await fetch(`https://api-core.dsp.one/api/auth/product`, {
    next: { revalidate: 60 }, // Revalidate sau mỗi 60 giây
  });
  const data = await response.json();
  return data; // Đảm bảo rằng dữ liệu trả về là mảng hoặc có thuộc tính 'data' là mảng
}

export default async function Product({ searchParams }) {
  const currentPage = parseInt(searchParams.page) || 1;  // Lấy trang từ searchParams hoặc mặc định là trang 1
  const result = await fetchProducts();
  
  // Kiểm tra nếu 'result' là mảng, nếu không trả về mảng trống
  const products = Array.isArray(result) ? result : result.data || [];

  // Giới hạn số lượng sản phẩm trên mỗi trang
  const itemsPerPage = 9;

  // Tính số lượng sản phẩm trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsForPage = products.slice(startIndex, endIndex);

  // Tính tổng số trang
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        />
        <div className="container mx-auto">
          <h2 className="page-header__title">Shop left sidebar</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
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
              <div className="product__categories product__sidebar__item mt-[30px]">
                <h3 className="relative text-[16px] font-bold leading-4 uppercase text-[#1E1D1D] mt-[-1px] mb-5">
                  Categories
                </h3>
                <ul className="list-unstyled">
                  <li><a href="/page/product" className="text-gray-700">Halal Meat</a></li>
                  <li><a href="/page/product" className="text-gray-700">Kosher Meat</a></li>
                  <li><a href="/page/product" className="text-gray-700">Roasted Meat</a></li>
                  <li><a href="/page/product" className="text-gray-700">Organ Meat</a></li>
                  <li><a href="/page/product" className="text-gray-700">Game Meat</a></li>
                </ul>
              </div>
            </aside>

            <div className="col-span-3 filter-option">
              <div className="flex justify-between items-center mb-4 filter-option-inner">
                <p className="text-lg">Showing {productsForPage.length} Results</p>
                <div className="relative dropdown-menu inner show product__showing-sort">
                  <select className="w-full filter-option-inner-inner py-2 pl-3 pr-10 text-gray-700 selected active dropdown-item">
                    <option selected>Default sorting</option>
                    <option value={1}>Sort by view</option>
                    <option value={2}>Sort by price</option>
                    <option value={3}>Sort by ratings</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 product__item">
                {productsForPage.map((product) => (
                  <div key={product.id} className="bg-white product__item wow fadeInUp animated">
                    <div className="mb-4">
                      <Link href={`/page/product-detail/${product.id}`}>
                        <Image
                          src={product.avatar || "/default-product.jpg"}
                          alt={product.name || "Product"}
                          width={100}
                          height={100}
                          className="w-full h-full product__item__image"
                        />
                      </Link>
                    </div>
                    <div className="">
                      <div className="flex space-x-1 mb-1 item-center justify-center">
                        {[...Array(5)].map((_, starIndex) => (
                          <span key={starIndex} className="text-[#a42125]">
                            <i className="icon-star " />
                          </span>
                        ))}
                      </div>
                      <h4 className="text-[#1e1d1d] text-lg font-semibold mb-2 text-center uppercase">
                        <a href={`/product-detail/${product.id}`}>{product.name}</a>
                      </h4>
                      <div className="text-lg font-bold mb-2 text-center">
                        $ {product.price || Math.floor(Math.random() * 100) + 20}.00
                      </div>
                      <div className="flex justify-center">
                        <a
                          href="/page/cart"
                          className="px-4 py-2 boskery-btn__text boskery-btn product__item__link flex items-center justify-center mb-5"
                        >
                          <span className="text-white">Add to Cart</span>
                          <i className="icon-meat-3 text-white ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ul className="flex justify-center space-x-4 post-pagination">
                  {currentPage > 1 && (
                    <li>
                      <Link href={`/page/test?page=${currentPage - 1}`} className="flex items-center text-gray-600">
                        <span className="icon-arrow-left" />
                      </Link>
                    </li>
                  )}
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                      <Link
                        href={`/page/test?page=${index + 1}`}
                        className={`text-gray-600 ${currentPage === index + 1 ? 'font-bold' : ''}`}
                      >
                        {index + 1}
                      </Link>
                    </li>
                  ))}
                  {currentPage < totalPages && (
                    <li>
                      <Link href={`/page/test?page=${currentPage + 1}`} className="flex items-center text-gray-600">
                        <span className="icon-arrow-right" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
