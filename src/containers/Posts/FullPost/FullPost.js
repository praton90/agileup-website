import React, { Component } from "react";

import Card from "../../../components/Card/Card";
import Spinner from "../../../components/Spinner/Spinner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

var contentful = require("contentful");

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      loading: true,
    };

    this.client = contentful.createClient({
      space: "5ewpe53pwxis",
      accessToken: "Xerq7AgfY3obWybUXHTuhYnXSNUa5aHgd3l5SQnY-jk",
    });
  }

  componentDidMount() {
    const postId = this.props.match.params.id;

    this.client
      .getEntry(postId)
      .then((entry) => {
        const fetchedPost = {
          title: entry.fields.title,
          body: entry.fields.body.content[0].content[0].value,
          author: entry.fields.author.fields.name,
          createdAt: new Date(entry.sys.createdAt).toDateString(),
          slides: entry.fields.slides.map((slide) => {
            return {
              url: slide.fields.file.url,
              description: slide.fields.file.fileName,
            };
          }),
        };

        this.setState({ post: fetchedPost, loading: false });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log("Something wrong happened", error);
      });
  }

  render() {
    let content = <Spinner />;

    if (!this.state.loading) {
      if (this.state.post) {
        content = (
          <div>
            <h1>{this.state.post.title}</h1>
            <h3 style={{ textAlign: "left", color: "grey" }}>
              Created: {this.state.post.createdAt} | Author:{" "}
              {this.state.post.author}
            </h3>
            <p style={{ textAlign: "left", wordWrap: "break-word" }}>
              {this.state.post.body}
            </p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <Carousel>
                {this.state.post.slides.map((image) => (
                  <div>
                    <img src={image.url} alt={image.description} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        );
      } else {
        content = <p style={{ color: "red" }}>Something went wrong</p>;
      }
    }

    return <Card>{content}</Card>;
  }
}

export default FullPost;
