
const Login = () => {

  return (
    <div className="login-container">
      <h3>Login</h3>
      <form>
        <input
          type="text"
          id="username"
          name="username"
        />
        username<br/>
        <input
          type="password"
          id="password"
          name="password"
        />
        password<br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login;