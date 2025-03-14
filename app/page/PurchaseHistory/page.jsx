import "../../../public/assets/css/lichsu.css";

import Image  from "next/image";

function Lichsu() {
  return (
    <section className="purchase-history py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Lịch Sử Mua Hàng
        </h2>
        <div className="overflow-x-auto">
          <div className="bg-white shadow-lg rounded-lg">
            <table className="min-w-full table table-striped">
              {" "}
              {/* Thêm class table của Bootstrap */}
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Mã Đơn Hàng
                  </th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Ngày Mua
                  </th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Sản Phẩm
                  </th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Tên Sản Phẩm
                  </th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Số Lượng
                  </th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Giá
                  </th>
                  <th className="py-3 px-4 border-b text-left text-gray-600">
                    Tổng Giá
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-b">#123456</td>
                  <td className="py-3 px-4 border-b">01/10/2024</td>
                  <td className="py-3 px-4 border-b">
                    <Image
                      width={16}
                      height={16}
                      src="/assets/images/shapes/crack burgers -.jpg"
                      alt="Sản phẩm 1"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="py-3 px-4 border-b">Nội Tạng</td>
                  <td className="py-3 px-4 border-b">1</td>
                  <td className="py-3 px-4 border-b">$15.00</td>
                  <td className="py-3 px-4 border-b">$15.00</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-b">#123457</td>
                  <td className="py-3 px-4 border-b">15/09/2024</td>
                  <td className="py-3 px-4 border-b">
                    <Image
                      width={16}
                      height={16}
                      src="/assets/images/shapes/crack burgers -.jpg"
                      alt="Sản phẩm 2"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="py-3 px-4 border-b">Nội Tạng</td>
                  <td className="py-3 px-4 border-b">2</td>
                  <td className="py-3 px-4 border-b">$25.00</td>
                  <td className="py-3 px-4 border-b">$50.00</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-b">#123458</td>
                  <td className="py-3 px-4 border-b">10/09/2024</td>
                  <td className="py-3 px-4 border-b">
                    <Image
                      width={16}
                      height={16}
                      src="/assets/images/shapes/crack burgers -.jpg"
                      alt="Sản phẩm 3"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="py-3 px-4 border-b">Nội Tạng</td>
                  <td className="py-3 px-4 border-b">1</td>
                  <td className="py-3 px-4 border-b">$30.00</td>
                  <td className="py-3 px-4 border-b">$30.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lichsu;
