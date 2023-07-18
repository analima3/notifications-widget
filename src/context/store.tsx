import { NotificationMockType, TabType } from "@/@types/global";
import { InboxNotifications } from "@/components/InboxNotifications";
import { NOTIFICATIONS_MOCK } from "@/mock/notifications";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextType {
  currentTab: TabType;
  setCurrentTab: Dispatch<SetStateAction<TabType>>;
  notifications: NotificationMockType;
  comments: string[];
  setComments: Dispatch<SetStateAction<string[]>>;
}

const initialState: ContextType = {
  currentTab: {
    index: 0,
    title: "",
    Content: InboxNotifications,
  },
  setCurrentTab: () => {},
  notifications: NOTIFICATIONS_MOCK,
  comments: [],
  setComments: () => {},
};

const Context = createContext<ContextType>(initialState);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [notifications] = useState(initialState.notifications);
  const [currentTab, setCurrentTab] = useState<TabType>(
    initialState.currentTab
  );
  const [comments, setComments] = useState<string[]>([]);

  return (
    <Context.Provider
      value={{
        notifications: notifications,
        currentTab: currentTab,
        setCurrentTab: setCurrentTab,
        comments: comments,
        setComments: setComments,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useStore = () => {
  const context = useContext(Context);

  return context;
};
