
const Signup = () => {
  return (
    <div className="login-container">
      <h3>Sign up</h3>
      <form>
        <input
          type="text"
          id="username"
          name="username"
        />
        username<br/>
        <input
          type="text"
          id="email"
          name="email"
        />email<br/>
        <input
          type="password"
          id="password"
          name="password"
        />
        password<br/>
        <input
          type="password"
          id="2password"
          name="2password"
        />
        confirm password
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup;