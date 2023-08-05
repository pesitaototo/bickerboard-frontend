import PostType from "./postType";
import TopicType from "./topicType";




interface UserType {
  id: number;
  username: string;
  isAdmin: boolean;
  isEnabled: boolean;
  posts: PostType;
  topics: TopicType;
  createdAt: Date;
  updatedAt: Date;
}

export default UserType;