
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Nếu bạn sử dụng FontAwesome bằng npm
import Image from "next/image";

const BlogOneSectionSpaceTwo = () => {
  return (
    <section
      className="blog-one section-space-two bg-white"
      id="news"
      style={{
        display: "flex",
        justifyContent: "center", // Căn giữa section
      }}
    >
      <div className="container">
        <div className="sec-title sec-title--center">
          <h6 className="sec-title__tagline">latest news</h6>
          <h2 className="sec-title__title">
            latest news from the <br /> blog post
          </h2>
        </div>

        <div
          className="d-flex justify-content-center flex-wrap"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center", // Căn giữa các blog card
            flexWrap: "wrap",
            gap: "20px", // Thêm khoảng cách giữa các card
          }}
        >
          {/* Blog Card 1 */}
          <div className="blog-card" style={{ width: "350px" }}>
            <div className="blog-card__content">
              <div className="blog-card__top">
                <div
                  className="blog-card__date"
                  style={{
                    backgroundColor: "#a82c2c",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ display: "block", fontSize: "18px", fontWeight: "bold" }}>25</span>
                  <span style={{ display: "block", fontSize: "14px" }}>June</span>
                </div>
                <ul className="list-unstyled blog-card__meta">
                  <li>
                    <a href="#" style={{ display: "block", fontSize: "14px", color: "#333", marginTop: "10px" }}>
                      <span className="icon-user"></span> by Admin
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ display: "block", fontSize: "14px", color: "#333" }}>
                      <span className="icon-chat"></span> 2 Comments
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-card__image blog-card__hover" style={{ margin: "20px 0" }}>
                <Image
                width={100}
                height={100}
                  src="/assets/images/blog/blog-1-1.jpg"
                  alt="Our meat Freshness you can taste and quality you can trust"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
              </div>
              <h3 className="blog-card__title" style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                <a href="page/newsdetail">
                  The 10 best principles of storage for different types of meat
                </a>
              </h3>
            </div>
            <a
              href="page/newsdetail"
              className="blog-card__link"
              style={{ color: "#333", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}
            >
              Read more <span><i className="fa-solid fa-chevron-right"></i></span>
            </a>
          </div>

          {/* Blog Card 2 */}
          <div className="blog-card" style={{ width: "350px" }}>
            <div className="blog-card__content">
              <div className="blog-card__top">
                <div
                  className="blog-card__date"
                  style={{
                    backgroundColor: "#a82c2c",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ display: "block", fontSize: "18px", fontWeight: "bold" }}>26</span>
                  <span style={{ display: "block", fontSize: "14px" }}>June</span>
                </div>
                <ul className="list-unstyled blog-card__meta">
                  <li>
                    <a href="#" style={{ display: "block", fontSize: "14px", color: "#333", marginTop: "10px" }}>
                      <span className="icon-user"></span> by Admin
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ display: "block", fontSize: "14px", color: "#333" }}>
                      <span className="icon-chat"></span> 3 Comments
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-card__image blog-card__hover" style={{ margin: "20px 0" }}>
                <Image
                width={100}
                height={100}
                  src="/assets/images/blog/blog-1-1.jpg"
                  alt="Our meat Freshness you can taste and quality you can trust"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
              </div>
              <h3 className="blog-card__title" style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                <a href="page/newsdetail">
                  Our meat Freshness you can taste and quality you can trust
                </a>
              </h3>
            </div>
            <a
              href="page/newsdetail"
              className="blog-card__link"
              style={{ color: "#333", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}
            >
              Read more <span><i className="fa-solid fa-chevron-right"></i></span>
            </a>
          </div>

          {/* Blog Card 3 */}
          <div className="blog-card" style={{ width: "350px" }}>
            <div className="blog-card__content">
              <div className="blog-card__top">
                <div
                  className="blog-card__date"
                  style={{
                    backgroundColor: "#a82c2c",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ display: "block", fontSize: "18px", fontWeight: "bold" }}>26</span>
                  <span style={{ display: "block", fontSize: "14px" }}>June</span>
                </div>
                <ul className="list-unstyled blog-card__meta">
                  <li>
                    <a href="#" style={{ display: "block", fontSize: "14px", color: "#333", marginTop: "10px" }}>
                      <span className="icon-user"></span> by Admin
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ display: "block", fontSize: "14px", color: "#333" }}>
                      <span className="icon-chat"></span> 3 Comments
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-card__image blog-card__hover" style={{ margin: "20px 0" }}>
                <Image
                width={100}
                height={100}
                  src="/assets/images/blog/blog-1-1.jpg"
                  alt="Our meat Freshness you can taste and quality you can trust"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                <div className="blog-card__hover__box blog-card__hover__box--4"></div>
              </div>
              <h3 className="blog-card__title" style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                <a href="page/newsdetail">
                  Our meat Freshness you can taste and quality you can trust
                </a>
              </h3>
            </div>
            <a
              href="page/newsdetail"
              className="blog-card__link"
              style={{ color: "#333", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}
            >
              Read more <span><i className="fa-solid fa-chevron-right"></i></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOneSectionSpaceTwo;
