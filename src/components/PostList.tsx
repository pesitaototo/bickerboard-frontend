import { FC } from "react";
import PostType from "../types/postType";
import { useAppSelector } from "../hooks";

interface PostProps {
  topicId: number;
}

interface RenderPostProps {
  post: PostType;
}

const RenderPost: FC<RenderPostProps> = ({ post }) => {

  return (
    <div className="topic-post-data">
      <div className="topic-post-header">
        <div className="user">{post.user.username}</div>
        <div className="date">{post.createdAt.toString()}</div>
      </div>
      <div className="topic-post-data-body">
        {post.body}
      </div>
    </div>
  )
}

// render a list of posts associated with a topic
const PostList: FC<PostProps> = ({ topicId }) => {
  const posts = useAppSelector(state => state.posts.filter(p => p.topicId === topicId));
  console.log(posts);
  return (
    // name, date, body of post
    <div className="topic-post-container">
      {posts.map(p => <RenderPost key={p.id} post={p} />)}
    </div>
  )
}

export default PostList;