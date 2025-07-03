import React, { useEffect, useState } from "react";

import "./BlogList.css";

import BlogData from "../../../Data/BlogData";
import { Link } from "react-router-dom";
import {allBlogs} from "../../../api/service/allBlogs";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const response = await allBlogs();
      if (response?.success === true) {
        const limitedBlogs = response.blogs.slice(0, 6);
        setBlogs(limitedBlogs);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 d-flex justify-content-center">
        <div
          className="spinner-grow"
          style={{
            width: "3rem",
            height: "3rem",
            color: "#fddc7a",
            borderRightColor: "transparent",
          }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!blogs) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="blogListSection">
        <div className="blogListHeaderContainer">
          <div className="blogListHeader">
            <h2>The Blog</h2>
          </div>
        </div>
        <div className="blogPostListContainer">
          {BlogData.map((blogPost) => (
            <div className="blogPost">
              <div className="blogPostThumb">
                <img src={blogPost.blogThumbnail} alt="blogPost" />
              </div>
              <div className="blogPostContent">
                <div className="blogPostContentDate">
                  <p>by admin</p>
                  <p>{blogPost.blogDate}</p>
                </div>
                <div className="blogPostContentHeading">
                  <Link to="/BlogDetails" onClick={scrollToTop}>
                    {blogPost.blogHeading}
                  </Link>
                </div>
                <div className="blogPostContentDescription">
                  <p>
                    Midst one brought greater also morning green saying had
                    good. Open stars day let over gathered, grass face one every
                    light of under.
                  </p>
                </div>
                <div className="blogPostContentReadMore">
                  <Link to="/BlogDetails" onClick={scrollToTop}>
                    Continue Reading
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;