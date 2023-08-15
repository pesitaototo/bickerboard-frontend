import { FC } from "react";
import NotificationType from "../types/notificationType";
import { useAppSelector } from "../hooks";

const Notification = () => {
  const notification = useAppSelector(state => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 5,
    borderColor: 'red',
  }

  if (notification.content === '') return <></>
  console.log(notification);

  return (
    <div style={style} className={notification.type}>
      <em>NOTIFICATION</em> - {notification.content}
    </div>
  )
};

export default Notification;