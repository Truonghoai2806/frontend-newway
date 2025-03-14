"use client"; // Thêm dòng này ở đầu file

import { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie"; 
import "../../../public/assets/css/viewoder.css";

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Lấy token từ cookie
        const loginData = Cookies.get("loginData");
        const token = loginData ? JSON.parse(loginData).token : null;
        console.log("Token", token);

        const response = await fetch(
          "/api/order/myorderhistory",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Sử dụng token từ cookie
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.status === "success") {
          setOrders(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="page-header relative" style={{ height: "320px" }}>
        <div
          className="page-header__bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/images/backgrounds/page-header-bg.jpg')",
          }}
        ></div>

        <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
          <h2 className="page-header__title text-[55px] font-bold text-white text-center">
            View Order
          </h2>
          <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/page/vieworder" className="hover:underline">
                <span>View Order</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="order-page py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 px-4">
              <div className="overflow-x-auto">
                <section>
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
                      {orders.map((order, index) => (
                        <tr key={index}>
                          <td className="py-4 px-4 border-b">
                            <div className="flex items-center">
                              <Image
                                width={12}
                                height={12}
                                src="/images/product1.jpg" // Thay đổi đường dẫn hình ảnh nếu cần
                                alt=""
                                className="w-12 h-12"
                              />
                            </div>
                          </td>
                          <td className="py-4 px-4 border-b">{order.name}</td>
                          <td className="py-4 px-4 border-b">
                            ${order.total_order}
                          </td>
                          <td className="py-4 px-4 border-b">1</td>{" "}
                          {/* Số lượng có thể cần điều chỉnh */}
                          <td className="py-4 px-4 border-b">
                            ${order.total_order}
                          </td>
                          <td className="py-4 px-4 border-b">{order.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>
              <div className="mt-4">
                <h5 className="text-lg font-semibold">Tóm tắt đơn hàng:</h5>
                <ul className="bg-white border border-gray-300 rounded-lg">
                  <li className="flex justify-between py-2 px-4 border-b">
                    Tổng phụ
                    <span>
                      $
                      {orders
                        .reduce(
                          (acc, order) => acc + parseFloat(order.total_order),
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </li>
                  <li className="flex justify-between py-2 px-4 border-b">
                    Phí vận chuyển
                    <span>
                      $
                      {orders.length > 0
                        ? parseFloat(orders[0].shipping_costs).toFixed(2)
                        : "0.00"}
                    </span>
                  </li>
                  <li className="flex justify-between py-2 px-4">
                    <h4 className="font-bold">Tổng cộng</h4>
                    <span>
                      $
                      {orders
                        .reduce(
                          (acc, order) => acc + parseFloat(order.total),
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Customer Information */}
            <div className="w-full lg:w-1/3 px-4">
              <div className="bg-white shadow-md rounded-lg mb-4">
                <div className="p-4">
                  <h5 className="font-semibold">Thông tin khách hàng</h5>
                  <address className="mt-2">
                    {orders.length > 0 ? orders[0].name : "N/A"}
                    <br />
                    {orders.length > 0 ? orders[0].shipping_address : "N/A"}
                    <br />
                    Điện thoại:{" "}
                    {orders.length > 0 ? orders[0].phone_number : "N/A"}
                  </address>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg">
                <div className="p-4">
                  <h5 className="font-semibold">Địa chỉ giao hàng</h5>
                  <address className="mt-2">
                    {orders.length > 0 ? orders[0].shipping_address : "N/A"}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Order;
