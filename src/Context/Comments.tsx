import { createContext } from "react";
import { CommentContextType } from "../@types/comment";
import data from "../comments.json";

const initialContextValue: CommentContextType = {
  comments: data,
  setComments: () => {},
};

export const CommentsContext = createContext<CommentContextType | null>(
  initialContextValue
);
