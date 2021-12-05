import "./FeedView.css";
import PostCard from "../PostCard/PostCard"
import Post from "../../Model/Post"
import { render } from "@testing-library/react";
import { Component, useState } from "react";


class FeedView extends Component {
    state = { posts:[] };
    constructor() {
        super();
        var d = new Date();
        const date = d.toISOString().substring(0, 10);
        const dummyPost = new Post("username", "Random title for post", "Random content for post Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", date, [{username:"dummyusername", text: "I am commenting a dummy comment to see if it's working Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}], 0, "");
        this.state.posts = [dummyPost];
    }

    componentDidMount() {
        fetch('https://worker.abdallaelshikh961661.workers.dev/')
        .then(async response => {
            const data = await response.json();
            console.log(data);
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.setState({ posts: data})
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="post-cards-container">
                { posts.map((post,i) => {
                    return (
                        <PostCard post = {post} objectId = {i}></PostCard>
                    )
                })}
            </div>
        )
    }
}

export default FeedView
