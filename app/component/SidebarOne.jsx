// components/SidebarOne.js
import React from 'react';
import Image from 'next/image';

const SidebarOne = () => {
  return (
    <aside className="sidebar-one">
      <div className="sidebar-one__overlay sidebar-btn__toggler"></div>
      <div className="sidebar-one__content">
        <span className="sidebar-one__close sidebar-btn__toggler">
          <i className="fa fa-times"></i>
        </span>
        <div className="sidebar-one__logo sidebar-one__item">
          <a href="/" aria-label="logo image">
            <Image src="assets/images/logo-light.png" width="100" height={100} alt="logo" />
          </a>
        </div>
        <div className="sidebar-one__about sidebar-one__item">
          <p className="sidebar-one__about__text">
            Providing fresh and organic meat from our farm in a very hygienic way.
          </p>
        </div>
        <div className="sidebar-one__info sidebar-one__item">
          <h4 className="sidebar-one__title">Contact</h4>
          <ul className="sidebar-one__info__list">
            <li>
              <span className="icon-maps-and-flags"></span>
              <address>85 Ketch Harbour Road Bensal PA 19020</address>
            </li>
            <li>
              <span className="icon-paper-plane"></span>{' '}
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </li>
            <li>
              <span className="icon-phone-call"></span>{' '}
              <a href="tel:+9156980036420">+91 5698 0036 420</a>
            </li>
          </ul>
        </div>
        <div className="sidebar-one__social sidebar-one__item">
          <a href="https://facebook.com">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter" aria-hidden="true"></i>
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://linkedin.com">
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            <span className="sr-only">Linkedin</span>
          </a>
          <a href="https://youtube.com" aria-hidden="true">
            <i className="fab fa-youtube"></i>
            <span className="sr-only">Youtube</span>
          </a>
        </div>
        <div className="sidebar-one__newsletter sidebar-one__item">
          <label className="sidebar-one__title" htmlFor="sidebar-email">
            Newsletter
          </label>
          <form action="#" className="sidebar-one__newsletter__inner mc-form" data-url="MAILCHIMP_FORM_URL" noValidate>
            <input
              type="email"
              name="EMAIL"
              id="sidebar-email"
              className="sidebar-one__newsletter__input"
              placeholder="Email Address"
            />
            <button type="submit" className="sidebar-one__newsletter__btn">
              <span className="icon-email" aria-hidden="true"></span>
            </button>
          </form>
          <div className="mc-form__response"></div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarOne;
