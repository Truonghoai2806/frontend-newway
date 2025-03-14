import React from 'react';

const FaqOne = () => {
  return (
    <section className="faq-one">
      <div className="faq-one__bg faq-one__bg--1 bg-cover" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-bg-1-1.jpg)' }}></div>
      <div className="faq-one__bg faq-one__bg--2 bg-cover" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-bg-1-2.jpg)' }}></div>
      <div className="faq-one__bg faq-one__bg--3 active bg-cover" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-bg-1-3.jpg)' }}></div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* FAQ Item 1 */}
          <div className="col-lg-4 faq-one__col wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="00ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'none' }}>
            <div className="faq-one__item" style={{ width: '370px', height: '474px' }}>
              <div className="faq-one__content">
                <div className="faq-one__content__bg bg-cover" style={{ backgroundImage: 'url(assets/images/shapes/faq-shape-bg-1-1.png)' }}></div>
                <h4 className="faq-one__title text-xl font-bold">Veal Entrecote</h4>
                <span className="faq-one__content__icon"></span>
              </div>
              <div className="faq-one__hover">
                <div className="faq-one__hover__bg bg-cover" style={{ backgroundImage: 'url(assets/images/shapes/faq-shape-bg-1-1.png)' }}></div>
                <div className="faq-one__hover__inner">
                  <div className="faq-one__hover__top-icon"></div>
                  <div className="faq-one__hover__icon">
                    <span className="icon-chicken-1"></span>
                  </div>
                  <h4 className="faq-one__hover__title faq-one__title text-xl font-bold">Veal Entrecote</h4>
                  <p className="faq-one__hover__text">A meat shop is a retail establishment that specializes in selling various cuts and types of meat including beef, meats.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="col-lg-4 faq-one__col wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="200ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'none' }}>
            <div className="faq-one__item" style={{ width: '370px', height: '474px' }}>
              <div className="faq-one__content">
                <div className="faq-one__content__bg bg-cover" style={{ backgroundImage: 'url(assets/images/shapes/faq-shape-bg-1-1.png)' }}></div>
                <h4 className="faq-one__title text-xl font-bold">Beef Tenderloin</h4>
                <span className="faq-one__content__icon"></span>
              </div>
              <div className="faq-one__hover">
                <div className="faq-one__hover__bg bg-cover" style={{ backgroundImage: 'url(assets/images/shapes/faq-shape-bg-1-1.png)' }}></div>
                <div className="faq-one__hover__inner">
                  <div className="faq-one__hover__top-icon"></div>
                  <div className="faq-one__hover__icon">
                    <span className="icon-duck"></span>
                  </div>
                  <h4 className="faq-one__hover__title faq-one__title text-xl font-bold">Beef Tenderloin</h4>
                  <p className="faq-one__hover__text">A meat shop is a retail establishment that specializes in selling various cuts and types of meat including beef, meats.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="col-lg-4 faq-one__col wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="400ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '400ms', animationName: 'none' }}>
            <div className="faq-one__item" style={{ width: '370px', height: '474px' }}>
              <div className="faq-one__content">
                <div className="faq-one__content__bg bg-cover" style={{ backgroundImage: 'url(assets/images/shapes/faq-shape-bg-1-1.png)' }}></div>
                <h4 className="faq-one__title text-xl font-bold">Beef Ribs Foreign</h4>
                <span className="faq-one__content__icon"></span>
              </div>
              <div className="faq-one__hover">
                <div className="faq-one__hover__bg bg-cover" style={{ backgroundImage: 'url(assets/images/shapes/faq-shape-bg-1-1.png)' }}></div>
                <div className="faq-one__hover__inner">
                  <div className="faq-one__hover__top-icon"></div>
                  <div className="faq-one__hover__icon">
                    <span className="icon-cow"></span>
                  </div>
                  <h4 className="faq-one__hover__title faq-one__title text-xl font-bold">Beef Ribs Foreign</h4>
                  <p className="faq-one__hover__text">A meat shop is a retail establishment that specializes in selling various cuts and types of meat including beef, meats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
