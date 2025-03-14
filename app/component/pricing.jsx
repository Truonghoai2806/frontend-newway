import Image from "next/image";
import React from "react";
function Pricing() {
  return (
    <section className="pricing-one pricing-one--home section-space-two">
      <div className="container mx-auto">
        <div className="sec-title sec-title--center">
          <Image
            src="/assets/images/shapes/sec-title-s-1.png"
            width={72} // Đặt chiều rộng cho hình ảnh
            height={21} // Đặt chiều cao cho hình ảnh
            alt="meat assortment"
            className="sec-title__img"
          />
          <h6 className="uppercase text-red-800">meat assortment</h6>
          <h2 className="uppercase text-6xl font-semibold max-[300]:text-[33px] ">
            Products price
          </h2>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center items-center gap-8 space-x-4 sm:space-x-2 border-b border-gray-200">
            <li data-tab="#beaf-meat" className="tab-btn hover:text-red-800 cursor-pointer ">
              <i className="flex items-center justify-center bg-red-800 z-[1] overflow-hidden w-[70px] h-[70px] text-[40px] text-[#F6F2EC] rounded-full mb-[17px]">
                <span className="icon-meat-5"></span>
              </i>
              <span className="cursor-pointer uppercase text-[16px] font-bold text-[#1E1D1D]">
                Beaf meat
              </span>
            </li>
            <li data-tab="#beaf-meat" className="tab-btn hover:text-gray-900">
              <div className="w-[70px] h-[70px] cursor-pointer flex items-center justify-center bg-[#F6F2EC] rounded-full mb-[17px] relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden">
                <span className="icon-chicken-leg text-[40px] text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <span className="cursor-pointer uppercase text-[16px] font-bold text-[#1E1D1D] hover:text-[#A42125] transition-all duration-500">
                Turkey
              </span>
            </li>
            <li data-tab="#beaf-meat" className="tab-btn hover:text-gray-900">
              <div className="w-[70px] h-[70px] cursor-pointer flex items-center justify-center bg-[#F6F2EC] rounded-full mb-[17px] relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden">
                <span className="icon-chicken text-[40px] text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <span className="cursor-pointer uppercase text-[16px] font-bold text-[#1E1D1D] hover:text-[#A42125] transition-all duration-500">
                Poultry
              </span>
            </li>
            <li data-tab="#beaf-meat" className="tab-btn hover:text-gray-900">
              <div className="w-[70px] h-[70px] cursor-pointer flex items-center justify-center bg-[#F6F2EC] rounded-full mb-[17px] relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden">
                <span className="icon-meat-6 text-[40px] text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <span className="cursor-pointer uppercase text-[16px] font-bold text-[#1E1D1D] hover:text-[#A42125] transition-all duration-500">
                Lamb
              </span>
            </li>
            <li data-tab="#beaf-meat" className="tab-btn hover:text-gray-900">
              <div className="w-[70px] h-[70px] cursor-pointer flex items-center justify-center bg-[#F6F2EC] rounded-full mb-[17px] relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden">
                <span className="icon-meat-7 text-[40px] text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <span className="cursor-pointer uppercase text-[16px] font-bold text-[#1E1D1D] hover:text-[#A42125] transition-all duration-500">
                Goat
              </span>
            </li>
            <li data-tab="#beaf-meat" className="tab-btn hover:text-gray-900">
              <div className="w-[70px] h-[70px] cursor-pointer flex items-center justify-center bg-[#F6F2EC] rounded-full mb-[17px] relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden">
                <span className="icon-meat-8 text-[40px] text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <span className="cursor-pointer uppercase text-[16px] font-bold text-[#1E1D1D] hover:text-[#A42125] transition-all duration-500">
                Rabbit
              </span>
            </li>
          </ul>

          <div className="tabs-content">
            <div className="tab active-tab fadeInUp animated">
              <div className="row gutter-y-30">
                <div className="gutter-y-30 w-full">
                  <div className="flex flex-wrap mx-[15px]">
                    <div className="w-full md:w-1/2 py-4">
                      <div className="items-center bg-white rounded-lg p-4 mb-4 pl-0 pb-[30px] flex flex-col md:flex-row justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/images/pricing/pricing-product-1-1.png"
                            alt="Rabbit with mustard"
                            width={76} // Set image width
                            height={75} // Set image height
                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-lg font-semibold text-gray-800">
                            <a
                              href="page/product-detail"
                              className="text-[#1e1d1d] text-[18px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Rabbit with mustard
                            </a>
                          </h4>
                          <span className="block text-gray-500 text-[16px]">
                            vacuum package
                          </span>
                        </div>
                        <div className="text-right ml-auto md:w-29 w-full flex justify-center md:justify-between items-center gap-5">
                          <div className="text-gray-600 text-[18px]">
                            <span className="font-bold text-[18px]">500g</span>
                          </div>
                          <div className="text-red-800 font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      {/* Các sản phẩm khác */}
                      <div className="items-center bg-white rounded-lg p-4 mb-4 pl-0 pb-[30px] flex flex-col md:flex-row justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/images/pricing/pricing-product-1-2.png" // Hình ảnh khác cho sản phẩm thứ hai
                            alt="Beef with mint"
                            width={76}
                            height={75}

                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-lg font-semibold text-gray-800">
                            <a
                              href="page/product-detail"
                              className="text-[#1e1d1d] text-[18px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Beef with mint
                            </a>
                          </h4>
                          <span className="block text-gray-500 text-[16px]">
                            vacuum package
                          </span>
                        </div>
                        <div className="text-right ml-auto md:w-29 w-full flex justify-center md:justify-between items-center gap-5">
                          <div className="text-gray-600 text-[18px]">
                            <span className="font-bold text-[18px]">500g</span>
                          </div>
                          <div className="text-red-800 text-[18px] font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      {/* Tiếp tục cho các sản phẩm khác */}
                      <div className="items-center bg-white rounded-lg p-4 mb-4 pl-0 pb-[30px] flex flex-col md:flex-row justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/images/pricing/pricing-product-1-3.png"
                            alt="Beef tongue"
                            width={76}
                            height={75}

                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-lg font-semibold text-gray-800">
                            <a
                              href="page/product-detail"
                              className="text-[#1e1d1d] text-[18px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Beef tongue
                            </a>
                          </h4>
                          <span className="block text-gray-500 text-[16px]">
                            vacuum package
                          </span>
                        </div>
                        <div className="text-right ml-auto md:w-29 w-full flex justify-center md:justify-between items-center gap-5">
                          <div className="text-gray-600 text-[18px]">
                            <span className="font-bold text-[18px]">500g</span>
                          </div>
                          <div className="text-red-800 text-[18px] font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      <div className="items-center bg-white rounded-lg p-4 mb-4 pl-0 pb-[30px] flex flex-col md:flex-row justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/images/pricing/pricing-product-1-3.png"
                            alt="Beef tongue"
                            width={76}
                            height={75}

                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-lg font-semibold text-gray-800">
                            <a
                              href="page/product-detail"
                              className="text-[#1e1d1d] text-[18px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Beef tongue
                            </a>
                          </h4>
                          <span className="block text-gray-500 text-[16px]">
                            vacuum package
                          </span>
                        </div>
                        <div className="text-right ml-auto md:w-29 w-full flex justify-center md:justify-between items-center gap-5">
                          <div className="text-gray-600 text-[18px]">
                            <span className="font-bold text-[18px]">500g</span>
                          </div>
                          <div className="text-red-800 text-[18px] font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 py-4">
                      {/* Tiếp tục thêm các sản phẩm khác tương tự */}
                      <div className="items-center bg-white rounded-lg p-4 pr-0 mb-4 pb-[30px] flex flex flex-col md:flex-row justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/images/pricing/pricing-product-1-4.png"
                            alt="Veal entrecote"
                            width={76}
                            height={75}

                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-lg font-semibold text-gray-800">
                            <a
                              href="page/product-detail"
                              className="text-[#1e1d1d] text-[18px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Veal entrecote
                            </a>
                          </h4>
                          <span className="block text-gray-500 text-[16px]">
                            vacuum package
                          </span>
                        </div>
                        <div className="text-right ml-auto md:w-29 w-full flex justify-center md:justify-between items-center gap-5">
                          <div className="text-gray-600 text-[18px]">
                            <span className="font-bold text-[18px]">500g</span>
                          </div>
                          <div className="text-red-800 text-[18px] font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      <div className="items-center bg-white rounded-lg p-4 pr-0 mb-4 pb-[30px] flex flex flex-col md:flex-row justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/images/pricing/pricing-product-1-5.png"
                            alt="Lamb rack"
                            width={76}
                            height={75}

                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-lg font-semibold text-gray-800">
                            <a
                              href="page/product-detail"
                              className="text-[#1e1d1d] text-[18px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Lamb rack
                            </a>
                          </h4>
                          <span className="block text-gray-500 text-[16px]">
                            vacuum package
                          </span>
                        </div>
                        <div className="text-right ml-auto md:w-29 w-full flex justify-center md:justify-between items-center gap-5">
                          <div className="text-gray-600 text-[18px]">
                            <span className="font-bold text-[18px]">500g</span>
                          </div>
                          <div className="text-red-800 text-[18px] font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      <div className="items-center bg-white rounded-lg p-4 pr-0 mb-4 pb-[30px] flex flex flex-col md:flex-row justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/images/pricing/pricing-product-1-6.png"
                            alt="Lamb shank"
                            width={76}
                            height={75}

                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h4 className="text-lg font-semibold text-gray-800">
                            <a
                              href="page/product-detail"
                              className="text-[#1e1d1d] text-[18px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Lamb shank
                            </a>
                          </h4>
                          <span className="block text-gray-500 text-[16px]">
                            vacuum package
                          </span>
                        </div>
                        <div className="text-right ml-auto md:w-29 w-full flex justify-center md:justify-between items-center gap-5">
                          <div className="text-gray-600 text-[18px]">
                            <span className="font-bold text-[18px]">500g</span>
                          </div>
                          <div className="text-red-800 text-[18px] font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                      <div className="items-center bg-white rounded-lg p-4 pr-0 mb-4 pb-[30px] flex flex flex-col md:flex-row justify-between bg-transparent gap-[30px] shadow-none border-b border-dashed border-[#EBE3D9]">
                        <div className="flex-shrink-0">
                          <Image
                            src="/assets/images/pricing/pricing-product-1-6.png"
                            alt="Lamb shank"
                            width={76}
                            height={75}

                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">

                          <h4 className="text-lg font-semibold text-gray-800">
                            <a
                              href="page/product-detail"
                              className="text-[#1e1d1d] text-[18px] uppercase hover:text-red-800 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bg-red-800"
                            >
                              Lamb shank
                            </a>
                          </h4>
                          <span className="block text-gray-500 text-[16px]">
                            vacuum package
                          </span>
                        </div>
                        <div className="text-right ml-auto md:w-29 w-full flex justify-center md:justify-between items-center gap-5">
                          <div className="text-gray-600 text-[18px]">
                            <span className="font-bold text-[18px]">500g</span>
                          </div>
                          <div className="text-red-800 text-[18px] font-bold">
                            <span>$59</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
