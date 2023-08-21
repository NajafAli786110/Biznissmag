import React from "react";
import "./SinglePost.css";
import { Link } from "react-router-dom";

const SidebarArticles = (props) => {
  return (
    <div className="border-b-2 border-dashed pb-4 border-black mb-7">
      <div className="Sidebar-article-content flex flex-col justify-center items-center gap-4">
        <img
          src="https://img.freepik.com/premium-vector/breaking-news-background-with-world-map_275806-17.jpg?w=826"
          alt="Sidebar Image"
        />
        <div className="article-items flex flex-col gap-4">
          <div className="Sidebar-article-category">
            <Link to="/about">Technology March 27, 2020</Link>
          </div>
          <h4 className="article-content">
            {props.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SidebarArticles;
