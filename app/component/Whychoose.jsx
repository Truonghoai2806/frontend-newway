import Image from "next/image";
import React from "react";

function Whychosse() {
  return (
    <section className="why-choose-one section-space-two">
      <div className="container mx-auto">
        <div className="sec-title sec-title--center">
          <Image
            width={72}
            height={21}
            src="/assets/images/shapes/sec-title-s-1.png"
            alt="meat assortment"
            className="sec-title__img"
          />
          <h6 className="uppercase text-red-800">why choose us</h6>
          <h2 className="uppercase text-6xl font-semibold ">
            We Provide Best Meat <br /> From Our Farm
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-8">
            <div className=" p-6 flex items-center space-x-4 border-b border-gray-200">
              <div className="p-4 bg-white rounded-full w-[85px] h-[70px]   text-red-500 flex items-center justify-center relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden">
                <span className="icon-grass text-3xl text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <div>
                <h4 className="text-[20px] font-bold uppercase">100% Grass-Fed</h4>
                <p className="text-gray-600">
                  A meat shop is a retail establishment that specializes in
                </p>
              </div>
            </div>

            <div className=" p-6 flex items-center space-x-4 border-b border-gray-200">
              <div className="p-4 bg-white rounded-full w-[85px] h-[70px]   text-red-500 flex items-center justify-center relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden">
                <span className="icon-fast-delivery text-3xl text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <div>
                <h4 className="text-[20px] font-bold uppercase">
                  Free Home Delivery
                </h4>
                <p className="text-gray-600">
                  A meat shop is a retail establishment that specializes in
                </p>
              </div>
            </div>

            <div className=" p-6 flex items-center space-x-4 border-b border-gray-200">
              <div className="p-4 bg-white rounded-full w-[85px] h-[70px]   text-red-500 flex items-center justify-center relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden">
                <span className="icon-achievement text-3xl text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <div>
                <h4 className="text-[20px] font-bold uppercase">Quality Control</h4>
                <p className="text-gray-600 w-full">
                  A meat shop is a retail establishment that specializes in
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/shapes/why-choose-shape-1-1.png"
              alt="why-choose-shape"
              className="animate-zump"
              width={364}
              height={351}
            />
          </div>

          <div className="flex flex-col space-y-7">
            <div className=" p-6 flex items-center space-x-5 border-b border-gray-200 ">
              <div className="p-4 bg-white rounded-full w-[85px] h-[70px]  text-red-500 flex items-center justify-center relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden ">
                <span className="icon-no-preservatives text-3xl text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <div>
                <h4 className="text-[20px] font-bold uppercase">No Chemical Use</h4>
                <p className="text-gray-600">
                  A meat shop is a retail establishment that specializes in
                </p>
              </div>
            </div>

            <div className=" p-6 flex items-center space-x-4 border-b border-gray-200 ">
              <div className="p-4 bg-white rounded-full w-[85px] h-[70px]   text-red-500 flex items-center justify-center relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden ">
                <span className="icon-healthcare-1 text-3xl text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <div>
                <h4 className="text-[20px] font-bold uppercase">
                  Health and Safety
                </h4>
                <p className="text-gray-600">
                  A meat shop is a retail establishment that specializes in
                </p>
              </div>
            </div>

            <div className=" p-6 flex items-center space-x-4 border-b border-gray-200">
              <div className="p-4 bg-white rounded-full w-[85px] h-[70px]   text-red-500 flex items-center justify-center relative after:absolute after:top-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:transition-all after:duration-500 after:bg-red-800 z-[1] overflow-hidden">
                <span className="icon-meat text-3xl text-[#A42125] transition-all duration-500 hover:text-white z-[2]"></span>
              </div>
              <div>
                <h4 className="text-[20px] font-bold uppercase">
                  100% Fresh Produce
                </h4>
                <p className="text-gray-600">
                  A meat shop is a retail establishment that specializes in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whychosse;
