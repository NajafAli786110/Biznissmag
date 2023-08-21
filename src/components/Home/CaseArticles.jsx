import React from "react";
import { Link } from "react-router-dom";
import "./HomeCompo.css";

const CaseArticles = (props) => {
  return (
    <div className="flex gap-8 items-start">
      <img src={props.imgURL} alt="Financial Article" className="caseStudyImg"/>
      <div className="article-content flex flex-col gap-1 items-start">
        <h3 className="caseStudytitle text-black">{props.title}</h3>
        <p className="paragraph">{props.exercept}</p>
        <Link to={`/post/${props.id}`} className="button-for-web">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CaseArticles;
