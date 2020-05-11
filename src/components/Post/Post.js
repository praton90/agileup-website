import React from "react";

import Card from "../Card/Card";

const post = (props) => {
  return (
    <Card>
      <h2>{props.title}</h2>
      <h5>
        Created: {props.createdAt} by {props.author}
      </h5>
      <p>{props.content}</p>
    </Card>
  );
};

export default post;
