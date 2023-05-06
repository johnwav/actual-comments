import "./App.css";
import AddComment from "./components/AddComment/AddComment";
import Comment from "./components/comment/Comment";
import comments from "./comments.json";
import Replies from "./components/Replies/Replies";

function App() {

  return (
    <div className="app">
      {comments.map((comment) => {
        return <Comment key={comment.id} comments={comment} />;
      })}

      {/* <Replies /> */}

      <AddComment isReply={false} />
    </div>
  );
}

export default App;
