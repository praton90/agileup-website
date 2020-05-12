import React, { Component, Fragment } from "react";

import PostItem from "../../components/PostItem/PostItem";
import Card from "../../components/Aux/Card/Card";

import Spinner from "../../components/Spinner/Spinner";

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
            body: post.fields.content.substring(0, 250).concat(" ..."),
            author: post.fields.author.fields.name,
            createdAt: post.sys.createdAt,
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
        posts = this.state.posts.map((post, index) => <PostItem post={post} />);
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
