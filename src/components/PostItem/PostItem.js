import React from "react";

import Card from "../Aux/Card/Card";
import { NavLink } from "react-router-dom";

import "./PostItem.css";

const postItem = (props) => {
  return (
    <Card>
      <h2 className="post__title">{props.title}</h2>
      <h5>
        Created: {props.createdAt} by {props.author}
      </h5>
      <p>{props.content}</p>
      <NavLink to="" className="btn btn--right">
        Read More
      </NavLink>
    </Card>
  );
};

export default postItem;
