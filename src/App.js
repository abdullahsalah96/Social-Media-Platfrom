import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PostCard from "./Components/PostCard/PostCard"
import React, {useState} from 'react';

function App() {
  const [username, setUserName] = useState("username");
  const [title, setTitle] = useState("Random title for a post");
  const [content, setContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <div className="posts-container">
        <PostCard username = {username} title = {title} content = {content}></PostCard>
        <PostCard username = {username} title = {title} content = {content}></PostCard>
      </div>
    </div>
  );
}

export default App;
