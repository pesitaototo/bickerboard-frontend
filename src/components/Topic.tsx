import { useSelector } from "react-redux";
import { RootState } from "../store";


const Topic = () => {
  const topics = useSelector((state: RootState) => state.topics)

  return (
    <div>
      {topics.map(topic => topic.title)}
    </div>
  );
}

export default Topic;