import "./PostsCards.css";
import avatar from "../../assets/images/avatar.jpeg";
import $ from "jquery";


function PostsCards(props){
    let posts = props.posts;
    return (
        <div className="post-cards-container">
            {posts.map((post,i) => {
                return (
                    <div className = "PostsCards" key={i}>
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
                                <button className="btn"><i className="fa fa-arrow-up fa-2x text-success" ></i></button>
                                <button className="btn"><i className="fa fa-arrow-down fa-2x text-danger"></i></button>
                            </div>
                        </div>
                        <div className = "content-container">
                            <p>{post.content}</p>
                        </div>
                        <div className="comment-container">
                            <form onSubmit={handleSubmittingComment(post)}>
                                <div className="form-group">
                                    <label>Post comment</label>
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
                                                    <p><a href="/" className="profile-link">@{comment.username} </a>{comment.text}</p>
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

function handleSubmittingComment(post) {
    console.log(post)
    const usernameField = $('#usernameField').val();
    const commentField = $('#commentField').val();
    // handle updating post object and making PUT network call
}

export default PostsCards
