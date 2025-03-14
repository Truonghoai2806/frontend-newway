
"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('login'); // State để quản lý tab nào đang hiển thị
  const [showPassword, setShowPassword] = useState(false); // State để quản lý việc hiện mật khẩu

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  // State để lưu trữ thông tin nhập liệu
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false); // State để kiểm tra ô checkbox

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Đảo ngược trạng thái hiện mật khẩu
  };

  // Hàm xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin nhập liệu
    if (!email || !password) {
      alert("Email and Password cannot be empty.");
      return;
    }

    // Logic để xử lý đăng nhập
    console.log("Logging in with", { email, password });
  };

  // Hàm xử lý đăng ký
  const handleRegister = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin nhập liệu
    if (!email || !phoneNumber || !password || !confirmPassword) {
      alert("All fields must be filled out.");
      return;
    }
  
    if (phoneNumber.length !== 10) { // Kiểm tra độ dài số điện thoại
      alert("Please  enter a valid 10-digit phone number.");
      return;
    }
  
    if (!acceptPolicy) {
      alert("You must accept the privacy policy.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  

    // Logic để xử lý đăng ký
    console.log("Registering with", { email, phoneNumber, password });
  };

  return (
    <>
      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}></div>
        <div className="max-w-[100%] relative text-center">
          <h2 className="page-header__title">Log In</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li><span>Log In</span></li>
          </ul>
        </div>
      </section>

      <section className="login-page">
        <div className="max-w-[100%]">
          <div className="row">
            <div className="col-md-12">
              <div className="login-page__inner">
                <div className="login-page__image wow fadeInLeft" data-wow-duration="1500ms">
                  <Image src="/images/login.png" alt="login" width={500} height={500} />
                </div>

                <div className="login-page__wrap login-page__main-tab-box wow fadeInRight" data-wow-duration="1500ms">
                  <div className="login-page__wrap__bg" style={{ backgroundImage: 'url(/assets/images/shapes/login-bg-1.png)' }}></div>

                  <div className="login-page__wrap__top">
                    <div className="login-page__wrap__content">
                      <h3 className="login-page__title">Welcome</h3>
                    </div>

                    <ul className="tab-buttons">
                      <li
                        className={`tab-btn relative-order ${activeTab === 'login' ? 'active-btn' : ''}`}
                        onClick={() => handleTabClick('login')}
                      >
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__text">Log In</span>
                      </li>
                      <li
                        className={`tab-btn relative-order ${activeTab === 'register' ? 'active-btn' : ''}`}
                        onClick={() => handleTabClick('register')}
                      >
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__text">Register</span>
                      </li>
                    </ul>
                  </div>

                  <div className="tabs-content">
                    {/* Tab Đăng Nhập */}
                    {activeTab === 'login' && (
                      <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms">
                        <span className="login-page__tab-title">Sign in your Boskery account</span>
                        <form className="login-page__form" onSubmit={handleLogin}>
                          <div className="login-page__form__input-box">
                            <input
                              type="email"
                              placeholder="Your Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="icon-email"></span>
                          </div>
                          <div className="login-page__form__input-box">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Password"
                              className="login-page__password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="icon-padlock"></span>
                            <i
                              className={`toggle-password pass-field-icon fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                              onClick={togglePasswordVisibility}
                            ></i>
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--forgot">
                            <a href="#" className="login-page__form__forgot">Forgot password?</a>
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--button">
                            <button type="submit" className="relative-order login-page__form__btn">Log In</button>
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--checkbox">
                            <div className="login-page__form__checked-box">
                              <input type="checkbox" name="remember-policy" id="remember-policy" />
                              <label htmlFor="remember-policy"><span></span>Remember me</label>
                            </div>
                          </div>
                        </form>
                        <div className="login-page__signin">
                          <h4 className="login-page__signin__title">Don’t have an account? <a href="#">Register</a></h4>
                          <span className="login-page__signin__text">Or sign in with</span>
                          <div className="login-page__signin__buttons">
                            <button type="button" className="login-page__signin__btn">
                              <Image src="/assets/images/resources/google.png" alt="google" width={24} height={24} />
                            </button>
                            <button type="button" className="login-page__signin__btn">
                              <Image src="/assets/images/resources/apple.png" alt="apple" width={24} height={24} />
                            </button>
                            <button type="button" className="login-page__signin__btn">
                              <Image src="/assets/images/resources/facebook.png" alt="facebook" width={24} height={24} />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab Đăng Ký */}
                    {activeTab === 'register' && (
                      <div className="tab fadeInUp animated" data-wow-delay="200ms">
                        <span className="login-page__tab-title">Sign up your Boskery account</span>
                        <form className="login-page__form" onSubmit={handleRegister}>
                          <div className="login-page__form__input-box">
                            <input
                              type="email"
                              placeholder="Your Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="icon-email"></span>
                          </div>
                          <div className="login-page__form__input-box">
                            <input
                              type="tel"
                              placeholder="Your Phone Number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              pattern="[0-9]{10}" 
                              title="Please enter a valid 10-digit phone number" 
                              required
                            />
                            <span className="icon-mobile"></span>
                          </div>
                          <div className="login-page__form__input-box">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Password"
                              className="login-page__password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="icon-padlock"></span>
                            <i
                              className={`toggle-password pass-field-icon fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                              onClick={togglePasswordVisibility}
                            ></i>
                          </div>
                          <div className="login-page__form__input-box">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Confirm Password"
                              className="login-page__password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span className="icon-padlock"></span>
                            <i
                              className={`toggle-password pass-field-icon fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                              onClick={togglePasswordVisibility}
                            ></i>
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--button">
                            <button type="submit" className="relative-order login-page__form__btn">Register</button>
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--bottom">
                            <div className="login-page__form__checked-box">
                              <input type="checkbox" name="accept-policy" id="accept-policy"
                                checked={acceptPolicy}
                                onChange={(e) => setAcceptPolicy(e.target.checked)} // Cập nhật giá trị của checkbox
                              />
                              <label htmlFor="accept-policy"><span></span>I accept company privacy policy.</label>
                            </div>
                          </div>
                        </form>
                        <div className="login-page__signin">
                          <h4 className="login-page__signin__title">Already have an account? <a href="#">Sign In</a></h4>
                          <span className="login-page__signin__text">Or sign in with</span>
                          <div className="login-page__signin__buttons">
                            <button type="button" className="login-page__signin__btn">
                              <Image src="/assets/images/resources/google.png" alt="google" width={24} height={24} />
                            </button>
                            <button type="button" className="login-page__signin__btn">
                              <Image src="/assets/images/resources/apple.png" alt="apple" width={24} height={24} />
                            </button>
                            <button type="button" className="login-page__signin__btn">
                              <Image src="/assets/images/resources/facebook.png" alt="facebook" width={24} height={24} />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
