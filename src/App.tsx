import "./App.css";
import AddComment from "./components/AddComment/AddComment";
import Comment from "./components/comment/Comment";
import data from "./comments.json";

import { CommentsContext } from "./Context/Comments";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState(data);
  const nullFunc = () => {};

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      <div className="app">
        {comments
          .sort((a, b) => b.score - a.score)
          .map((comment) => {
            return (
              <Comment id={comment.id} key={comment.id} comments={comment} />
            );
          })}
        <AddComment setToggleReply={nullFunc} id={0} isReply={false} />
      </div>
    </CommentsContext.Provider>
  );
}

export default App;


//TODO
// if its a reply, you cannot reply your reply only update and delete. Comments too