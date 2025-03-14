"use client";
import { useState, useEffect } from "react";

export default function Pagination({ currentPage, setCurrentPage, setProducts }) {
  const [totalPages, setTotalPages] = useState(1);

  // Lấy sản phẩm mỗi khi currentPage thay đổi
  useEffect(() => {
    async function loadProducts() {
      // Giả định rằng setProducts sẽ thực hiện fetch và trả về danh sách sản phẩm
      const products = await setProducts(currentPage);
      setProducts(products);
      // Giả sử API trả về tổng số trang (totalPages)
      setTotalPages(5); // Bạn có thể cập nhật giá trị này từ API
    }

    loadProducts();
  }, [currentPage, setProducts]);

  // Điều hướng trang
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="pagination-container">
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <button onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
          </li>
        )}
        {/* Hiển thị các số trang */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <button
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </li>
        )}
      </ul>
    </div>
  );
}
