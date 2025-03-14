"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/password/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Không thể gửi yêu cầu. Vui lòng kiểm tra lại email.");
      }

      localStorage.setItem('email', email);

      setSuccessMessage(
        "Yêu cầu đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra email của bạn."
      );
      setEmail(""); // Xóa dữ liệu email sau khi gửi thành công
      setError(null);

      router.push("/page/otp");
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
      <section className="login-page">
        <div className="max-w-[100%]">
          <div className="row">
            <div className="col-md-12">
              <div className="login-page__inner">
                {/* Hình ảnh bên trái */}
                <div
                  className="login-page__image wow fadeInLeft"
                  data-wow-duration="1500ms"
                >
                  <Image
                    src="/images/login.png"
                    alt="login"
                    width={659}
                    height={816}
                  />
                </div>

                {/* Form đăng nhập */}
                <div className="login-page__wrap login-page__main-tab-box wow fadeInRight" data-wow-duration="1500ms">

                  <div className="h-[87px]">
                    <div className="login-page__wrap__content">
                      <h3 className="login-page__title">Quên Mật Khẩu</h3>
                    </div>


                  </div>

                  <div className="tabs-content">
                    <div
                      className="tab active-tab fadeInUp animated"
                      data-wow-delay="200ms"
                    >
                      <span
                        className="login-page__tab-title"
                        style={{ fontSize: "13px", fontWeight: "bold" }}
                      >
                        Nhập email của bạn để nhận liên kết đặt lại mật khẩu.
                      </span>
                      <form className="login-page__form" onSubmit={handleForgotPassword}>
                        {/* Email input */}
                        <div className="login-page__form__input-box">
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
                          <div className="text-sm text-green-600 bg-green-50 p-3 rounded-md">
                            {successMessage}
                          </div>
                        )}
                        {error && (
                          <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                            {error}
                          </div>
                        )}

                        {/* Nút submit */}
                        <div className="login-page__form__input-box">
                          <button
                            type="submit"
                            className="relative-order login-page__form__btn"
                          >
                            Gửi Yêu Cầu
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      <a
                        href="/page/login"
                        className="text-indigo-600 hover:underline font-medium"
                      >
                        Quay lại Đăng Nhập
                      </a>
                    </p>
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
