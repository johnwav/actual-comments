import "./App.css";
import AddComment from "./components/AddComment/AddComment";
import Comment from "./components/comment/Comment";
import data from "./comments.json";

import { CommentsContext } from "./Context/Comments";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState(data);
  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      <div className="app">
        {comments.map((comment) => {
          return (
            <Comment id={comment.id} key={comment.id} comments={comment} />
          );
        })}
        <AddComment id={0} isReply={false} />
      </div>
    </CommentsContext.Provider>
  );
}

export default App;
