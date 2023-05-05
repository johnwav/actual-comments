import "./App.css";
import AddComment from "./components/AddComment/AddComment";
import Comment from "./components/comment/Comment";
import comments from "./comments.json";

function App() {

  return (
    <div className="app">
      {comments.map((comment) => {
        return <Comment key={comment.id} comments={comment} />;
      })}
      <AddComment />
    </div>
  );
}

export default App;
