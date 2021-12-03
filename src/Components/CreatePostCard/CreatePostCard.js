import React, { Component } from 'react';
import "./CreatePostCard.css";

class CreatePostCard extends Component{

    handleSubmittingPost(event) {
        console.log("Submit button clicked \n");
        event.preventDefault()
        const username = event.target[0].value
        const title = event.target[1].value
        const content = event.target[2].value
        // Handle network request
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

export default CreatePostCard
