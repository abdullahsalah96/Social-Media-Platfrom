import "./FeedView.css";
import PostCard from "../PostCard/PostCard"
import { Component } from "react";


class FeedView extends Component {
    state = { posts:[], sortBy:"date" };
    
    constructor() {
        super();
        this.comparePosts = this.comparePosts.bind(this);
        this.onSortByDateSelected = this.onSortByDateSelected.bind(this);
        this.onSortByScoreSelected = this.onSortByScoreSelected.bind(this);
    }

    onSortByDateSelected() {
        this.setState({
            sortBy: "date"
        });
    }

    onSortByScoreSelected() {
        this.setState({
            sortBy: "score"
        });
    }

    componentDidMount() {
        fetch('https://worker.abdallaelshikh961661.workers.dev/')
        .then(async response => {
            const data = await response.json();
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

    comparePosts(a, b) {
        const { sortBy } = this.state;
        var comparableA;
        var comparableB;
        if (sortBy === "date") {
            comparableA = Date.parse(a.date)
            comparableB = Date.parse(b.date);
        } else if (sortBy === "score") {
            comparableA = parseInt(a.score);
            comparableB = parseInt(b.score);
        }
        if ( comparableA > comparableB ){
          return -1;
        }
        if ( comparableA < comparableB ){
          return 1;
        }
        return 0;
      }

    render() {
        const { posts } = this.state;
        return (
            <div className = "feedview-container">
                <div className="sortion-container">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" checked={this.state.sortBy === "date"} onChange={this.onSortByDateSelected}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Sort by date
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" checked={this.state.sortBy === "score"} onChange={this.onSortByScoreSelected}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Sort by score
                        </label>
                    </div>
                </div>
                <div className="post-cards-container">
                    { posts.sort(this.comparePosts).map((post,i) => {
                        return (
                            <PostCard post = {post} objectId = {i}></PostCard>
                        )
                    })}
            </div>
            </div>
        )
    }
}

export default FeedView
