import Image from "next/image";
import React from "react";

function GalleryFilter() {
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
          <h2 className="page-header__title">gallery filter</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/page/galleryfillter" className="hover:underline"><span>our gallery</span></a>
            </li>
          </ul>
        </div>
      </section>
      <section className="gallery-page section-space">
        <div className="container mx-auto">
          <div className="text-center">
            <ul className="list-unstyled post-filter gallery-page__filter__list flex">
              <li className="boskery-btn active" data-filter=".filter-item">
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span>all</span>
              </li>
              <li className="boskery-btn" data-filter=".ground-beef">
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li className="boskery-btn" data-filter=".ground-beef">
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li className="boskery-btn" data-filter=".ground-beef">
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li className="boskery-btn" data-filter=".ground-beef">
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li className="boskery-btn" data-filter=".ground-beef">
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
              <li className="boskery-btn" data-filter=".ground-beef">
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span className="boskery-btn__hover"></span>
                <span>Ground beef</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 xl:grid xl:grid-cols-3 xl:grid-rows-8 xl:gap-4">
            <div className="xl:row-span-4 sm:row-span-6">
              <div className="gallery-page__card relative">
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/gallery/gallery-1-1.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href="/assets/images/gallery/gallery-1-1.jpg" className="img-popup text-white">
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:row-span-2 sm:row-span-3">
              <div className="gallery-page__card relative">
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/gallery/gallery-1-2.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href="/assets/images/gallery/gallery-1-2.jpg" className="img-popup text-white">
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:row-span-2 xl:col-start-3 xl:row-start-1 sm:row-span-3 sm:col-start-2 sm:row-start-4">
              <div className="gallery-page__card relative">
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/gallery/gallery-1-3.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href="/assets/images/gallery/gallery-1-3.jpg" className="img-popup text-white">
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-2 xl:col-start-2 xl:row-start-3 sm:row-span-2 sm:row-start-7">
            <div className="gallery-page__card relative">
                <Image
                  width={770}
                  height={370}
                  src="/assets/images/gallery/gallery-1-4.jpg"
                  alt="gallery image"
                  className="w-full h-auto"
                />
                <div className="gallery-page__card__hover absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href="/assets/images/gallery/gallery-1-4.jpg" className="img-popup text-white">
                    <span className="gallery-page__card__icon"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:row-span-2 xl:row-start-5 sm:row-span-2 sm:col-start-1 sm:row-start-9">
        
              <Image
                width={500}
                height={500}
                src="/assets/images/gallery/gallery-1-2.jpg"
                alt="gallery image"
                className="w-full h-auto"
              />
              <div className="gallery-page__card__hover absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a href="/assets/images/gallery/gallery-1-2.jpg" className="img-popup text-white">
                  <span className="gallery-page__card__icon"></span>
                </a>
              </div>
              
            </div>

            <div className="xl:row-span-2 xl:row-start-5 sm:row-span-3 sm:col-start-2 sm:row-start-7">
              <Image
                width={500}
                height={500}
                src="/assets/images/gallery/gallery-1-3.jpg"
                alt="gallery image"
                className="w-full h-auto"
              />
              <div className="gallery-page__card__hover absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a href="/assets/images/gallery/gallery-1-3.jpg" className="img-popup text-white">
                  <span className="gallery-page__card__icon"></span>
                </a>
              </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-2 xl:col-start-1 xl:row-start-7 sm:row-span-2 sm:col-start-1 sm:row-start-11">
            <div className="gallery-page__card relative">
              <Image
                width={770}
                height={370}
                src="/assets/images/gallery/gallery-1-4.jpg"
                alt="gallery image"
                className="w-full h-auto"
              />
             
              <div className="gallery-page__card__hover absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a href="/assets/images/gallery/gallery-1-4.jpg" className="img-popup text-white">
                  <span className="gallery-page__card__icon"></span>
                </a>
              </div>
              </div>
            </div>

            <div className="xl:row-span-4 xl:col-span-2 xl:col-start-3 xl:row-start-5 sm:row-span-4 sm:col-start-2 sm:row-start-10">
           
            <div className="gallery-page__card relative">
              <Image
                width={500}
                height={500}
                src="/assets/images/gallery/gallery-1-1.jpg"
                alt="gallery image"
                className="w-full h-auto"
              />
              <div className="gallery-page__card__hover absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a href="/assets/images/gallery/gallery-1-1.jpg" className="img-popup text-white">
                  <span className="gallery-page__card__icon"></span>
                </a>
              </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}

export default GalleryFilter;
