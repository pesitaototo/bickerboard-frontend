import { Button, FormControl, InputLabel, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../reducers/userReducer"

const LoginForm = () => {
  const [handle, setHandle] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(state => state.user)

  const handleLogin = (e) => {
    e.preventDefault()

    dispatch(loginUser(handle, password))

    setHandle('')
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
            label="handle"
            value={handle}
            onChange={({ target }) => setHandle(target.value)}
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