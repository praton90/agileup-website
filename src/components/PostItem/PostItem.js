import React from "react";

import Card from "../Aux/Card/Card";
import { Link } from "react-router-dom";

// import { FaAt, FaCalendarAlt } from "react-icons/fa";

import "./PostItem.css";

const postItem = (props) => {
  return (
    <Card>
      <h2 className="post__title">{props.post.title}</h2>
      {/* <div className="post__metadata">
        <span className="icon">
          <FaAt />
        </span>
        {props.post.author}
      </div>
      <div className="post__metadata">
        <span className="icon">
          <FaCalendarAlt />
        </span>
        {new Date(props.post.createdAt).toDateString()}
      </div>
      <p className="post__intro">{props.post.body}</p> */}
      <Link className="btn btn--right" to={"/posts/" + props.post.id}>
        Read More
      </Link>
    </Card>
  );
};

export default postItem;
