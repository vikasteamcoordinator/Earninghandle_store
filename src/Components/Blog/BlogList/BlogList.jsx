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
          {blogs?.map((item) => (
            <div className="blogPost">
              <div className="blogPostThumb">
                <img src={item.mainImage} alt="blogPost" />
              </div>
              <div className="blogPostContent">
                <div className="blogPostContentDate">
                  <p>{new Date(item.createdAt).toLocaleDateString("en-CA")}</p>
                </div>
                <div className="blogPostContentHeading">
                  <Link to={`/blogDetails/${item?._id}`} onClick={scrollToTop}>
                    {item.title}
                  </Link>
                </div>
                <div className="blogPostContentDescription">
                  <p className="line-clamp-4">
                    {item.content1}
                  </p>
                </div>
                <div className="blogPostContentReadMore">
                  <Link to={`/blogDetails/${item?._id}`} onClick={scrollToTop}>
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