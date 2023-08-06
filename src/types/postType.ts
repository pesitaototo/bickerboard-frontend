import UserType from "./userType";


interface PostType {
  id: number;
  body: string;
  userId: number;
  topicId: number;
  user: UserType;
  createdAt: Date;
  updatedAt: Date;
}

export default PostType;