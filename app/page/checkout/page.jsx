"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import { decode as jwtDecode } from "jwt-decode";

const Checkouts = () => {
    const [products, setProducts] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState("");
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        company: "",
        address: "",
        city: "",
        zip: "",
        phone: "",
        country: "",
        state: "",
    });

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://api-core.dsp.one/api/client/product");
            setProducts(Array.isArray(response.data) ? response.data : []);
        } catch (err) {
            console.error("Error fetching products:", err);
            setError("Failed to load products.");
        }
    };

    // Fetch payment methods
    const fetchPaymentMethods = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("https://api-core.dsp.one/payment/api/method/get-all");
            
            if (response.status === 200) {
                const paymentMethods = response.data.data; // Lấy mảng `data` từ response
                console.log("Payment Methods:", paymentMethods);
                setPaymentMethods(paymentMethods);
            } else {
                console.error("Error fetching payment methods, status:", response.status);
                setPaymentMethods([]);
                setError("Failed to fetch payment methods.");
            }
        } catch (err) {
            console.error("Error fetching payment methods:", err);
            setError("Unable to load payment methods.");
        } finally {
            setIsLoading(false);
        }
    };
    

    // Fetch user data from API
    const fetchUserData = async () => {
        const loginData = Cookies.get("loginData");
        const userId = loginData ? JSON.parse(loginData).user_id : null;
        const token = loginData ? JSON.parse(loginData).token : null;

        if (!userId) {
            console.warn("User not logged in");
            return;
        }

        try {
            const response = await axios.get(`/api/auth/user/user-profile/${userId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const userProfile = response.data.data;
            setUserData((prevData) => ({
                ...prevData,
                name: userProfile.name || "",
                email: userProfile.email || "",
                company: userProfile.company || "",
                address: userProfile.address || "",
                city: userProfile.city || "",
                zip: userProfile.zip || "",
                phone: userProfile.phone || "",
                country: userProfile.country || "",
                state: userProfile.state || "",
            }));
        } catch (error) {
            console.error("Error fetching user data:", error);
            setError("Failed to fetch user data.");
        }
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle payment method selection
    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    // Handle checkout process
    const handleCheckout = async () => {

        const loginData = Cookies.get("loginData");
        const userId = loginData ? JSON.parse(loginData).user_id : null;

        if (!selectedPayment) {
            alert("Please select a payment method!");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post("/api/auth/order", {
                method: selectedPayment,
                userId,
            });
            console.log("Payment successful:", response.data);
            alert("Payment successful!");
        } catch (err) {
            console.error("Error processing payment:", err);
            setError("Failed to process payment.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // getUserFromToken();
        fetchProducts();
        fetchPaymentMethods();
        fetchUserData();
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <section className="page-header relative" style={{ height: "320px" }}>
                <div
                    className="page-header__bg absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}
                ></div>
                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title text-[40px] md:text-[55px] font-bold text-white text-center">
                        CHECKOUT
                    </h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[14px] md:text-[16px]">
                        <li>
                            <a href="/" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/page/product" className="hover:underline">
                                PRODUCTS
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="max-w-[75rem] mx-auto py-8 md:py-16 px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24r">
                    {/* Billing Details */}
                    <div className="bg-gray-50 p-4 md:p-8 shadow-md rounded-lg w-full xxl:w-[770px] mx-auto ipad:w-[600px]">
                        <h2 className="text-lg md:text-xl font-bold mb-4">Billing Details</h2>
                        <form>
                            {Object.keys(userData).map((field, index) => (
                                <div className="mb-4" key={index}>
                                    <label htmlFor={field} className="block font-semibold mb-2">
                                        {field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')} {field !== "company" ? "*" : "(Optional)"}
                                    </label>
                                    {field === "country" || field === "state" ? (
                                        <select
                                            id={field}
                                            name={field}
                                            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
                                            required
                                            value={userData[field]}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select {field.charAt(0).toUpperCase() + field.slice(1)}</option>
                                            {field === "country" ? (
                                                ["USA", "CAN"].map((country) => <option key={country} value={country}>{country}</option>)
                                            ) : (
                                                ["GA", "NY", "OH"].map((state) => <option key={state} value={state}>{state}</option>)
                                            )}
                                        </select>
                                    ) : (
                                        <input
                                            type={field === "email" ? "email" : "text"}
                                            id={field}
                                            name={field}
                                            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
                                            required={field !== "company"}
                                            value={userData[field]}
                                            onChange={handleInputChange}
                                        />
                                    )}
                                </div>
                            ))}
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-4 md:p-8 shadow-md rounded-lg xxl:w-[370px] mx-auto">
                        <h2 className="text-lg md:text-xl font-bold mb-4">Your Order</h2>
                        <div className="mb-5">
                            {products.map((item, index) => (
                                <div className="flex justify-between mb-2" key={index}>
                                    <span>{item.name}</span>
                                    <span>${item.price}</span>
                                </div>
                            ))}
                            <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mt-2">
                                <span>Subtotal</span>
                                <span>${products.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            {paymentMethods.length > 0 ? (
                                paymentMethods.map((method, index) => (
                                    <label className="block mb-2" key={index}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value={method.code}
                                            className="mr-2"
                                            onChange={handlePaymentChange}
                                        />
                                        {method.name}
                                    </label>
                                ))
                            ) : isLoading ? (
                                <p className="text-gray-500">Loading payment methods...</p>
                            ) : (
                                <p className="text-red-500">No payment methods available.</p>
                            )}
                        </div>

                        <button
                            className="bg-red-700 text-white px-4 py-2 rounded"
                            onClick={handleCheckout}
                            disabled={isLoading}
                        >
                            {isLoading ? "Processing..." : "Place Order"}
                        </button>

                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkouts;
