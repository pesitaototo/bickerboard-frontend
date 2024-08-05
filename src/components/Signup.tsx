import { SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createUser } from "../reducers/userReducer";
import { NewUserType } from "../types/userType";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  
  const dispatch = useAppDispatch();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    
    const newUserObj: NewUserType = {
      username,
      password,
      passwordConfirm,
      email
    }

    dispatch(createUser(newUserObj, navigate));
    // if (useAppSelector(state => state.users.find(user => user.username === newUserObj.username))) {
    //   setUsername('');
    //   setPassword('');
    //   setpasswordConfirm('');
    //   setEmail('');
      

    // }

    setUsername('');
    setPassword('');
    setpasswordConfirm('');
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
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={({ target }) => { setpasswordConfirm(target.value) }}
          value={passwordConfirm}
        />
        confirm password
        <br/>
        <button type="submit">sign up</button>
      </form>
    </div>
  )
}

export default Signup;