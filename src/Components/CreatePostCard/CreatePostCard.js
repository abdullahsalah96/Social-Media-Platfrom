import React, { Component } from 'react';
import "./CreatePostCard.css";

class CreatePostCard extends Component{

    constructor() {
        super();
        this.handleSubmittingPost = this.handleSubmittingPost.bind(this);
    }

    async makePostRequest(username, title, content) {

        var d = new Date();
        const date = d.toISOString().substring(0, 10); 
        const postData = {
            "username": username,
            "title": title,
            "content": content,
            "date": date,
            "comments": [], 
            "score": 0
          };
    
        try {
            await fetch("https://worker.abdallaelshikh961661.workers.dev", {
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

    async handleSubmittingPost(event) {
        event.preventDefault();
        const username = event.target[0].value
        const title = event.target[1].value
        const content = event.target[2].value
        // Handle network request
        try{
            await this.makePostRequest(username, title, content);
        } catch(err) {
            // show error
            alert("Error: " + err.message);
        }
        // show that post is submitted successfully
        alert("Success - Your post is now online, refresh page to see it!");
    }

    render() {
        return (
            <div className="CreatePostCard">
                <div className="add-post-title-container">
                    Add new post
                </div>
                <div className="form-container">
                    <form onSubmit={this.handleSubmittingPost}>
                        <div className = "form-group">
                            <label className="form-label">Username</label>
                            <div className="username-field-container">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="username" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" id="titleInput" aria-describedby="titleInput" placeholder="Enter title for post" required/>
                        </div>
                        <div className="form-group">
                            <label>Content</label>
                            <textarea  className="form-control" rows="3" placeholder="What's up?" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePostCard;