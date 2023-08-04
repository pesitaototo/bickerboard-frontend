import { RootState } from "../store";
import { useAppSelector } from "../hooks";
import TopicType from "../types/topicType";
// import { FC } from "react";
import { useParams } from "react-router-dom";

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
    <div className="topic-data">
      <div className="topic-item">{topic.title}</div>
      <div className="topic-item">{topic.userId}</div>
      <div className="topic-item">0</div>
      <div className="topic-last-post">{month} {day}, {year}</div>
    </div>
  );
}

export default Topic;