"use client";

import { Modal } from "@/components/modal";
import { TabType } from "@/@types/global";
import { useStore } from "@/context/store";
import { InboxNotifications } from "@/components/InboxNotifications";
import { TeamNotifications } from "@/components/TeamNotifications";

export default function Home() {
  const tabs: TabType[] = [
    {
      index: 0,
      title: "Inbox",
      Content: InboxNotifications,
    },
    {
      index: 1,
      title: "Team",
      Content: TeamNotifications,
    },
  ];

  const { currentTab } = useStore();

  return (
    <div className="h-screen w-full grid place-content-center overflow-hidden bg-color-primary">
      <Modal.Root>
        <Modal.Header tabs={tabs} />
        <Modal.Body>
          <currentTab.Content />
        </Modal.Body>
      </Modal.Root>
    </div>
  );
}
