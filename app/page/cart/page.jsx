'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie'; // Import js-cookie

export default function Cart() {
    const [subtotal, setSubtotal] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0); // State cho mã giảm giá
    const [items, setItems] = useState([]); // Giỏ hàng của khách hàng
    const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu


    const loginData = Cookies.get("loginData");
    const customerId = loginData ? JSON.parse(loginData).user_id : null;

    // Hàm để lấy giỏ hàng từ API
    const fetchCartItems = async (customerId) => {
        if (!customerId) {
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(`/api/auth/cart/${customerId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorText = await response.text(); // Get the response as text
                console.error("Error fetching cart items:", errorText);
                return; // Exit the function if there's an error
            }

            const data = await response.json();
            console.log(data);

            if (data && data.data) {
                setItems(data.data); // Cập nhật giỏ hàng
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (customerId) {
            fetchCartItems(customerId); // Lấy giỏ hàng khi có customer_id
        }
    }, [customerId]);

    useEffect(() => {
        const newSubtotal = items.reduce((total, order) => {
            return total + parseFloat(order.total_price); // Cộng tổng giá trị các đơn hàng
        }, 0);
        setSubtotal(newSubtotal - discount); // Áp dụng giảm giá vào subtotal
    }, [items, discount]);

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        if (couponCode === "DISCOUNT10") { // Kiểm tra mã giảm giá hợp lệ
            setDiscount(10); // Giảm giá 10 đô la
        } else {
            alert("Mã giảm giá không hợp lệ");
        }
    };

    // số lượng
    const updateProductQuantity = async (cartDetailId, quantity) => {
        console.log(`Updating quantity for cartDetailId: ${cartDetailId}, New Quantity: ${quantity}`);  // Add this line for debugging
    
        try {
            const response = await fetch(`/api/auth/cart/update-quantity/${cartDetailId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quantity }), // Send the new quantity
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Error updating product quantity:", errorText);
                return; // Exit the function if there's an error
            }
    
            // Optionally, you can refetch the cart items to get the updated state
            fetchCartItems(customerId); // Ensure customerId is defined and valid
        } catch (error) {
            console.error("Error updating product quantity:", error);
        }
    };
    
    const removeFromCart = async (cartDetailId) => {
        try {
            const response = await fetch(`/api/auth/cart/remove/${cartDetailId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Error removing from cart:", errorText);
                return;
            }
    
            const data = await response.json();
            console.log("Product removed from cart:", data);
        } catch (error) {
            console.error("Error removing from cart:", error);
        }
    };

    return (
        <div>
            <section className="page-header relative" style={{ height: '320px' }}>
                <div
                    className="page-header__bg absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')" }}
                ></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title text-[55px] font-bold text-white text-center">Cart</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="/page/cart" className="hover:underline"><span>Cart</span></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="cart-page section-space bg-[#ffffff]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="col-xl-8 w-full xl:w-2/3 px-4">
                            <div className="overflow-x-auto">
                                <table className="table-auto cart-page__table w-full">

                                    <thead>
                                        <tr className="text-left">
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Sub Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan="5" className="text-center">Loading...</td>
                                            </tr>
                                        ) : items.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className="text-center">Your cart is empty</td>
                                            </tr>
                                        ) : (
                                            items.map(order => (
                                                order.details.data.map(item => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <div className="cart-page__table__meta flex items-center">
                                                                <div className="cart-page__table__meta__img mr-4">
                                                                    {/* hình ảnh thực tế */}
                                                                    <Image src="/assets/images/product-placeholder.jpg" alt={item.product_id} width={64} height={64} className="w-16 h-16 object-cover" />
                                                                </div>
                                                                <h3 className="cart-page__table__meta__title">
                                                                    <a href="/page/product-detail" className="text-blue-500 hover:underline">{item.product_id}</a> {/* tên sản phẩm*/}
                                                                </h3>
                                                            </div>
                                                        </td>
                                                        <td className="cart-page__table__price px-4 py-2">${parseFloat(item.price).toFixed(2)}</td>
                                                        <td>
                                                            <div className="product-details__quantity">
                                                                <div className="flex items-center quantity-box">
                                                                    <button
                                                                        type="button"
                                                                        className="sub bg-gray-300 p-2"
                                                                        onClick={() => updateProductQuantity(item.id, item.quantity - 1)} // Decrease quantity
                                                                        disabled={item.quantity <= 1} // Disable if quantity is 1
                                                                    >
                                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M20 12H4" />
                                                                        </svg>
                                                                    </button>
                                                                    <input
                                                                        type="text"
                                                                        value={item.quantity}
                                                                        className="border border-gray-300 px-2 w-12 text-center"
                                                                        readOnly
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="add bg-gray-300 p-2"
                                                                        onClick={() => updateProductQuantity(item.id, item.quantity + 1)} // Increase quantity
                                                                    >
                                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M12 4v16m8-8H4" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart-page__table__total px-4 py-2">${parseFloat(item.total_price_detail).toFixed(2)}</td>
                                                        <td>
                                                            <button onClick={() => removeFromCart(item.id)} className="cart-page__table__remove text-red-500 hover:no-underline">
                                                                <svg className="w-4 h-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>Remove
                                                            </button>
                                                        </td>

                                                    </tr>
                                                ))
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-page__coupone">
                                <h5 className="cart-page__coupone__title">Coupon:</h5>
                                <div className="cart-page__coupone__box flex items-center">
                                    <form onSubmit={handleApplyCoupon} className="cart-page__coupone__form flex-grow">
                                        <input
                                            type="text"
                                            placeholder="Enter Coupon Code"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)} // Cập nhật giá trị mã giảm giá
                                            className="cart-cupon__coupone__input border border-gray-300 py-2 px-3 w-full"
                                        />
                                        <button type="submit" className="cart-page__coupone__btn cart-page__bottom-btn boskery-btn">
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__hover"></span>
                                            <span className="boskery-btn__text">Apply Code</span>
                                        </button>
                                    </form>
                                    <a href="/page/cart" className="cart-page__update-btn cart-page__bottom-btn boskery-btn">
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__hover"></span>
                                        <span className="boskery-btn__text">Update Cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 w-full xl:w-1/3 px-4">
                            <div className="cart-page__cart-checkout bg-white p-4">
                                <ul className="cart-page__cart-total list-none">
                                    <li>
                                        <span>Subtotal</span>
                                        <span className="cart-page__cart-total__amount">${subtotal.toFixed(2)}</span>
                                    </li>
                                    <li>
                                        <h4 className="cart-page__cart-total__address">Shipping Address</h4>
                                        <address className="cart-page__cart-total__address__text"> {items.length > 0 && items[0].address}</address>
                                    </li>
                                    <li>
                                        <span>Total</span>
                                        <span className="cart-page__cart-total__amount">${subtotal.toFixed(2)}</span>
                                    </li>
                                </ul>
                                <a href="/page/checkout" className="boskery-btn cart-page__checkout-btn w-full flex justify-center items-center mt-4">
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__hover"></span>
                                    <span className="boskery-btn__text">Checkout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
