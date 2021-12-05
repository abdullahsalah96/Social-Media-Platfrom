import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import FeedView from "./Components/FeedView/FeedView"
import CreatePostCard from "./Components/CreatePostCard/CreatePostCard"

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <div className="views-container">
        <CreatePostCard></CreatePostCard>
        <FeedView></FeedView>
      </div>
    </div>
  );
}

export default App;
