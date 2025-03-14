"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const NewListLeft = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    dayjs.extend(customParseFormat);

    // Fetch categories from the API
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
                    `http://api-core.dsp.one/api/auth/post?per_page=${postsPerPage}&page=${currentPage}`
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
    }, [currentPage]);

    // Fetch comments from the API for a specific post
    const fetchComments = async (postId) => {
        try {
            const response = await axios.get(
                `http://api-core.dsp.one/api/auth/post/${postId}/comment`
            );
            setComments(response.data.data); // assuming comments are in `data`
        } catch (error) {
            console.error("Error fetching comments:", error);
            setError(true);
        }
    };

    // Handle pagination change
    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)",
                    }}
                />
                <div className="container mx-auto">
                    <h2 className="page-header__title text-3xl font-bold text-center py-8">
                        New List Left Sidebar
                    </h2>
                    <ul className="boskery-breadcrumb list-unstyled flex justify-center">
                        <li>
                            <a href="/" className="text-blue-500">Home</a>
                        </li>
                        <li>
                            <a href="/page/leftnew" className="hover:underline">
                                <span>Latest News</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="blog-one blog-one--grid blog-one--sidebar py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="col-span-1 md:col-span-1">
                            <div>
                                <aside className="widget-area">
                                    {/* Search Form */}
                                    <div className="sidebar__form sidebar__single">
                                        <h4 className="sidebar__title sidebar__form__title">Search Here</h4>
                                        <form action="#" className="sidebar__search">
                                            <input type="text" placeholder="Search Here" />
                                            <button type="submit" aria-label="search submit">
                                                <span className="icon-search" />
                                            </button>
                                        </form>
                                    </div>

                                    {/* Latest Posts */}
                                    <div className="sidebar__posts-wrapper sidebar__single">
                                        <h4 className="sidebar__title sidebar__posts-title">Latest Posts</h4>
                                        <ul className="sidebar__posts list-unstyled">
                                            {loading ? (
                                                <li>Loading posts...</li>
                                            ) : error ? (
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

                                    {/* Categories (from API) */}
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

                                    {/* Tags */}
                                    <div className="sidebar__tags-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Tags</h4>
                                        <div className="sidebar__tags">
                                            <a href="/page/newsdetail">Poultry</a>
                                            <a href="/page/newsdetail">Organ Meats</a>
                                            <a href="/page/newsdetail">Exotic Meats</a>
                                        </div>
                                    </div>

                                    {/* Comments */}
                                    <div className="sidebar__comments-wrapper sidebar__single">
                                        <h4 className="sidebar__title">Comments</h4>
                                        <ul className="sidebar__comments list-unstyled">
                                            {comments.length === 0 ? (
                                                <li>No comments yet.</li>
                                            ) : (
                                                comments.map((comment) => (
                                                    <li key={comment.id}>
                                                        <div className="sidebar__comments__icon">
                                                            <span className="icon-speech-bubble" />
                                                        </div>
                                                        <h6 className="sidebar__comments__title">
                                                            <a href="/page/newsdetail">
                                                                {comment.content}
                                                            </a>
                                                        </h6>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>

                        {/* Blog Content */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="row gutter-y-40 flex grid grid-cols-1 gap-4">
                                {error ? (
                                    <div>Error loading posts. Please try again later.</div>
                                ) : posts.length > 0 ? (
                                    posts.map((post) => {
                                        const rawDate = `${post.created_at}`;
                                        const parsedDate = dayjs(rawDate, "DD-MM-YYYY HH:mm:ss");
                                        return (
                                            <div className="col-md-12" key={post.id}>
                                                <div className="blog-card blog-card--four wow fadeInUp animated">
                                                    <div className="blog-card__image">
                                                        <Image
                                                            width={770}
                                                            height={350}
                                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/file/uploads/${post.thumbnail}` ||
                                                            '/assets/images/blog/blog-1-1.jpg'}
                                                            alt="Blog Image"
                                                            className="w-[770px] h-[350px]"
                                                        />
                                                        <div className="blog-card__date">
                                                            <span>{parsedDate.date()}</span>
                                                            <span>{parsedDate.format("MMMM")}</span>
                                                        </div>
                                                        <a href={`/page/newsdetail/${post.id}`} className="blog-card__hover" onClick={() => fetchComments(post.id)}>
                                                            <span className="sr-only">Blog Post</span>
                                                            <div className="blog-card__hover__box blog-card__hover__box--1"></div>
                                                            <div className="blog-card__hover__box blog-card__hover__box--2"></div>
                                                            <div className="blog-card__hover__box blog-card__hover__box--3"></div>
                                                            <div className="blog-card__hover__box blog-card__hover__box--4"></div>
                                                        </a>
                                                    </div>
                                                    <div className="blog-card__content">
                                                        <ul className="list-unstyled blog-card__meta">
                                                            <li>
                                                                <a href="#">
                                                                    <span className="icon-user"></span> by Admin
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="icon-chat"></span> {post.comment_count} Comments
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <h3 className="blog-card__title">
                                                            <a href={`/page/newsdetail/${post.id}`}>{post.title}</a>
                                                        </h3>
                                                        <p className="blog-card__text">
                                                            {post.excerpt}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div>Loading posts...</div>
                                )}

                                {/* Pagination */}
                                <div className="col-12">
                                    <ul className="post-pagination flex space-x-2 mt-4">
                                        <li>
                                            <a href="#" onClick={() => handlePagination(currentPage - 1)}>
                                                <span className="icon-arrow-left"></span>
                                            </a>
                                        </li>
                                        {[...Array(3)].map((_, index) => (
                                            <li key={index}>
                                                <a href="#" onClick={() => handlePagination(index + 1)}>
                                                    {index + 1}
                                                </a>
                                            </li>
                                        ))}
                                        <li>
                                            <a href="#" onClick={() => handlePagination(currentPage + 1)}>
                                                <span className="icon-arrow-right"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewListLeft;
