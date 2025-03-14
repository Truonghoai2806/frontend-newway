"use client";
import { useState } from "react";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Không thể gửi yêu cầu. Vui lòng kiểm tra lại email.");
      }

      setSuccessMessage(
        "Yêu cầu đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra email của bạn."
      );
      setEmail(""); // Xóa dữ liệu email sau khi gửi thành công
      setError(null);
    } catch (err) {
      setError(err.message || "Đã xảy ra lỗi không xác định.");
      setSuccessMessage(null);
    }
  };

  return (
    <>
      {/* Phần tiêu đề */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/page-header-bg.jpg)",
          }}
        ></div>
        <div className="max-w-[100%] relative text-center">
          <h2 className="page-header__title">Quên Mật Khẩu</h2>
          <ul className="boskery-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/page/forgot-password" className="hover:underline">
                <span>Forgot Password</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Phần form quên mật khẩu */}
      <section className="forgot-password-page">
        <div className="max-w-[100%]">
          <div className="row">
            <div className="col-md-12">
              <div className="forgot-password-page__inner">
                {/* Hình ảnh bên trái */}
                <div
                  className="forgot-password-page__image wow fadeInLeft"
                  data-wow-duration="1500ms"
                >
                  <Image
                    src="/images/forgot-password.png"
                    alt="forgot-password"
                    width={659}
                    height={816}
                  />
                </div>

                {/* Form quên mật khẩu */}
                <div
                  className="forgot-password-page__wrap wow fadeInRight"
                  data-wow-duration="1500ms"
                >
                  <div
                    className="forgot-password-page__wrap__bg"
                    style={{
                      backgroundImage:
                        "url(/assets/images/shapes/login-bg-1.png)",
                    }}
                  ></div>

                  <div className="forgot-password-page__wrap__content">
                    <h3 className="forgot-password-page__title">
                      Quên Mật Khẩu
                    </h3>
                    <p className="forgot-password-page__text">
                      Nhập email của bạn để nhận liên kết đặt lại mật khẩu.
                    </p>
                  </div>

                  <form
                    className="forgot-password-page__form"
                    onSubmit={handleForgotPassword}
                  >
                    {/* Email input */}
                    <div className="forgot-password-page__form__input-box">
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <span className="icon-email"></span>
                    </div>

                    {/* Hiển thị thông báo */}
                    {successMessage && (
                      <div className="forgot-password-page__form__success text-green-500">
                        {successMessage}
                      </div>
                    )}
                    {error && (
                      <div className="forgot-password-page__form__error text-red-500">
                        {error}
                      </div>
                    )}

                    {/* Nút submit */}
                    <div className="forgot-password-page__form__input-box">
                      <button
                        type="submit"
                        className="relative-order forgot-password-page__form__btn"
                      >
                        Gửi Yêu Cầu
                      </button>
                    </div>
                  </form>

                  {/* Footer */}
                  <div className="forgot-password-page__footer">
                    <a href="/page/login" className="forgot-password-page__link">
                      Quay lại Đăng Nhập
                    </a>
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
