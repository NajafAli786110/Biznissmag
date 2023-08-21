import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import { AiFillTags } from "react-icons/ai";
import "./SinglePost.css";
import axios from "axios";
import StartupNews from "../../Home/StartupNews";
import SidebarArticles from "./SidebarArticles";

const SingleBlog = ({ post }) => {
  const [data, setData] = useState([]);
  const TrimWord = (exercepts, maxWords) => {
    const words = exercepts.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
  };
  useEffect(() => {
    axios
      .get("https://biznismag.com/wp-json/wp/v2/posts")
      .then((response) => {
        const extractedData = response.data.map((post) => ({
          title: post.title.rendered,
          Id: post.id,
        }));
        setData(extractedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Extract the first two posts
  const firstTwoPosts = data.slice(4, 7);
  return (
    <div className="blog-page container flex flex-col gap-16">
      <div className="blog-post flex flex-col-reverse md:flex-row justify-center p-4 gap-12">
        <div className="col w-4/5">
          <div className="flex flex-col gap-6">
            <div className="category-box flex justify-between items-center">
              <h4 className="category-name">Enterpreneur News</h4>
              <div className="article-stats flex gap-8 items-center">
                <Link
                  to="/about"
                  className="flex gap-2 justify-center items-center paragraph-single-post"
                >
                  <FaComments className="text-2xl" />
                  14029
                </Link>
                <Link
                  to="/about"
                  className="flex gap-2 justify-center items-center paragraph-single-post"
                >
                  <FaComments className="text-2xl" />
                  14029
                </Link>
              </div>
            </div>
            <div className="post-items flex flex-col justify-between gap-8">
              <h1 className="post-title">{post.title?.rendered}</h1>
              <p className="article-content">{post.excerpt?.rendered}</p>
              <img
                src="https://newsprkv.quomodosoft.com/img/post-layout.616fb62a.png"
                alt="Japan Crisis"
              />
              <div className="author-info-box flex justify-between items-center">
                <div className="author-about flex justify-center items-center gap-8">
                  <img
                    src="https://newsprkv.quomodosoft.com/img/author1.88f6c866.png"
                    className="author-logo w-16"
                    alt="author logo"
                  />
                  <div className="author-info flex flex-col gap-2">
                    <h4 className="author-name text-2xl font-semibold">
                      Rafiqul Islam
                    </h4>
                    <p className="article-details text-lg font-normal">
                      March 26, 2020 Updated 1:58 p.m. ET
                    </p>
                  </div>
                </div>

                <div className="social-media flex justify-center items-center gap-6">
                  <Link>
                    <BiLogoFacebook className="text-2xl" />
                  </Link>
                  <Link>
                    <BiLogoGithub className="text-2xl" />
                  </Link>
                  <Link>
                    <BiLogoTwitter className="text-2xl" />
                  </Link>
                  <Link>
                    <BiLogoLinkedin className="text-2xl" />
                  </Link>
                </div>
              </div>
              <p className="article-content">{post.content?.rendered}</p>
              <div className="tags-pagination flex justify-start items-center">
                <Link
                  className="button-for-post flex gap-2 items-center"
                  to="/"
                >
                  <AiFillTags />
                  Health
                </Link>
                <Link
                  className="button-for-post flex gap-2 items-center"
                  to="/"
                >
                  <AiFillTags />
                  Business Strategies
                </Link>
                <Link
                  className="button-for-post flex gap-2 items-center"
                  to="/"
                >
                  <AiFillTags />
                  Hot News
                </Link>
                <Link
                  className="button-for-post flex gap-2 items-center"
                  to="/"
                >
                  <AiFillTags />
                  Startups Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col w-1/5">
          <h3 className="article-sidebar-heading mb-8">Top Headlines</h3>
          {firstTwoPosts.map((post, index) => (
            <SidebarArticles key={index} title={TrimWord(post.title, 5)} />
          ))}
        </div>
      </div>
      <StartupNews className="mb-16" />
    </div>
  );
};

export default SingleBlog;
