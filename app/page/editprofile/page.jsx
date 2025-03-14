"use client";
import React, { useEffect, useState } from "react";
import "../../../public/styles/profile-edit.css";
import Image from "next/image";
import Cookies from "js-cookie"; // Thêm import cho Cookies

const ProfileEdit = () => {
    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        nick_name: "",
        address: "",
        phone: "",
        email: "",
        birthday: "",
        gender: "",
    });

    // Lấy user_id từ loginData trong cookies
    const loginData = Cookies.get("loginData");
    const userId = loginData ? JSON.parse(loginData).user_id : null;
    const token = loginData ? JSON.parse(loginData).token : null;


    useEffect(() => {
        fetch(`/api/auth/user/user-profile/${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then((response) => {
                // console.log("Response received: ", response);
                return response.json();
            })
            .then((data) => {
                // console.log("User data fetched: ", data);
                setUserData(data.data);
                setFormData({
                    name: data.data.name,
                    nick_name: data.data.nick_name,
                    address: data.data.address,
                    phone: data.data.phone,
                    email: data.data.email,
                    birthday: data.data.birthday || "",
                    gender: data.data.gender || "",
                });
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [userId, token]);


    const logout = () => {
        // Lấy thông tin đăng nhập từ cookie
        const loginData = Cookies.get("loginData");
        const token = loginData ? JSON.parse(loginData).token : null;

        // Kiểm tra nếu không có token
        if (!token) {
            console.error("Không tìm thấy token, không thể logout");
            return;
        }

        console.log("Token", token); // Debug token

        // Gửi yêu cầu logout đến API
        fetch("/api/logout", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`, // Gửi token để xác thực
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Logout thành công");
                    Cookies.remove("loginData");
                    window.location.href = "/";
                } else {
                    console.error("Logout thất bại. Trạng thái:", response.status);
                }
            })
            .catch((error) => {
                console.error("Lỗi khi gửi yêu cầu logout:", error);
            });
    };


    if (!userData) {
        return <div>Loading...</div>;
    }

    // Hàm xử lý khi người dùng thay đổi thông tin
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            let updatedData = { ...prev, [name]: value };

            if (name === "birthday_day" || name === "birthday_month" || name === "birthday_year") {
                const { birthday_day, birthday_month, birthday_year } = updatedData;
                if (birthday_day && birthday_month && birthday_year) {
                    updatedData.birthday = `${birthday_year}-${birthday_month}-${birthday_day}`;
                }
            }

            return updatedData;
        });
    };

    // Hàm lưu thông tin khi bấm "Lưu"
    const handleSave = () => {
        fetch(`/api/user-profile/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error updating user data");
                }
                return response.json();
            })
            .then((data) => {
                alert("Cập nhật thành công!");
                setUserData(data.data);
            })
            .catch((error) => {
                console.error("Error updating user data:", error);
                alert("Cập nhật thất bại!");
            });
    };

    // Tách ngày tháng năm từ birthday
    const [year, month, day] = formData.birthday
        ? formData.birthday.split(" ")[0].split("-")
        : ["", "", ""];

    return (
        <div className="container w-full mx-auto my-5 max-w-screen-xl shadow-lg rounded-lg overflow-hidden bg-white" suppressHydrationWarning >
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="lg:w-1/4 w-full p-5 text-black mb-5 lg:mb-0"> {/* Thêm khoảng cách giữa menu và content */}
                    <div className="flex flex-col items-center justify-center">
                        <Image src={userData.avatar || "/assets/images/logo-light.png"} alt="Avatar" width={30} height={30} className="w-30 h-30 rounded-full mb-4" />
                        <h3 className="mb-4 text-lg">{userData.name}</h3>
                    </div>
                    <ul className="list-none">
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 hover:text-white text-base transition-colors">
                            <i className="fas fa-user mr-3"></i> Thông tin tài khoản
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 hover:text-white text-base transition-colors">
                            <i className="fas fa-map-marker-alt mr-3"></i> Sổ địa chỉ
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 hover:text-white text-base transition-colors">
                            <i className="fas fa-box mr-3"></i> Quản lý đơn hàng
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 hover:text-white text-base transition-colors">
                            <i className="fas fa-bell mr-3"></i> Thông báo
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 hover:text-white text-base transition-colors">
                            <i className="fas fa-tag mr-3"></i> Mã giảm giá
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 hover:text-white text-base transition-colors">
                            <i className="fas fa-gift mr-3"></i> Membership
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        <li className="flex items-center p-2 cursor-pointer hover:bg-gray-800 hover:text-white text-base transition-colors">
                            <i className="fas fa-eye mr-3"></i> Sản phẩm đã xem
                        </li>
                        <hr className="border-none border-b border-gray-400 my-2" />
                        {/* Nút Đăng xuất */}
                        <li
                            className="flex items-center p-2 cursor-pointer hover:bg-red-600 hover:text-white text-base transition-colors"
                            onClick={logout}
                        >
                            <i className="fas fa-sign-out-alt mr-3"></i> Đăng xuất
                        </li>
                    </ul>
                </div>


                {/* Content */}
                <div className="lg:w-3/4 w-full p-5">
                    <h1 className="text-2xl font-bold text-gray-800 mb-5">Thông Tin Tài Khoản</h1>

                    <div className="flex flex-wrap mx-2">
                        {/* Personal Info */}
                        <div className="w-full lg:w-1/2 p-2 mb-6"> {/* Thêm khoảng cách dưới Personal Info */}
                            <h2 className="text-xl text-gray-800 mb-4">Thông Tin Cá Nhân</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Họ tên</label>
                                <input type="text" name="name" onChange={handleChange} defaultValue={userData.name} placeholder="Nhập họ tên" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Nickname</label>
                                <input type="text" name="nick_name" onChange={handleChange} defaultValue={userData.nick_name} placeholder="Nhập nickname" className="w-full p-2 border border-gray-300 rounded" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Địa chỉ</label>
                                <input type="text" name="address" onChange={handleChange} defaultValue={userData.address} placeholder="Nhập nickname" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="flex space-x-2 mb-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Ngày</label>
                                    <select
                                        name="birthday_day"
                                        onChange={handleChange}
                                        value={day}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    >
                                        <option value="">DD</option>
                                        {Array.from({ length: 31 }, (_, i) => (
                                            <option key={i + 1} value={(i + 1).toString().padStart(2, "0")}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Tháng</label>
                                    <select
                                        name="birthday_month"
                                        onChange={handleChange}
                                        value={month}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    >
                                        <option value="">MM</option>
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i + 1} value={(i + 1).toString().padStart(2, "0")}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Năm</label>
                                    <select
                                        name="birthday_year"
                                        onChange={handleChange}
                                        value={year}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    >
                                        <option value="">YYYY</option>
                                        {Array.from({ length: 50 }, (_, i) => (
                                            <option key={i + 1970} value={(i + 1970).toString()}>
                                                {i + 1970}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Giới tính</label>
                                <div className="space-x-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="M"
                                            className="form-radio"
                                            checked={formData.gender === "M"}
                                            onChange={handleChange}
                                        />{" "}
                                        Nam
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="F"
                                            className="form-radio"
                                            checked={formData.gender === "F"}
                                            onChange={handleChange}
                                        />{" "}
                                        Nữ
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="O"
                                            className="form-radio"
                                            checked={formData.gender === "O"}
                                            onChange={handleChange}
                                        />{" "}
                                        Khác
                                    </label>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Quốc tịch</label>
                                <select className="w-full p-2 border border-gray-300 rounded">
                                    <option>Chọn quốc tịch</option>
                                </select>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={handleSave} className="bg-red-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all">Lưu</button>
                            </div>
                        </div>

                        {/* Account Info */}
                        <div className="w-full lg:w-1/2 p-2 mb-6 "> {/* Thêm khoảng cách dưới Account Info */}
                            <h2 className="text-xl text-gray-800 mb-4">Số điện thoại và Email</h2>
                            <div className="flex items-center mb-4">
                                <i className="icon-phone-call text-xl mr-2"></i>
                                <input type="text" name="phone" onChange={handleChange} placeholder="Số điện thoại" defaultValue={userData.phone} className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="flex items-center mb-4">
                                <i className="icon-email text-xl mr-2"></i>
                                <input type="email" name="email" onChange={handleChange} placeholder="Địa chỉ email" defaultValue={userData.email} className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <h2 className="text-xl text-gray-800 mb-4">Bảo mật</h2>
                            <div className="flex items-center mb-4 p-1  rounded">
                                <i className="icon-padlock text-xl mr-4"></i>
                                <span className="flex-grow w-full text-gray-800 font-semibold">Đổi mật khẩu</span>
                                <button className="bg-red-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all whitespace-nowrap w-100">Cập nhật</button>
                            </div>
                            <h2 className="text-xl text-gray-800 mb-4">Liên kết mạng xã hội</h2>
                            <div className="flex items-center justify-between mb-4">
                                <i className="fab fa-facebook text-2xl text-blue-600"></i>
                                <span className="text-lg flex-grow ml-4">Facebook</span>
                                <button className="bg-red-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all w-100">Liên kết</button>
                            </div>
                            <h2 className="text-xl text-gray-800 mb-4">Đã liên kết</h2>
                            <div className="flex items-center p-2 rounded">
                                <i className="fab fa-google text-2xl text-red-600"></i>
                                <span className="text-lg flex-grow ml-4">Google</span>
                            </div>
                        </div>
                    </div>

                    {/* Tier Info */}
                    <div className="mt-5 p-5 bg-gray-100 rounded-lg">
                        <h2 className="text-xl text-gray-800 mb-4">Tổng Quan Thứ Bậc</h2>
                        <p className="text-base mb-1">Hạng thành viên: <strong className="text-orange-500">Gold</strong></p>
                        <p className="text-base mb-1">Số điểm hiện tại: <strong className="text-orange-500">520 Điểm</strong></p>
                        <p className="text-base">Số điểm cần tích lũy thêm: <strong className="text-orange-500">480 Điểm</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;
