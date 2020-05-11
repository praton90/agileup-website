import React, { Component, Fragment } from "react";

import Post from "../../components/Post/Post";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./Posts.module.css";
const contentful = require("contentful");

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };

    this.client = contentful.createClient({
      space: "5ewpe53pwxis",
      accessToken: "Xerq7AgfY3obWybUXHTuhYnXSNUa5aHgd3l5SQnY-jk",
    });
  }

  componentDidMount() {
    this.client
      .getEntries({
        content_type: "blogPost",
      })
      .then((res) => {
        console.log("posts", res);
        const fetchedPosts = res.items.map((post) => {
          return {
            id: post.sys.id,
            title: post.fields.title,
            body: post.fields.body.content[0].content[0].value,
            author: post.fields.author.fields.name,
          };
        });
        console.log(fetchedPosts);

        this.setState({ posts: fetchedPosts, loading: false });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log("Something wrong happened", error);
      });
  }

  render() {
    let posts = (
      <Card>
        <Spinner />
      </Card>
    );

    if (!this.state.loading) {
      if (this.state.posts.length) {
        posts = this.state.posts.map((post, index) => (
          <Link
            key={index}
            to={"/posts/" + post.id}
            className={styles.CardLink}
          >
            <Post
              title={post.title}
              content={post.body}
              author={post.author}
              createdAt="12/05/2020"
            />
          </Link>
        ));
      } else {
        posts = (
          <Card>
            <p>No posts available</p>
          </Card>
        );
      }
    }

    return <Fragment>{posts}</Fragment>;
  }
}

export default Posts;
