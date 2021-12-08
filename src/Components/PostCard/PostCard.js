import "./PostCard.css"
import avatar from "../../assets/images/avatar.jpeg";
import { Component } from "react";
import SectionSplitter from "../SectionSplitter"

class PostCard extends Component {

    constructor(props) {
        super(props);
        this.state = { post:props.post, id: props.objectId};
        this.handleSubmittingComment = this.handleSubmittingComment.bind(this);
        this.handleUpvoting = this.handleUpvoting.bind(this);
        this.handleDownvoting = this.handleDownvoting.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // To update the card when sorting is changed
        if (nextProps.post !== this.state.post) {
          this.setState({ post: nextProps.post });
        }
      }

    async handleSubmittingComment(event) {
        event.preventDefault()
        let currentPost = this.state.post;
        const comment = {
            username: event.target[1].value,
            content: event.target[0].value
        }
        currentPost.comments.push(comment);
        // Handle network request
        try{
            await this.makePostRequest(currentPost);
            // successful then update state
            this.setState({ post: currentPost});
        } catch(err) {
            // show error
            alert("Error: " + err.message);
        }
    }

    async handleUpvoting() {
        let currentPost = this.state.post;
        currentPost.score += 1
        try{
            await this.makePostRequest(currentPost);
            // successful then update state
            this.setState({ post: currentPost});
        } catch(err) {
            // show error
            alert("Error: " + err.message);
        }
    }

    async handleDownvoting() {
        let currentPost = this.state.post;
        currentPost.score -= 1
        try{
            await this.makePostRequest(currentPost);
            // successful then update state
            this.setState({ post: currentPost});
        } catch(err) {
            // show error
            alert("Error: " + err.message);
        }
    }

    async makePostRequest(post) {
        const postData = post;
        try {
        const res = await fetch("https://worker.abdallaelshikh961661.workers.dev", {
            mode: "no-cors",
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        } catch (err) {
            throw new Error(err.message);
        }
    }

    render() {
        const {post, id} = this.state;
        return (
            <div className = "PostsCards" key={id}>
                <div className="upper-container">
                    <div className="image-container">
                        <img src={avatar} height = "90px" width = "90px"/>
                    </div>
                </div>
                <div className="username-container">
                <p>@{post.username}</p>
                </div>
                <div className="mid-container">
                    <div className="title-container">
                        <h3>{post.title}</h3>
                        <p>{post.date}</p>
                    </div>
                    <div className ="voting-container">
                        <button className="btn"><i className="fa fa-arrow-up fa-2x text-success" onClick={this.handleUpvoting}></i></button>
                        <label>{post.score}</label>
                        <button className="btn"><i className="fa fa-arrow-down fa-2x text-danger" onClick={this.handleDownvoting}></i></button>
                    </div>
                </div>
                <div className = "content-container">
                    <h5>{post.content}</h5>
                </div>
                <div className="comment-container">
                    <form onSubmit={this.handleSubmittingComment}>
                        <div className="form-group">
                            <p>Post comment</p>
                            <textarea id="commentField" className="form-control" rows="3" placeholder="What's up?" required></textarea>
                        </div>
                        <div className = "form-group">
                            <label>Username</label>
                            <div className="username-field-container">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" className="form-control" id="usernameField" aria-describedby="inputGroupPrepend" placeholder="username" required/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Post Comment</button>
                        <SectionSplitter color = "#999999"></SectionSplitter>
                        <div className="comments-label-container">
                            Comments
                        </div>
                        <div className="post-comments-container">
                            {
                            post.comments.map((comment,j) => {
                                return (
                                    <div className="post-comment" key={j}>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="profile-photo-sm"/>
                                        <div className="post-comment-text">
                                            <p><a href="/" className="profile-link">@{comment.username} </a>{comment.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostCard
