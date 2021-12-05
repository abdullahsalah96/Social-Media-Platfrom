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

    render() {
        const { posts } = this.state;
        console.log(posts);
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
