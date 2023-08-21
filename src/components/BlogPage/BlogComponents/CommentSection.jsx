import axios from "axios";
import React, { useState } from "react";

const CommentSection = ({ postId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      author_name: name,
      author_email: email,
      content: comment,
      post: postId,
    };
    const username = "admin"; // Replace with your actual WordPress username
    const password = "Simation786@"; // Replace with your actual WordPress password

    axios
      .post("https://biznismag.com/wp-json/wp/v2/comments", newComment, {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      })
      .then((response) => {
        console.log("Comment submitted successfully:", response.data);
        setName("");
        setEmail("");
        setComment("");
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  };

  return (
    <div className="comment-section">
      <h2 className="section-heading">Leave a Comment</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mt-12"
      >
        <div className="mb-4 flex justify-between gap-4">
          <div className="form_name w-2/4">
            <label className="block text-gray-700 font-bold mb-2 text-xl">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form_email w-2/4">
            <label className="block text-gray-700 font-bold mb-2 text-xl">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-xl">
            Comment
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
