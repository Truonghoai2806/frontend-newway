"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../../../public/assets/css/viewoder.css";
import Cookies from "js-cookie";

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Thêm state loading

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const loginData = Cookies.get("loginData");
        const token = loginData ? JSON.parse(loginData).token : null;
        console.log("Token", token);

        const response = await fetch('/api/auth/order',
          {
            method: "GET",
            headers: {
              // Authorization: `Bearer ${token}`, // Sử dụng token từ cookie
              // "Content-Type": "application/json",
              // "allowed_secrects": "c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data); // Log the response for debugging
          if (Array.isArray(data.data)) {
            setOrders(data.data); // Set state only if data.data is an array
          } else {
            console.error("The response's data is not an array");
            setOrders([]); // Set an empty array if the data is not an array
          }
        } else {
          console.error("Error fetching data from API");
          setOrders([]); // Set empty array on fetch error
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setOrders([]); // Set empty array in case of error
      }
      setLoading(false); // Dữ liệu đã được tải, thay đổi trạng thái loading
    };

    fetchOrders();
  }, []);

  // Tính tổng phụ và tổng cộng một lần cho hiệu suất tốt hơn
  const totalSubtotal = orders.reduce((total, item) => total + item.subtotal, 0);
  const totalAmount = totalSubtotal + 10.0; // Tổng cộng, bao gồm phí vận chuyển

  if (loading) {
    return (
      <section className="order-page py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Xem đơn hàng
          </h2>
          <p className="text-center">Loading orders...</p> {/* Hiển thị khi dữ liệu đang được tải */}
        </div>
      </section>
    );
  }

  return (
    <section className="order-page py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Xem đơn hàng
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 px-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 border-b">Sản phẩm</th>
                    <th className="py-2 px-4 border-b">Tên sản phẩm</th>
                    <th className="py-2 px-4 border-b">Giá</th>
                    <th className="py-2 px-4 border-b">Số lượng</th>
                    <th className="py-2 px-4 border-b">Tổng phụ</th>
                    <th className="py-2 px-4 border-b">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(orders) && orders.length > 0 ? (
                    orders.map((order) => (
                      <tr key={order.name}>
                        <td className="py-4 px-4 border-b">
                          <Image
                            width={48}
                            height={48}
                            src={`${order.avatar}` || "/assets/images/product1.jpg"}
                            alt={order.productName}
                            className="w-12 h-12"
                          />
                        </td>
                        <td className="py-4 px-4 border-b">{order.name}</td>
                        <td className="py-4 px-4 border-b">{`$${order.price}`}</td>
                        <td className="py-4 px-4 border-b">{order.quantity}</td>
                        <td className="py-4 px-4 border-b">{`$${order.subtotal}`}</td>
                        <td className="py-4 px-4 border-b">{order.status}</td>
                      </tr>
                    ))
                  ) : (
                    <p>Loading orders...</p> // Hiển thị khi chưa có đơn hàng
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <h5 className="text-lg font-semibold">Tóm tắt đơn hàng:</h5>
              <ul className="bg-white border border-gray-300 rounded-lg">
                <li className="flex justify-between py-2 px-4 border-b">
                  Tổng phụ
                  <span>${totalSubtotal}</span>
                </li>
                <li className="flex justify-between py-2 px-4 border-b">
                  Phí vận chuyển
                  <span>$10.00</span>
                </li>
                <li className="flex justify-between py-2 px-4">
                  <h4 className="font-bold">Tổng cộng</h4>
                  <span>${totalAmount}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <div className="bg-white shadow-md rounded-lg mb-4">
              <div className="p-4">
                <h5 className="font-semibold">Thông tin khách hàng</h5>
                <address className="mt-2">
                  2801 Lafayette Blvd, Norfolk, Vermont 23509, Hoa Kỳ
                  <br />
                  Email: johndoe@example.com
                  <br />
                  Điện thoại: (123) 456-7890
                </address>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg">
              <div className="p-4">
                <h5 className="font-semibold">Địa chỉ giao hàng</h5>
                <address className="mt-2">
                  2801 Lafayette Blvd, Norfolk, Vermont 23509, Hoa Kỳ
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
