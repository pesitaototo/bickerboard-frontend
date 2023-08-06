import { FC } from "react";
import PostType from "../types/postType";
import { useAppSelector } from "../hooks";
import { parseDate } from "../utils/common";

interface PostProps {
  topicId: number;
}

interface RenderPostProps {
  post: PostType;
}

const RenderPost: FC<RenderPostProps> = ({ post }) => {
  const dateString = parseDate(post.createdAt);
  console.log(post.createdAt);
  console.log(typeof post.createdAt);

  return (
    <div className="topic-post-data">
      <div>{post.id}</div>
      <div>
        <div className="topic-post-header">
          <div className="user">{post.user.username}</div>
          <div className="date">{dateString}</div>
        </div>
        <div className="topic-post-data-body">
          {post.body}
        </div>
      </div>
      {/* <div className="topic-post-data-reply">
        <button>Reply</button>
      </div> */}
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