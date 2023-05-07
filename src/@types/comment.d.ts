export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface IComments {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo?: string;
    user: User;
  }[];
}

export type CommentContextType = {
  comments: IComments[];
//   addComment: (comment: IComments[]) => void;
};
