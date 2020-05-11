import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Header from "../Layout/Header/Header";
import Posts from "../../containers/Posts/Posts";
import FullPost from "../../containers/Posts/FullPost/FullPost";
import About from "../About/About";

import styles from "./Blog.module.css";

const blog = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.Row}>
        <div className={styles.Column}>
          <Route path="/" exact component={Posts} />
          <Route path="/about" component={About} />
          <Route path="/posts/:id" component={FullPost} />
        </div>
      </div>
    </Fragment>
  );
};

export default blog;
