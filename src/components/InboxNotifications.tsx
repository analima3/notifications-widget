import { Notification } from "./notification";
import { NOTIFICATIONS_MOCK } from "@/mock/notifications";

export function InboxNotifications() {
  return (
    <div className="animate-slideLeft">
      {NOTIFICATIONS_MOCK.items.map((notification, index) => {
        return (
          <Notification.Root
            key={index}
            className={
              notification.read ? "border-l-[6px] border-l-orange-900/10" : ""
            }
          >
            <Notification.Avatar
              urlPic={notification.user.urlPic}
              status={notification.user.status}
            />
            <Notification.Content notification={notification} />
          </Notification.Root>
        );
      })}
    </div>
  );
}
