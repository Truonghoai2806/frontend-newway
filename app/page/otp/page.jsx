"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Lấy email từ localStorage khi trang được tải
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail); // Cập nhật email trong state
    } else {
      // Thông báo và chuyển về trang Forgot Password nếu không có email
      alert("Vui lòng nhập email để nhận mã OTP trước!");
      router.push("/page/forget-password");
    }
  }, [router]);

  const handleInputChange = (e) => {
    setOtp(e.target.value);
    setError(null);
    setSuccessMessage(null);
  };

  const handleOTPVerification = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/password/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, 
          otp
        }),
      });
      if (!response.ok) throw new Error("Xác minh OTP thất bại. Vui lòng thử lại.");
      setSuccessMessage("Xác minh thành công!");
      router.push("/page/reset-password");
    } catch (err) {
      setError(err.message || "Đã xảy ra lỗi không xác định.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendOTP = async () => {
    try {
      const response = await fetch("/api/resend-otp", { method: "POST" });
      if (!response.ok) throw new Error("Gửi lại OTP thất bại. Vui lòng thử lại.");
      setSuccessMessage("Mã OTP mới đã được gửi!");
    } catch (err) {
      setError(err.message || "Đã xảy ra lỗi không xác định.");
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
                      <h3 className="login-page__title">Xác Minh OTP</h3>
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
                        Nhập mã OTP đã được gửi đến email của bạn.
                      </span>
                      <form className="login-page__form" onSubmit={handleOTPVerification}>
                        {/* Email input */}
                        <div className="login-page__form__input-box">
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            readOnly // Không cho phép người dùng thay đổi email
                          />
                          <span className="icon-email"></span>
                        </div>
                        <div className="login-page__form__input-box">
                          <input
                            type="text"
                            id="otp"
                            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Nhập mã OTP"
                            value={otp}
                            onChange={handleInputChange}
                            required
                          />
                          <span className="">🔑</span>
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
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#A42125] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Đang xử lý..." : "Xác Nhận"}
                          </button>
                        </div>
                      </form>

                      {/* Footer */}
                      <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                          Không nhận được mã?{" "}
                          <button
                            onClick={resendOTP}
                            className="text-indigo-600 hover:underline font-medium"
                          >
                            Gửi lại
                          </button>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
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
          </div>
        </div>
      </section>

    </>
  );
}
