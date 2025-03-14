"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const scrollToTopBtn = document.querySelector(".scroll-to-target.scroll-to-top");

    const handleScroll = () => {
      if (window.scrollY > 500) {
        scrollToTopBtn?.classList.remove("hidden", "opacity-0");
        scrollToTopBtn?.classList.add("block", "opacity-100");
      } else {
        scrollToTopBtn?.classList.remove("block", "opacity-100");
        scrollToTopBtn?.classList.add("hidden", "opacity-0");
      }
    };

    // Lắng nghe sự kiện cuộn của cửa sổ
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      data-target="html"
      className="scroll-to-target scroll-to-top fixed bottom-4 right-4 hidden opacity-0 transition-opacity duration-300"
      onClick={scrollToTop}
    >
      <span className="scroll-to-top__text">back top</span>
      <span className="scroll-to-top__wrapper">
        <span className="scroll-to-top__inner" style={{ width: '9.88194%' }} />
      </span>
    </a>
  );
}
