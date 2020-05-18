import React, { Component, Fragment } from "react";

import Card from "../../../components/Aux/Card/Card";
import Spinner from "../../../components/Spinner/Spinner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCalendar, FaLinkedinIn } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import "./FullPost.css";

const contentful = require("contentful");

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
          content: entry.fields.content,
          body: entry.fields.body,
          author: {
            name: entry.fields.author.fields.name,
            imageUrl: entry.fields.author.fields.photo.fields.file.url,
            imageDescription:
              entry.fields.author.fields.photo.fields.description,
            linkedIn: entry.fields.author.fields.linkedIn,
          },
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

  formatPostBody = (postContent) => {
    const Text = ({ children }) => <p>{children}</p>;

    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
      renderText: (text) =>
        text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
    };

    return documentToReactComponents(postContent, options);
  };

  render() {
    let content = <Spinner />;

    if (!this.state.loading) {
      if (this.state.post) {
        content = (
          <Fragment>
            <div className="post__metadata">
              <span className="icon">
                <FaCalendar /> {this.state.post.createdAt}
              </span>
            </div>
            <h1 className="post__title">{this.state.post.title}</h1>
            <div className="post__author">
              <img
                className="author__photo"
                src={this.state.post.author.imageUrl}
                alt={this.state.post.author.imageDescription}
              />
              <div className="author__metadata">
                <p>{this.state.post.author.name}</p>
                <div className="author__icons">
                  <a
                    href={this.state.post.author.linkedIn}
                    className="icon__link"
                  >
                    <FaLinkedinIn size="1.7em" title="LinkedIn Profile" />
                  </a>
                </div>
              </div>
            </div>

            <p className="post__body">
              {this.formatPostBody(this.state.post.body)}
            </p>

            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <Carousel>
                {this.state.post.slides.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={image.description} />
                  </div>
                ))}
              </Carousel>
            </div>
          </Fragment>
        );
      } else {
        content = <p style={{ color: "red" }}>Something went wrong</p>;
      }
    }

    return <Card>{content}</Card>;
  }
}

export default FullPost;
