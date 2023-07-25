import {
  Link,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Test</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Sign up</h1>} />
      </Routes>
    </div>
  );
}

export default App;
