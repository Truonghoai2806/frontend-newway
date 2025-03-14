import React from 'react';

const CounterOneSectionSpace = () => {
  return (
    <section className="counter-one section-space flex justify-center items-center">
      <div
        className="counter-one__bg boskery-jarallax"
        data-jarallax=""
        data-speed="0.3"
        style={{ backgroundImage: 'url(assets/images/backgrounds/counter-bg-1.jpg)', zIndex: 0 }}
      >
        <div id="jarallax-container-0" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -100 }}>
          <div
            style={{
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: 'url(https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Food/boskery/files/assets/images/backgrounds/counter-bg-1.jpg)',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              transform: 'translate3d(0px, 189.155px, 0px)',
              backfaceVisibility: 'hidden',
              willChange: 'transform, opacity',
            }}
          ></div>
        </div>
      </div>
      <div className="container w-full flex justify-center items-center">
        <div className="counter-one__wrapper flex justify-center items-center">
          {/* Counter Item 1 */}
          <div
            className="counter-one__item wow fadeInUp animated"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}
          >
            <div className="counter-one__item__inner">
              <div className="counter-one__box count-box counted">
                <h3 className="counter-one__count-text count-text" data-stop="30" data-speed="1500">
                  30
                </h3>
              </div>
              <h4 className="counter-one__title">Year of Experience</h4>
            </div>
          </div>
          {/* Counter Item 2 */}
          <div
            className="counter-one__item wow fadeInUp animated"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInUp' }}
          >
            <div className="counter-one__item__inner">
              <div className="counter-one__box count-box counted">
                <h3 className="counter-one__count-text count-text" data-stop="45" data-speed="1500">
                  45
                </h3>
                <h3 className="counter-one__count-text">k</h3>
              </div>
              <h4 className="counter-one__title">Tons of meat</h4>
            </div>
          </div>
          {/* Counter Item 3 */}
          <div
            className="counter-one__item wow fadeInUp animated"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '400ms', animationName: 'fadeInUp' }}
          >
            <div className="counter-one__item__inner">
              <div className="counter-one__box count-box counted">
                <h3 className="counter-one__count-text count-text" data-stop="35" data-speed="1500">
                  35
                </h3>
                <h3 className="counter-one__count-text">k</h3>
              </div>
              <h4 className="counter-one__title">Happy customers</h4>
            </div>
          </div>
          {/* Counter Item 4 */}
          <div
            className="counter-one__item wow fadeInUp animated"
            data-wow-duration="1500ms"
            data-wow-delay="600ms"
            style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '600ms', animationName: 'fadeInUp' }}
          >
            <div className="counter-one__item__inner">
              <div className="counter-one__box count-box counted">
                <h3 className="counter-one__count-text count-text" data-stop="32" data-speed="1500">
                  32
                </h3>
              </div>
              <h4 className="counter-one__title">Meat products</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterOneSectionSpace;
