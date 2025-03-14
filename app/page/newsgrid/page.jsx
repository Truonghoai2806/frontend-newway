"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const NewGridLeft = () => {
    const [postData, setPostData] = useState([]); // Quản lý dữ liệu bài viết
    const [error, setError] = useState(null); // Quản lý lỗi
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const postsPerPage = 5;

    dayjs.extend(customParseFormat);

    const fetchPostData = async () => {
        try {
            const response = await fetch("/api/auth/post", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json", // Không cần nếu không gửi body
                },
            });

            if (response.ok) {
                const data = await response.json();

                console.log("API Response:", data.data);

                if (Array.isArray(data.data)) {
                    setPostData(data.data); // Lưu dữ liệu bài viết nếu là mảng
                } else {
                    console.error("The response's data is not an array");
                    setPostData([]); // Reset nếu dữ liệu không hợp lệ
                }
            } else {
                console.error("Error fetching data from API");
                setPostData([]); // Reset dữ liệu khi API trả về lỗi
                setError("Error fetching data from API");
            }
        } catch (error) {
            console.error("Lỗi khi lấy thông tin bài viết:", error.message);
            setError(error.message || "Đã xảy ra lỗi không xác định.");
        }
    };

    // Gọi API khi component được mount
    useEffect(() => {
        fetchPostData();
        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    "http://api-core.dsp.one/api/auth/category?page=1&limit=5"
                );
                setCategories(response.data.data); // assuming categories are in `data`
            } catch (error) {
                console.error("Error fetching categories:", error);
                setError(true);
            }
        };

        fetchCategories();
    }, []);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `http://api-core.dsp.one/api/auth/post?per_page=${postsPerPage}`
                );
                setPosts(response.data.data); // assuming posts are in `data`
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setError(true);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage:
                            "url(/assets/images/backgrounds/page-header-bg.jpg)",
                    }}
                />
                <div className="container mx-auto">
                    <h2 className="page-header__title text-3xl font-bold text-center py-8">
                        New Grid Left Sidebar
                    </h2>
                    <ul className="boskery-breadcrumb list-unstyled flex justify-center space-x-4">
                        <li>
                            <a href="/" className="text-blue-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <span>Latest News</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="blog-one blog-one--grid blog-one--sidebar py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="col-span-1 md:col-span-1">
                            <div className="">
                                <aside className="widget-area">
                                    <div className="sidebar__form sidebar__single">
                                        <h4 className="sidebar__title sidebar__form__title">
                                            search here
                                        </h4>
                                        {/* /.sidebar__title */}
                                        <form action="#" className="sidebar__search">
                                            <input type="text" placeholder="Search Here" />
                                            <button type="submit" aria-label="search submit">
                                                <span className="icon-search" />
                                            </button>
                                        </form>
                                        {/* /.sidebar__search */}
                                    </div>
                                    {/* /.sidebar__form sidebar__single */}
                                    <div className="sidebar__posts-wrapper sidebar__single">
                                        <h4 className="sidebar__title sidebar__posts-title">Latest Posts</h4>
                                        <ul className="sidebar__posts list-unstyled">
                                            {error ? (
                                                <li>Failed to load posts. Please try again later.</li>
                                            ) : (
                                                posts.map((post) => (
                                                    <li key={post.id} className="sidebar__posts__item">
                                                        <div className="sidebar__posts__image">
                                                            <Image width={80} height={100} src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/file/uploads/${post.thumbnail}` || "/assets/images/blog/lp-1-1.jpg"} alt="Latest posts" />
                                                        </div>
                                                        <div className="sidebar__posts__content">
                                                            <p className="sidebar__posts__meta">
                                                                <a href="#">
                                                                    <span className="icon-user" />
                                                                    By Admin
                                                                </a>
                                                            </p>
                                                            <h4 className="sidebar__posts__title">
                                                                <a href={`/page/newsdetail/${post.id}`}>
                                                                    {post.title}
                                                                </a>
                                                            </h4>
                                                        </div>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                    {/* /.sidebar__posts-wrapper sidebar__single */}
                                    <div className="sidebar__categories-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Categories</h4>
                                        <ul className="sidebar__categories list-unstyled">
                                            {loading ? (
                                                <li>Loading categories...</li>
                                            ) : error ? (
                                                <li>Failed to load categories. Please try again later.</li>
                                            ) : (
                                                categories.map((category) => (
                                                    <li key={category.id}>
                                                        <a href={`#`}>
                                                            {category.name} <span>({category.item_count})</span>
                                                        </a>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                    {/* /.sidebar__categories-wrapper sidebar__single */}
                                    <div className="sidebar__tags-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Tags</h4>
                                        {/* /.sidebar__title */}
                                        <div className="sidebar__tags">
                                            <a href="/page/newsdetail">Poultry</a>
                                            <a href="/page/newsdetail">Organ Meats</a>
                                            <a href="/page/newsdetail">Exotic Meats</a>
                                            <a href="/page/newsdetail">Lamb</a>
                                            <a href="/page/newsdetail">Sausages</a>
                                            <a href="/page/newsdetail">Specialty Cuts</a>
                                            <a href="/page/newsdetail">Game Meat</a>
                                            <a href="/page/newsdetail">Veal</a>
                                        </div>
                                        {/* /.sidebar__tags */}
                                    </div>
                                    {/* /.sidebar__tags-wrapper sidebar__single */}
                                    <div className="sidebar__comments-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Comments</h4>
                                        {/* /.sidebar__title */}
                                        <ul className="sidebar__comments list-unstyled">
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                {/* /.sidebar__comments__icon */}
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed
                                                        inventor
                                                    </a>
                                                </h6>
                                                {/* /.sidebar__comments__title */}
                                            </li>
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                {/* /.sidebar__comments__icon */}
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed
                                                        inventor
                                                    </a>
                                                </h6>
                                                {/* /.sidebar__comments__title */}
                                            </li>
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                {/* /.sidebar__comments__icon */}
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed
                                                        inventor
                                                    </a>
                                                </h6>
                                                {/* /.sidebar__comments__title */}
                                            </li>
                                        </ul>
                                        {/* /.sidebar__comments list-unstyled */}
                                    </div>
                                    {/* /.sidebar__comments-wrapper sidebar__single */}
                                </aside>
                            </div>
                        </div>

                        {/* Posts */}
                        <div className="col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {postData.length > 0 ? (
                                    postData.map((post, index) => {
                                        // Xử lý chuỗi ngày tháng
                                        const rawDate = `${post.created_at}`;
                                        const parsedDate = dayjs(rawDate, "DD-MM-YYYY HH:mm:ss");
                                        return (
                                            <div
                                                key={index}
                                                className="blog-card wow fadeInUp flex-1"
                                                data-wow-duration="1500ms"
                                                data-wow-delay="000ms"
                                            >
                                                <div className="blog-card__content">
                                                    <div className="blog-card__top">
                                                        <div className="blog-card__date">
                                                            <span>{parsedDate.date()}</span>
                                                            <span>{parsedDate.format("MMMM")}</span>
                                                        </div>
                                                        <ul className="list-unstyled blog-card__meta">
                                                            <li>
                                                                <a href="#">
                                                                    <span className="icon-user" /> by {post.author}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="icon-chat" /> {post.views} Views
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="blog-card__image ">
                                                        <Image
                                                            width={322}
                                                            height={252}
                                                            className="h-[252px]"
                                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/file/uploads/${post.thumbnail}` ||
                                                                '/assets/images/blog/blog-1-1.jpg'}
                                                            alt={post.title}
                                                        />
                                                        <a
                                                            href={`/page/newsdetail/${post.id}`}
                                                            className="blog-card__hover"
                                                        >
                                                            <div className="blog-card__hover__box blog-card__hover__box--1" />
                                                            <div className="blog-card__hover__box blog-card__hover__box--2" />
                                                            <div className="blog-card__hover__box blog-card__hover__box--3" />
                                                            <div className="blog-card__hover__box blog-card__hover__box--4" />
                                                        </a>
                                                    </div>
                                                    <h3 className="blog-card__title">
                                                        <a href={`/page/newsdetail/${post.id}`}>{post.title}</a>
                                                    </h3>
                                                </div>
                                                <a
                                                    href={`/page/newsdetail/${post.id}`}
                                                    className="blog-card__link"
                                                >
                                                    Read more <span className="icon-right" />
                                                </a>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>{error || "Loading data..."}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewGridLeft;
