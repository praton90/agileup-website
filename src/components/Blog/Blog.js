import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Header from "../Layout/Header/Header";
import Posts from "../../containers/Posts/Posts";
import FullPost from "../../containers/Posts/FullPost/FullPost";
import About from "../About/About";
import Container from "../Aux/Container/Container";

const blog = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Route path="/" exact component={Posts} />
        <Route path="/about" component={About} />
        <Route path="/posts/:id" component={FullPost} />
      </Container>
    </Fragment>
  );
};

export default blog;
