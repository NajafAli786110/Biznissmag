import React from "react";
import { Link } from "react-router-dom";
import './HomeCompo.css';

const StartupArticle = (props) => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <img src={props.imgURL} alt="Financial Article" />
      <div className="article-content flex flex-col gap-4 items-start">
        <h3 className="startup-title text-black">{props.title}</h3>
        <p className="paragraph">{props.exercept}</p>
        <Link to={`/post/${props.id}`} className="button-for-web">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default StartupArticle;
