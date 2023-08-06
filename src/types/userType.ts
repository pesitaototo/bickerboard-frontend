import PostType from "./postType";
import TopicType from "./topicType";

interface UserType {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  isEnabled: boolean;
  posts: PostType;
  topics: TopicType;
  createdAt: Date;
  updatedAt: Date;
}

export type NewUserType = Omit<UserType,'id' | 'isAdmin' | 'isEnabled' 
  | 'posts' | 'topics' | 'createdAt' | 'updatedAt'>
  & { password: string }

export default UserType;