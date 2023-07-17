"use client";

import { Modal } from "@/components/modal";
import { Navigation } from "@/components/ui/Navigation";
import { useState } from "react";
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

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModalClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-color-primary">
        <Modal.Container isOpen={isOpen}>
          <Modal.Header tabs={tabs} />
          <Modal.Body>
            <currentTab.Content />
          </Modal.Body>
        </Modal.Container>

        <Navigation handleClick={handleOpenModalClick} />
      </div>
    </>
  );
}
