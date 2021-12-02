import React, {useState} from 'react';
import "./PostCard.css";
import avatar from "../../assets/images/avatar.jpeg"

function PostCard(props) {
    return (
        <div className = "PostCard">
            <div className="upper-container">
                <div className="image-container">
                    <img src={avatar} height = "90px" width = "90px"/>
                </div>
            </div>
            <div className="username-container">
                <p>@{props.username}</p>
            </div>
            <div className="mid-container">
                <div className="title-container">
                    <h3>{props.title}</h3>
                </div>
                <div className ="voting-container">
                    <button class="btn"><i class="fa fa-arrow-up fa-2x text-success" ></i></button>
                    <button class="btn"><i class="fa fa-arrow-down fa-2x text-danger"></i></button>
                </div>
            </div>
            <div className = "content-container">
                <p>{props.content}</p>
            </div>
            <div className="comment-container">
                <form>
                    <div class="form-group">
                        <label for="commentLabel">Post comment</label>
                        <textarea class="form-control" rows="3" placeholder="What's up?" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">Post Comment</button>
                </form>
            </div>
        </div>
    )
}

export default PostCard
