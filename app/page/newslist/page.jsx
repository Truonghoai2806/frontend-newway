"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const BlogSection = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;
    dayjs.extend(customParseFormat);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `http://api-core.dsp.one/api/auth/post?per_page=${postsPerPage}&page=${currentPage}`
                );
                setPosts(response.data.data); // assuming posts are in `data`
                // setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setError(true);
                // setLoading(false);
            }
        };

        fetchPosts();
    }, [currentPage]);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };
    return (
        <>

            <section className="page-header relative" style={{ height: '320px' }}>
                <div
                    className="page-header__bg absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/backgrounds/page-header-bg.jpg')",
                    }}
                ></div>

                <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="page-header__title text-[55px] font-bold text-white text-center">NEW LIST</h2>
                    <ul className="boskery-breadcrumb flex text-white list-unstyled text-[16px]">
                        <li>
                            <a href="index.html" className="hover:underline">Home</a>
                        </li>

                        <li>
                            <span>LATEST NEWS</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="blog-one blog-one--list section-space ">
                <div className="container mx-auto px-4">
                    <div className="row justify-center flex  ">
                        <div className="col-lg-8 lg:w-8/12">
                            <div className="row gutter-y-40 flex grid grid-cols-1 gap-y-10 ">


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

export default BlogSection;
