import { Button, FormControl, InputLabel, TextField } from "@mui/material"

const LoginForm = () => {

  return (
    <div>
      <h3>User Login</h3>
      <form>
        <div>
          <TextField
            label="username"
          />
          <TextField
            label="password"
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