import { createContext } from "react";
import { CommentContextType, IComments } from "../@types/comment";
import data from "../comments.json";

const initialContextValue: CommentContextType = {
  comments: data,
  setComments: ( comments: IComments) => {},
};


export const CommentsContext = createContext<CommentContextType | null>(
  initialContextValue
);
