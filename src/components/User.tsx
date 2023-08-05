import { useParams } from "react-router-dom";
import UserType from "../types/userType";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";

const User = () => {
  const { username } = useParams();
  console.log(username);

  const user: UserType = useAppSelector((state: RootState) => 
    state.users.filter(u => u.username === username))[0];
  
  if (!user) return (<></>);
  return (
    <>
      <h1>user</h1>
      <p>{user.username}</p>
    </>
  )
}

export default User;