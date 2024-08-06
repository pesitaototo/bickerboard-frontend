import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
import TopicList from './components/TopicList';
import { ErrorInfo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTopic } from './reducers/topicReducer';
import { useAppDispatch } from './hooks';
import Login from './components/Login';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Signup from './components/Signup';
import Topic from './components/Topic';
import { initializePost } from './reducers/postReducer';
import { initializeUser } from './reducers/userReducer';
import User from './components/User';
import { newNotification } from './reducers/notificationReducer';
import { setToken } from './reducers/authReducer';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeTopic());
    dispatch(initializePost());
    dispatch(initializeUser());
    dispatch(newNotification({ type: 'message', content: '' }))
  }, [dispatch])

  useEffect(() => {
    try {
      const loggedUserJSON = window.localStorage.getItem('loggedBickerUser');
      if (loggedUserJSON) {
        // console.log(loggedUserJSON)
        const userToken = JSON.parse(loggedUserJSON);
        
        dispatch(setToken(userToken.token))
      }
    } catch (error) { 
      dispatch(newNotification({ type: 'error', content: 'login expired, please login again' }))
    }
  }, [])

  return (
    <div className="app-container">
        <Root />
        <div className="app-data-container">
        <Routes>
          <Route path="/" element={<TopicList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/t/:title/:id" element={<Topic />} />
          <Route path="/u/:username" element={<User />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
