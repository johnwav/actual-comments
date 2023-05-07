import { createContext } from "react";
import { CommentContextType } from "../@types/comment";

export const CommentsContext = createContext<CommentContextType | null>(null);


