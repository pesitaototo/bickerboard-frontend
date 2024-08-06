import { SyntheticEvent, useState } from "react";
import LoginType from "../types/loginType";
import { useAppDispatch } from "../hooks";
import { authSignIn } from "../reducers/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (event: SyntheticEvent) => {
    event.preventDefault();

    const loginObj: LoginType = {
      username,
      password
    }

    dispatch(authSignIn(username, password, navigate));

    setUsername('');
    setPassword('');
  }

  return (
    <div className="login-container">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          id="username"
          name="username"
          onChange={({ target }) => { setUsername(target.value) }}
        />
        username<br/>
        <input
          type="password"
          id="password"
          name="password"
          onChange={({ target }) => { setPassword(target.value) }}
        />
        password<br/>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login;