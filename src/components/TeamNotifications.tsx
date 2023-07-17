import { Notification } from "./notification";
import { NOTIFICATIONS_MOCK } from "@/mock/notifications";

export function TeamNotifications() {
  return (
    <div className="animate-slideRight">
      {NOTIFICATIONS_MOCK.items.map((notification, index) => {
        return (
          <Notification.Container
            key={index}
            className={
              notification.read
                ? "border-l-[6px] border-color border-opacity-10"
                : ""
            }
          >
            <Notification.UserPic
              urlPic={notification.user.urlPic}
              status={notification.user.status}
            />
            <Notification.Content notification={notification} />
          </Notification.Container>
        );
      })}
    </div>
  );
}
