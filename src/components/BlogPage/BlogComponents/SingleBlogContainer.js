import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleBlog from "./SingleBlog"; // Import the presentational component

const SingleBlogContainer = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://biznismag.com/wp-json/wp/v2/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      });
  }, [postId]);

  return <SingleBlog post={post} />;
};

export default SingleBlogContainer;
