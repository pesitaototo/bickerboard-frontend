import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="">
      <h1>Bicker Board</h1>
      <nav>
        <ul>
          <li className="home-button">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="login-button">
            <Link to={`/login`}>Login</Link>
          </li>
          <li className="signup-button">
            <Link to={`/signup`}>Sign up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Root;