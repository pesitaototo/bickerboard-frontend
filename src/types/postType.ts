

interface PostType {
  id: number;
  body: string;
  userId: number;
  topicId: number;
  user: {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
    isEnabled: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  createdAt: Date;
  updatedAt: Date;
}

export default PostType;