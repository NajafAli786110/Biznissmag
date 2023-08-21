import React from 'react'
import { Link } from 'react-router-dom';
import './HomeCompo.css';

const InsightsArticle = (props) => {
  return (
    <div className='flex flex-col gap-4'>
        <h4 className="insight-title">{props.title}</h4>
        <p className="insight-exercept">{props.exercepts}</p>
        <Link to={`/post/${props.id}`} className='insight-button'>Read More</Link>
    </div>
  )
}

export default InsightsArticle;