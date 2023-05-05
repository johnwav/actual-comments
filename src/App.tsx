import "./App.css";
import AddComment from "./components/AddComment/AddComment";
import Comment from "./components/comment/Comment";
import comments from "./comments.json";

function App() {

  return (
    <div className="app">
      {/* <Comment /> */}
      {comments.map((comment) => {
        return <Comment key={comment.id} data={comment} />;
      })}
      <AddComment />
    </div>
  );
}

export default App;
