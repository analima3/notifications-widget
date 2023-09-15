import { TabType } from "@/@types/global";
import { useStore } from "@/context/store";
import { CheckCircle, Settings } from "lucide-react";

interface HeaderProps {
  tabs: TabType[];
}

export function Header({ tabs }: HeaderProps) {
  const { currentTab, setCurrentTab, notifications } = useStore();

  return (
    <>
      <div className="w-full px-6 py-4 text-color border-b-[1px] border-color">
        <div className="flex flex-row items-center gap-4 justify-between">
          <span className="text-md text-color-primary font-semibold">
            Notifications
          </span>

          <button className="flex flex-row items-center gap-2 text-color-secondary hover:text-opacity-80">
            <CheckCircle size={18} />
            <span className="text-xxs font-semibold">Mark all as read</span>
          </button>
        </div>
      </div>

      <div className="h-14 flex flex-row justify-between items-center pr-6 border-b-[1px] border-color">
        <div className="h-full flex w-full">
          {tabs.map((tab, index) => {
            const tabSelected = currentTab.index === index;

            return (
              <button
                className={`px-6 flex flex-row justify-between items-center gap-4 transition-all delay-300 ease-out text-sm font-semibold ${
                  tabSelected
                    ? "text-color-primary border-b-2 border-b-zinc-800 dark:border-b-zinc-50"
                    : "text-color-secondary"
                }`}
                key={index}
                onClick={() => setCurrentTab(tab)}
              >
                <span>{tab.title}</span>
                <div
                  className={`w-5 h-5 flex justify-center items-center rounded-md text-xs transition-all delay-300 ease-out text-zinc-50  ${
                    tabSelected ? "bg-orange-600" : "bg-zinc-800/90"
                  }`}
                >
                  {notifications.total}
                </div>
              </button>
            );
          })}
        </div>

        <button>
          <Settings className="text-color-secondary" size={20} />
        </button>
      </div>
    </>
  );
}
