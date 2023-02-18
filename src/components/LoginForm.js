import { Button, FormControl, InputLabel, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../reducers/userReducer"

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(state => state.user)

  const handleLogin = (e) => {
    e.preventDefault()

    dispatch(loginUser(username, password))

    setUsername('')
    setPassword('')
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  })

  return (
    <div>
      <h3>User Login</h3>
      <form onSubmit={handleLogin}>
        <div>
          <TextField
            label="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <TextField
            label="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
          />
        </div>
        <Button variant="contained" type="submit">
          login
        </Button>
      </form>
    </div>
  )
}

export default LoginForm