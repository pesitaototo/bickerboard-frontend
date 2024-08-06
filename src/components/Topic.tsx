import { RootState } from "../store";
import { useAppSelector } from "../hooks";
import TopicType from "../types/topicType";
// import { FC } from "react";
import { useParams } from "react-router-dom";
import PostList from "./PostList";
import { parseDate } from "../utils/common";

// interface TopicProps {
//   id: number;
// }

const Topic = () => {
  const { id } = useParams();
  const numId = Number(id);

  const topic: TopicType = useAppSelector((state: RootState) => 
    state.topics.filter(topic => topic.id === numId)
  )[0]

  if (!topic) return(<>sorry</>);

  const dateString = parseDate(topic.createdAt);

  return (

    <div className="topic-container">
      <div className="topic-title">Topic</div>
      <div className="topic-title">
        <h3>{topic.title}</h3>
      </div>
      <div className="topic-post-data">
        <div>1</div>
        <div>
          <div className="topic-post-header">
            <div className="user">{topic.user.username}</div>
            <div className="date">{dateString}</div>
          </div>
          <div className="topic-post-data-body">{topic.body}</div>
          <div className="topic-post-data-reply">
            <button>Reply</button>
          </div>
        </div>
      </div>
      <div className="topic-post-container">
        <PostList topicId={topic.id} />
      </div>
    </div>
  );
}

export default Topic;