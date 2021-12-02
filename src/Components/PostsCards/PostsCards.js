import React, {useState} from 'react';
import "./PostsCards.css";
import avatar from "../../assets/images/avatar.jpeg"

function PostsCards(props){
    let posts = props.posts;
    return (
        <div className="post-cards-container">
            {posts.map((post,i) => {
                return (
                    <div className = "PostsCards">
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
                                {post.date}
                            </div>
                            <div className ="voting-container">
                                <button class="btn"><i class="fa fa-arrow-up fa-2x text-success" ></i></button>
                                <button class="btn"><i class="fa fa-arrow-down fa-2x text-danger"></i></button>
                            </div>
                        </div>
                        <div className = "content-container">
                            <p>{post.content}</p>
                        </div>
                        <div className="comment-container">
                            <form>
                                <div class="form-group">
                                    <label for="commentLabel">Post comment</label>
                                    <textarea class="form-control" rows="3" placeholder="What's up?" required></textarea>
                                </div>
                                <div class = "form-group">
                                    <label for="username" class="form-label">Username</label>
                                    <div class="username-field-container">
                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="username" required/>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Post Comment</button>
                                <SectionSplitter color = "#999999"></SectionSplitter>
                                <div className="comments-label-container">
                                    Comments
                                </div>
                                <div className="post-comments-container">
                                    {
                                    post.comments.length == 0 ? <div className="no-comments"><p/></div>:
                                    post.comments.map((comment,i) => {
                                        return (
                                            <div class="post-comment">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="profile-photo-sm"/>
                                                <div className="post-comment-text">
                                                    <p><a href="/" class="profile-link">@{comment.username} </a>{comment.text}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </form>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const SectionSplitter = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.25
        }}
    />
);

export default PostsCards
