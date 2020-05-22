import React, { Component } from 'react';

import Card from "../../components/Aux/Card/Card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import contentfulClient from "../../contentfulClient";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { author: null }
    }

    formatAuthorBio = (authorBio) => {
        const Text = ({ children }) => <p>{children}</p>;

        const options = {
            renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            },
            renderText: (text) =>
                text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
        };

        return documentToReactComponents(authorBio, options);
    };

    componentDidMount() {
        const authorId = this.props.match.params.id;
        contentfulClient
            .getEntry(authorId)
            .then((entry) => {
                const fetchedAuthor = {
                    id: entry.sys.id,
                    name: entry.fields.name,
                    image: {
                        url: entry.fields.photo.fields.file.url,
                        description: entry.fields.photo.fields.description
                    },
                    bio: entry.fields.bio,
                    linkedIn: entry.fields.linkedIn
                }

                this.setState({ author: fetchedAuthor, loading: false });
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                });
                console.log("Something wrong happened", error);
            });
    }

    render() {

        let content = <p>Loading...</p>;

        if (!this.state.loading) {
            if (this.state.author) {
                content =
                    <div>
                        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>{this.state.author.name}</h1>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <img src={this.state.author.image.url} alt={this.state.author.image.description} style={{ width: "40%" }} />
                            <div style={{ width: "55%" }}>{this.formatAuthorBio(this.state.author.bio)}</div>
                        </div>
                    </div>

            } else {
                content = <p>Error...</p>
            }
        }

        return (<Card>{content}</Card>);
    }
}

export default Profile;