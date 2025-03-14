"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Cookies from 'js-cookie';

const Sidbar = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const postsPerPage = 5;
    const [newsDetail, setNewsDetail] = useState(null);
    const [comments, setComment] = useState(null);
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    dayjs.extend(customParseFormat);
    const { id } = useParams();
    const [currentURL, setCurrentURL] = useState("");
    const [user, setUser] = useState(null); // Lưu thông tin người dùng
    const [commentData, setCommentData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const loginData = Cookies.get("loginData");
    const token = loginData ? JSON.parse(loginData).token : null;

    useEffect(() => {
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

    // Fetch posts from the API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `http://api-core.dsp.one/api/auth/post?per_page=${postsPerPage}`
                );
                setPosts(response.data.data); // assuming posts are in `data`
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setError(true);
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        const fetchUserData = async (user_id) => {
            try {
                const response = await fetch(`/api/auth/user/user-profile/${user_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    console.error('Failed to fetch user data:', response.status, response.statusText);
                    return null;
                }

                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching user data:', error);
                return null;
            }
        };

        const loginData = Cookies.get('loginData');
        const authData = loginData ? JSON.parse(loginData) : null;

        if (authData && authData.user_id && token) {
            const getUserData = async () => {
                const user = await fetchUserData(authData.user_id);
                if (user) {
                    setUser(user);
                } else {
                    console.error('Failed to retrieve user data.');
                }
            };

            getUserData();
        } else {
            console.warn('No valid login data or token found.');
        }
        if (id) {
            const fetchNewsDetail = async () => {
                try {
                    const response = await fetch(`/api/auth/post/${id}`);
                    const data = await response.json();

                    setNewsDetail(data.data);
                } catch (error) {
                    console.error("Error fetching news details:", error);
                } finally {
                    setIsLoading(false);
                }
            };

            const fetchComments = async () => {
                try {
                    const response = await fetch(`/api/auth/post/${id}/comment`);
                    const data = await response.json();
                    setComment(data.data); // Lưu dữ liệu bình luận
                    // console.log(data);
                    const usersData = {};
                    for (let comment of data.data) {
                        const userResponse = await fetch(`/api/auth/user/${comment.user_id}`);
                        const userData = await userResponse.json();
                        // console.log(usersData);
                        usersData[comment.user_id] = userData.data.name; // Lưu tên người dùng theo user_id
                    }
                    setUsers(usersData);

                } catch (error) {
                    console.error("Error fetching comments:", error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchComments();
            fetchNewsDetail();
        }
        if (typeof window !== "undefined") {
            setCurrentURL(window.location.href);
        }
    }, [token, id]);
    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        const loginData = Cookies.get("loginData");
        const userId = loginData ? JSON.parse(loginData).user_id : null;
        const token = loginData ? JSON.parse(loginData).token : null;

        // console.log(token);

        if (!token) {
            alert("You must be logged in to leave a comment.");
            return;
        }
        const commentContent = event.target.message.value;
        if (!commentContent) {
            alert("Please write a comment before submitting.");
            return;
        }

        const commentData = {
            user_id: userId,
            comment: commentContent,
        };

        try {
            // Gửi bình luận tới API
            const response = await fetch(`/api/auth/post/${id}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(commentData),
            });

            if (response.ok) {
                alert("Comment submitted successfully!");
                // Cập nhật lại danh sách bình luận nếu cần
            } else {
                alert("Failed to submit comment.");
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
            alert("An error occurred while submitting your comment.");
        }
    };

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    if (!newsDetail) {
        return <div className="error">Failed to load news details.</div>;
    }
    const rawDate = newsDetail?.created_at;
    const parsedDate = dayjs(rawDate, "DD-MM-YYYY HH:mm:ss");
    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: `url(${newsDetail.headerImage || "/assets/images/backgrounds/page-header-bg.jpg"})`,
                    }}
                />
                <div className="container mx-auto">
                    <h2 className="page-header__title">News details</h2>
                    <ul className="boskery-breadcrumb list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <span>Latest News</span>
                        </li>
                        <li>
                            <span>News Details</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="blog-details section-space">
                <div className="container mx-auto">
                    <div className="flex flex-wrap xl1:flex-row flex-col gutter-y-60">
                        <div className="flex-none w-full xl1:w-1/3 mb-6 xl1:mb-0">
                            <div className="sidebar" style={{ width: "100%", marginRight: "30px" }}>
                                <aside className="widget-area">
                                    <div className="sidebar__form sidebar__single">
                                        <h4 className="sidebar__title sidebar__form__title">
                                            search here
                                        </h4>
                                        <form action="#" className="sidebar__search">
                                            <input type="text" placeholder="Search Here" />
                                            <button type="submit" aria-label="search submit">
                                                <span className="icon-search" />
                                            </button>
                                        </form>
                                    </div>
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
                                    <div className="sidebar__categories-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Categories</h4>
                                        <ul className="sidebar__categories list-unstyled">
                                            {isLoading ? (
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
                                    <div className="sidebar__tags-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Tags</h4>
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
                                    </div>
                                    <div className="sidebar__comments-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Comments</h4>
                                        <ul className="sidebar__comments list-unstyled">
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed inventor
                                                    </a>
                                                </h6>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed inventor
                                                    </a>
                                                </h6>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments__icon">
                                                    <span className="icon-speech-bubble" />
                                                </div>
                                                <h6 className="sidebar__comments__title">
                                                    <a href="/page/newsdetail">
                                                        Neque porro est qui dolorem ipsum quia quaed inventor
                                                    </a>
                                                </h6>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="flex-none w-full xl1:w-2/3 mt-[20px]">
                            <div className="blog-details mx-[30px]">
                                <div className="blog-card blog-card--four">
                                    <div className="blog-card__image">
                                        <Image
                                            width={500}
                                            height={500}
                                            className=""
                                            // src={newsDetail.thumbnail}
                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/file/uploads/${newsDetail.thumbnail}` || "/assets/images/blog/blog-d-1-1.jpg"}
                                            alt={newsDetail.title || "News"}
                                        />
                                        <div className="blog-card__date">
                                            <span>{parsedDate.date()}</span>
                                            <span>{parsedDate.format("MMMM")}</span>
                                        </div>

                                    </div>
                                    <div className="blog-card__content">
                                        <ul className="list-unstyled blog-card__meta">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-user" /> {newsDetail.author || "Adminahaha"}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-chat" /> {newsDetail.commentsCount || 0} Comments
                                                </a>
                                            </li>
                                        </ul>
                                        <h3 className="blog-card__title">{newsDetail.title}</h3>
                                        <div className="blog-card__content__inner">
                                            <p className="blog-card__text blog-card__text--1">
                                                {newsDetail.content}
                                            </p>
                                            <p className="blog-card__text blog-card__text--1">
                                                {newsDetail.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details__meta">
                                    <div className="blog-details__tags">
                                        <h4 className="blog-details__meta__title">Tags:</h4>
                                        <div className="blog-details__tags__box">
                                            {
                                                Array.isArray(newsDetail.tags) ? (
                                                    newsDetail.tags.length > 0 ? (
                                                        newsDetail.tags.map((tag, index) => (
                                                            <a key={index} href='#'>
                                                                {tag}
                                                            </a>
                                                        ))
                                                    ) : (
                                                        <p>No tags available</p>
                                                    )
                                                ) : (
                                                    // Hiển thị kiểu dữ liệu đơn nếu không phải mảng
                                                    <a href="#"> {newsDetail.tags}</a>
                                                )
                                            }

                                        </div>

                                    </div>
                                    <div className="blog-details__social">
                                        <h4 className="blog-details__meta__title">Share:</h4>
                                        <div className="boskery-social">
                                            <a href={`https://facebook.com/share?u=${encodeURIComponent(currentURL)}`} target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f" aria-hidden="true" />
                                                <span className="sr-only">Facebook</span>
                                            </a>
                                            <a href={`https://twitter.com/share?url=${encodeURIComponent(currentURL)}`}>
                                                <i className="fab fa-twitter" aria-hidden="true" />
                                                <span className="sr-only">Twitter</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="comments-one mx-[30px]">
                                <h3 className="comments-one__title">
                                    {comments && comments.length > 0 ? `${comments.length} Comments` : `No Comments`}
                                </h3>
                                <ul className="list-unstyled comments-one__list">
                                    {Array.isArray(comments) && comments.length > 0 ? (
                                        comments.map((comment, index) => {
                                            const rawDate = `${comment.created_at}`;
                                            const formattedDate = dayjs(rawDate, "DD-MM-YYYY HH:mm:ss").format("MMMM D, YYYY [at] h:mm a");
                                            return (
                                                <li
                                                    key={index}
                                                    className="comments-one__card wow fadeInUp"
                                                    data-wow-delay="100ms"
                                                    data-wow-duration="1500ms"
                                                >
                                                    <div className="comments-one__card__image">
                                                        <Image
                                                            width={500}
                                                            height={500}
                                                            src="/assets/images/blog/blog-comment-1-1.png"
                                                            alt={comment.user_id} // Giả sử bạn sử dụng user_id làm alt
                                                        />
                                                    </div>
                                                    <div className="comments-one__card__content">
                                                        <div className="comments-one__card__top">
                                                            <div className="comments-one__card__info">
                                                                <h3 className="comments-one__card__title">
                                                                    {users[comment.user_id] || "Unknown User"}
                                                                </h3>
                                                                <p className="comments-one__card__date">
                                                                    {formattedDate}
                                                                </p>
                                                            </div>
                                                            <button type="button" className="comments-one__card__reply">
                                                                Reply
                                                            </button>
                                                        </div>
                                                        <p className="comments-one__card__text">
                                                            {comment.comment} {/* Hiển thị nội dung bình luận */}
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    ) : (
                                        <p>No comments yet.</p> // Nếu không có bình luận, hiển thị thông báo này
                                    )}
                                </ul>


                            </div>

                            <div className="comments-form mx-[30px]">
                                <h3 className="comments-form__title">Leave a Comment</h3>
                                <form onSubmit={handleCommentSubmit} className="comments-form__form contact-form-validated form-one">
                                    <input type="hidden" name="postId" value={id} />
                                    <div className="form-one__group">
                                        {user ? (
                                            <>
                                                <div className="form-one__control wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={user.data ? user.data.name : ''}  // Kiểm tra nếu user.data có tồn tại thì lấy name, nếu không để trống
                                                        placeholder="Your Name"
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-one__control wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="50ms">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={user.data ? user.data.email : ''}
                                                        placeholder="Your Email"
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="form-one__control form-one__control--full wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Write Message . ."
                                                        value={commentData.message}
                                                        onChange={(e) => setCommentData({ ...commentData, message: e.target.value })}
                                                    />
                                                </div>
                                                <div className="form-one__control form-one__control--full wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="150ms">
                                                    <button type="submit" className="boskery-btn">
                                                        <span className="boskery-btn__text">Post Comment</span>
                                                        <i className="icon-meat-3" />
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <p>Nothing</p>
                                        )}
                                    </div>
                                </form>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sidbar;
