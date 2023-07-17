export interface UserType {
  name: string;
  urlPic: string;
  status: "online" | "offline" | "disabled";
}

export interface ActionType {
  type: "asked" | "mentioned" | "uploaded";
  message: string;
  filesUpdated?: string;
  product: string;
}

export interface NotificationType {
  id: number;
  read: boolean;
  createdAt: Date;
  user: UserType;
  action: ActionType;
}

export interface NotificationMockType {
  total: number;
  items: NotificationType[];
}

export interface TabType {
  index: number;
  title: string;
  Content: ElementType;
}
