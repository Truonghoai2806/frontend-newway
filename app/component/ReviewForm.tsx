// components/ReviewForm.tsx
import React from 'react';

const ReviewForm: React.FC = () => {
  return (
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
              <span className="boskery-btn__text">Post Review</span>
              <i className="icon-meat-3"></i>
            </button>
          </div>
        </div>
      </form>
      <div className="result"></div>
    </div>
  );
};

export default ReviewForm;
