

interface TopicType {
  id: number;
  title: string;
  body: string;
  userId: number;
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

export default TopicType;