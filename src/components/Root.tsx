import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import Notification from "./Notification";

const PrimaryNav = () => {
  
}

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
          {this}
          <div className="primary-nav">
            <Link to={`/login`}>Login</Link>
            <Link to={`/signup`}>Sign up</Link>
          </div>
          <div className="left-nav">
            <Link to={`/`}>Home</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Root;