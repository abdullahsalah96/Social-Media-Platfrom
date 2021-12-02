import React from 'react'
import "./CreatePostCard.css"

function CreatePostCard() {
    return (
        <div className="CreatePostCard">
            <div className="add-post-title-container">
                Add new post
            </div>
            <div className="form-container">
                <form novalidate>
                    <div class = "form-group">
                        <label for="username" class="form-label">Username</label>
                        <div class="username-field-container">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="username" required/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="titleLabel">Title</label>
                        <input type="text" class="form-control" id="titleInput" aria-describedby="titleInput" placeholder="Enter title for post" required/>
                    </div>
                    <div class="form-group">
                        <label for="contentLabel">Content</label>
                        <textarea class="form-control" rows="3" placeholder="What's up?" required></textarea>
                    </div>
                    <button type="submit" onClick="window.location.reload();" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePostCard
