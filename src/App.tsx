import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
import TopicList from './components/TopicList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTopic } from './reducers/topicReducer';
import { useAppDispatch } from './hooks';
import Login from './components/Login';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Signup from './components/Signup';
import Topic from './components/Topic';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeTopic())
  }, [dispatch])

  return (
    <div className="app-container">
        <Root />
        <Routes>
          <Route path="/" element={<TopicList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/t/:title/:id" element={<Topic />} />
        </Routes>
    </div>
  );
}

export default App;
