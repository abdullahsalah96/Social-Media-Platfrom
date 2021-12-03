import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PostsCards from "./Components/PostsCards/PostsCards"
import CreatePostCard from "./Components/CreatePostCard/CreatePostCard"
const Post = require("./Model/Post");

function App() {
  let posts = [];
  var d = new Date();
  const date = d.toISOString().substring(0, 10);    
  const dummyPost = new Post("username", "Random title for post", "Random content for post Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", date, [{username:"dummyusername", text: "I am commenting a dummy comment to see if it's working Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}])
  const dummyPost2 = new Post("username2", "Random blabla post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", date, [])
  posts.push(dummyPost);
  posts.push(dummyPost2);
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <div className="views-container">
        {/* <CreatePostCard></CreatePostCard> */}
        {/* <PostsCards posts = {posts}></PostsCards> */}
      </div>
    </div>
  );
}

export default App;
