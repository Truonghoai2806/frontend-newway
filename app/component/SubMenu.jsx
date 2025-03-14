import React from 'react';

const SubMenu = ({ isDropdownOpen }) => {
  if (!isDropdownOpen) return null; // Không hiển thị nếu menu không mở

  return (
    <ul className="absolute bg-white shadow-lg mt-2 z-10">
      <li><a href="team.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</a></li>
      <li><a href="team-carousel.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team Carousel</a></li>
      <li><a href="team-details.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team Details</a></li>
      <li><a href="pricing.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pricing</a></li>
      <li><a href="testimonials-carousel.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonials Carousel 01</a></li>
      <li><a href="testimonials-carousel-2.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonials Carousel 02</a></li>
      <li>
        <a href="gallery.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery</a>
        <ul className="ml-4">
          <li><a href="gallery.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery Masonry</a></li>
          <li><a href="gallery-filter.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery Filter</a></li>
          <li><a href="gallery-grid.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery Grid</a></li>
          <li><a href="gallery-carousel.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery Carousel</a></li>
        </ul>
      </li>
      <li><a href="faq.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">FAQs</a></li>
      <li><a href="login.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</a></li>
      <li><a href="404.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">404 Error</a></li>
    </ul>
  );
};

export default SubMenu;
