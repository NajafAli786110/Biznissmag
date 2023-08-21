import React from "react";
import { Link } from "react-router-dom";

const FeatureArticle = (props) => {
  return (
    <div className="w-1/2 flex flex-col gap-4 items-start">
      <img
        src={props.image}
        alt="Financial Article"
      />
      <div className="article-content flex flex-col gap-4 items-start">
        <h3 className="top-category text-black">
          {props.title}
        </h3>
        <p className="paragraph">
          {props.exercept}
        </p>
        <Link to={`/post/${props.id}`} className="button-for-web">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeatureArticle;
