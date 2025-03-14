"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function ResetPasswordPage() {
    const [email, setEmail] = useState("");
    const [new_password, setPassword] = useState("");
    const [new_password_confirmation, setConfirmPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();


    useEffect(() => {
        // Lấy email từ localStorage khi trang được tải
        const savedEmail = localStorage.getItem('email');
        if (savedEmail) {
            setEmail(savedEmail); // Cập nhật email trong state
        }else {
            // Thông báo và chuyển về trang Forgot Password nếu không có email
            alert("Vui lòng nhập email để nhận mã OTP trước!");
            router.push("/page/forget-password");
          }
        }, [router]);


    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2((prev) => !prev);
    };
    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (new_password !== new_password_confirmation) {
            setError("Mật khẩu xác nhận không khớp.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/password/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    new_password,
                    new_password_confirmation
                }),
            });

            if (!response.ok) throw new Error("Đặt lại mật khẩu thất bại. Vui lòng thử lại.");
            setSuccessMessage("Mật khẩu đã được đặt lại thành công!");
            localStorage.removeItem("email"); 
        } catch (err) {
            setError(err.message || "Đã xảy ra lỗi không xác định.");
        } finally {
            setIsSubmitting(false);
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
                                            <h3 className="login-page__title">Đặt Lại Mật Khẩu</h3>
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
                                                Nhập mật khẩu mới của bạn để đặt lại tài khoản.
                                            </span>
                                            <form className="login-page__form" onSubmit={handleResetPassword}>
                                                <div className="login-page__form__input-box">
                                                    <input
                                                        type="email"
                                                        placeholder="Your Email"
                                                        value={email}
                                                        readOnly
                                                    />
                                                    <span className="icon-email"></span>
                                                </div>
                                                <div className="login-page__form__input-box">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Password"
                                                        value={new_password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    <span className="icon-padlock"></span>
                                                    <i
                                                        className={`toggle-password pass-field-icon fa ${showPassword ? "fa-eye" : "fa-eye-slash"
                                                            }`}
                                                        onClick={togglePasswordVisibility}
                                                    ></i>
                                                </div>

                                                {/* Trường xác nhận mật khẩu */}
                                                <div className="login-page__form__input-box">
                                                    <input
                                                        type={showPassword2 ? 'text' : 'password'}
                                                        id="confirmPassword"
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        placeholder="Xác nhận mật khẩu mới"
                                                        value={new_password_confirmation}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        required
                                                    />
                                                    <span className="icon-padlock"></span>
                                                    <i
                                                        className={`toggle-password pass-field-icon fa ${showPassword2 ? "fa-eye" : "fa-eye-slash"
                                                            }`}
                                                        onClick={togglePasswordVisibility2}
                                                    ></i>
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
                                                        {isSubmitting ? "Đang xử lý..." : "Đặt lại mật khẩu"}
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
