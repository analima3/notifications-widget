import { NotificationMockType } from "@/@types/global";

export const NOTIFICATIONS_MOCK: NotificationMockType = {
  total: 3,
  items: [
    {
      id: 1,
      read: true,
      createdAt: new Date("2023/07/12"),
      user: {
        name: "Dash",
        urlPic: "https://source.unsplash.com/random/300×300",
        status: "online",
      },
      action: {
        type: "asked",
        message: "asked to join",
        product: "Ease Design System",
      },
    },
    {
      id: 2,
      read: true,
      createdAt: new Date(),
      user: {
        name: "Anton",
        urlPic: "https://source.unsplash.com/random/300×300",
        status: "offline",
      },
      action: {
        type: "mentioned",
        message: "mentioned you in",
        product: "Ease v8 Master",
      },
    },
    {
      id: 3,
      read: false,
      createdAt: new Date(),
      user: {
        name: "Anna",
        urlPic: "https://source.unsplash.com/random/300×300",
        status: "disabled",
      },
      action: {
        type: "uploaded",
        message: "uploaded",
        filesUpdated: "2 new files",
        product: "Moyo Production",
      },
    },
  ],
};
