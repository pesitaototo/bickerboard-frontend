import { SyntheticEvent, useState } from "react";
import userService from "../services/userService";
import { useAppDispatch } from "../hooks";
import { createUser } from "../reducers/userReducer";
import { NewUserType } from "../types/userType";
import { newNotification } from "../reducers/notificationReducer";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  
  const dispatch = useAppDispatch();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    
    const newUserObj: NewUserType = {
      username,
      password,
      email
    }

    console.log('going to try');
    try {
      dispatch(createUser(newUserObj));
      dispatch(newNotification({ type: 'message', content: `created new user ${newUserObj.username}`}))
    } catch (e) {
      dispatch(newNotification({ type: 'error', content: 'error' }));
      console.log('in catch');
    }
    console.log('out of try-c');

    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
  }

  return (
    <div className="login-container">
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          onChange={({ target }) => { setUsername(target.value) }}
          value={username}
        />
        username<br/>
        <input
          type="text"
          id="email"
          name="email"
          onChange={({ target }) => { setEmail(target.value) }}
          value={email}
        />email<br/>
        <input
          type="password"
          id="password"
          name="password"
          onChange={({ target }) => { setPassword(target.value) }}
          value={password}
        />
        password<br/>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          onChange={({ target }) => { setConfirmPassword(target.value) }}
          value={confirmPassword}
        />
        confirm password
        <br/>
        <button type="submit">sign up</button>
      </form>
    </div>
  )
}

export default Signup;