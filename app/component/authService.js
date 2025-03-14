"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios'; 

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [nick_name, setNickName] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  // const [avatar, setAvatar] = useState('');
  const [address, setAddress] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const togglePasswordVisibility2 = () => setShowPassword2((prev) => !prev);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!acceptPolicy) {
      alert("You must accept the privacy policy.");
      return;
    }

    if (password !== password_confirmation) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        '/api/auth/user/register',
        {
          name,
          email,
          nick_name,
          phone,
          address,
          password,
          password_confirmation,
          // avatar, // Base64 của ảnh được tải lên
          customer_id: 1, // Mặc định là 1
        },
        {
          headers: {
      
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Register successful:', response.data);
      alert('Registration successful! Please log in.');
      router.push('/page/login'); // Điều hướng về trang login
    } catch (error) {
      if (error.response) {
        console.error('Registration failed:', error.response.data);
        alert(`Error: ${error.response.data.message || 'Registration failed'}`);
      } else {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setAvatar(reader.result); // Lưu base64 của ảnh vào state
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}
        ></div>
        <div className="max-w-[100%] relative text-center">
          <h2 className="page-header__title">Register</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li><span>Register</span></li>
          </ul>
        </div>
      </section>

      <section className="login-page">
        <div className="max-w-[100%] pb-[192px]">
          <div className="row h-[1200px]">
            <div className="col-md-12">
              <div className="login-page__inner">
                <div className="login-page__image wow fadeInLeft" data-wow-duration="1500ms">
                  <Image src="/images/register.png" alt="register" width={659} height={816} />
                </div>

                <div
                  className="login-page__wrap login-page__main-tab-box wow fadeInRight"
                  data-wow-duration="1500ms"
                >
                  <div
                    className="login-page__wrap__bg"
                    style={{ backgroundImage: 'url(/assets/images/shapes/login-bg-1.png)' }}
                  ></div>

                  <div className="login-page__wrap__top">
                    <div className="login-page__wrap__content">
                      <h3 className="login-page__title" style={{ fontSize: '30px', fontWeight: 'bold' }}>
                        Welcome
                      </h3>
                    </div>
                    <ul className="tab-buttons">
                      <li className="tab-btn relative-order">
                      <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <a href="/page/login" className="relative-order__text" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                        
                          Log In
                        </a>
                      </li>
                      <li className="tab-btn relative-order active-btn">
                      <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <span className="relative-order__hover"></span>
                        <a href="/page/register" className="relative-order__text" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                          Register
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="tabs-content">
                    <div className="tab fadeInUp animated" data-wow-delay="200ms">
                      <span className="login-page__tab-title" style={{ fontSize: '13px', fontWeight: 'bold' }}>
                        Sign up your Boskery account
                      </span>
                      <form className="login-page__form" onSubmit={handleRegister}>
                        <div className="login-page__form__input-box">
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <span className="icon-user"></span>
                        </div>
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
                            type="text"
                            placeholder="Your Nickname"
                            value={nick_name}
                            onChange={(e) => setNickName(e.target.value)}
                          />
                          <span className="icon-user"></span>
                        </div>
                        {/* <div className="login-page__form__input-box">
                          <input
                            type="file"
                            accept="image/*"
                            style={{ paddingTop: '16px' }}
                            onChange={handleFileChange}
                          />
                          <span className="icon-user"></span>
                        </div> */}
                        <div className="login-page__form__input-box">
                          <input
                            type="text"
                            placeholder="Your Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                          <span className="icon-user"></span>
                        </div>
                        <div className="login-page__form__input-box">
                          <input
                            type="tel"
                            placeholder="Your Phone Number"
                            value={phone}
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
                            type={showPassword2 ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={password_confirmation}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <span className="icon-padlock"></span>
                          <i
                            className={`toggle-password pass-field-icon fa ${showPassword2 ? 'fa-eye' : 'fa-eye-slash'}`}
                            onClick={togglePasswordVisibility2}
                          ></i>
                        </div>
                        <div className="login-page__form__input-box login-page__form__input-box--button">
                          <button type="submit" className="relative-order login-page__form__btn">
                            Register
                          </button>
                        </div>
                        <div className="login-page__form__input-box login-page__form__input-box--bottom">
                          <div className="login-page__form__checked-box">
                              <input type="checkbox" name="accept-policy" id="accept-policy"
                              checked={acceptPolicy}
                              onChange={(e) => setAcceptPolicy(e.target.checked)}
                            />
                              <label htmlFor="accept-policy"><span></span>I accept company privacy policy.</label>
                            </div>
                          </div>
                        </form>
                        <div className="login-page__signin">
                          <h4 className="login-page__signin__title">Already have an account? <a href="/page/login">Sign In</a></h4>
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
