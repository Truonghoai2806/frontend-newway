"use client";
import React, { useEffect, useRef } from 'react';
import noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css'; // Đường dẫn đúng cho CSS
import "./PriceRangeFilter.css"

const PriceRangeFilter = () => {
  const priceRangeRef = useRef(null);
  const maxValueRef = useRef(null);
  const minValue = 19; // Giá trị nhỏ nhất cố định

  useEffect(() => {
    if (priceRangeRef.current && !priceRangeRef.current.noUiSlider) {
      noUiSlider.create(priceRangeRef.current, {
        start: [69], // Giá trị bắt đầu cho nút bên phải
        connect: [true, false], // Kết nối bên trái với màu
        range: {
          min: minValue, // Giá trị nhỏ nhất
          max: 100, // Giá trị lớn nhất
        },
        behaviour: 'drag', // Chỉ cho phép kéo nút
      });

      priceRangeRef.current.noUiSlider.on('update', (values) => {
        // Cập nhật giá trị lớn nhất
        maxValueRef.current.value = `$${Math.round(values[0])}`;
      });
    }
  }, []);

  return (
    <div className="product__price-ranger">
      <h3 className="product__sidebar__title">Filter by price</h3>
      <form action="#" className="price-ranger">
        <div
          id="slider-range"
          ref={priceRangeRef}
          className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
        >
        </div>
        <div className="ranger-min-max-block flex items-center mt-2">
          <input
            type="text"
            readOnly
            value={`$${minValue}`} // Hiển thị giá trị nhỏ nhất
            className="min border border-gray-300 rounded px-2 py-1 w-24"
          />
          <span className="mx-2">-</span>
          <input
            type="text"
            ref={maxValueRef}
            readOnly
            className="max border border-gray-300 rounded px-2 py-1 w-24"
          />
        </div>
      </form>
    </div>
  );
};

export default PriceRangeFilter;
