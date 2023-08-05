import UserType from "./userType";


interface TopicType {
  id: number;
  title: string;
  body: string;
  userId: number;
  user: UserType;
  createdAt: Date;
  updatedAt: Date;
}

export default TopicType;