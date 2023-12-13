import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import Notification from "./Notification";

const Root = () => {
  // useEffect(() => {
  //   dispatch(getErrorMessage());
  // }, [dispatch]);

  return (
    <div className="">
      <h1>Bicker Board</h1>
      <Notification />
      <div>
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
    </div>
  );
}

export default Root;