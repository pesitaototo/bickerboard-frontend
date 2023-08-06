import { RootState } from "../store";
import { useAppSelector } from "../hooks";
import TopicType from "../types/topicType";
// import { FC } from "react";
import { useParams } from "react-router-dom";
import PostList from "./PostList";

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

  const unixTimpstamp = Date.parse(topic.createdAt.toString());
  const date = new Date(unixTimpstamp * 1000);
  const day = date.getDay();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getUTCFullYear();

  return (
    <div className="topic-container">
      <div className="topic-title">
        <h2>{topic.title}</h2>
      </div>
      <div className="topic-post-data">
        <div className="topic-post-header">
          <div className="user">{topic.user.username}</div>
          <div className="date">{month} {day}, {year}</div>
        </div>
        <div className="topic-post-data-body">{topic.body}</div>
      </div>
      <div className="topic-post-container">
        <PostList topicId={topic.id} />
      </div>
    </div>
  );
}

export default Topic;