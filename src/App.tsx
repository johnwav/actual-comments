import "./App.css";
import AddComment from "./components/AddComment/AddComment";
import Comment from "./components/comment/Comment";
import alldata from "./data.json";

function App() {
  const data = Object.values(alldata);
  const comments = data[1];

  {
    // console.log(data[1].);
    console.log(comments);
  }

  const hey = "hey"

  return (
    <div className="app">
      {Object.values(comments).map((comment) => (
        <Comment key={comment.id} data={hey} />
      ))}
      <AddComment />
    </div>
  );
}

export default App;
