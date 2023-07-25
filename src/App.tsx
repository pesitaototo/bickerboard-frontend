import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Topic from './components/Topic';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTopic } from './reducers/topicReducer';
import { useAppDispatch } from './hooks';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeTopic())
  }, [dispatch])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Topic />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Sign up</h1>} />
      </Routes>
    </div>
  );
}

export default App;
