export interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}
export interface Blog {
  id: number;
  title: string;
  tags: string[];
  reactions: number;
  body: string;
}
