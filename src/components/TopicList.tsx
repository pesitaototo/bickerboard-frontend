import { RootState } from "../store";
import { useAppSelector } from "../hooks";
import TopicType from "../types/topicType";
import { FC } from "react";
import { Link } from "react-router-dom";

interface TopicProps {
  topic: TopicType;
}

const RenderTopic: FC<TopicProps> = ({topic}) => {
  const unixTimpstamp = Date.parse(topic.createdAt.toString());
  const date = new Date(unixTimpstamp * 1000);
  const day = date.getDay();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getUTCFullYear();

  const friendlyTitle = topic.title.toLowerCase().replace('/[^a-z0-9]/gi', '').replaceAll(' ', '-');

  return (
    <div className="topic-data">
      <div className="topic-item"><Link to={`/t/${friendlyTitle}/${topic.id}`}>{topic.title}</Link></div>
      <div className="topic-item"><Link to={`/u/${topic.user.username}`}>{topic.user.username}</Link></div>
      <div className="topic-item">0</div>
      <div className="topic-last-post">{month} {day}, {year}</div>
    </div>
  );
}

const TopicList = () => {
  const topics: TopicType[] = useAppSelector((state: RootState) => state.topics)

  return (
    <div className="topic-container">
      <div className="topic-header">
        <div className="topic-title">Topic</div>
        <div className="topic-item">Started by</div>
        <div className="topic-item">Replies</div>
        <div className="topic-item">Activity</div>
      </div>
        {topics.map(topic =>
            <RenderTopic key={topic.id} topic={topic}
            />
        )}
    </div>
  );
}

export default TopicList;