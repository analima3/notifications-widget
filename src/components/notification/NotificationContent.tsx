"use client";

import { NotificationType } from "@/@types/global";
import { ChevronDown, Dot } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { MentionedContainer } from "../MentionedContainer";
import { AskedContainer } from "../AskedContainer";
import { UploadedContainer } from "../UploadedContainer";
import { useState } from "react";
import { useStore } from "@/context/store";

interface NotificationContentProps {
  notification: NotificationType;
}

export function NotificationContent({
  notification,
}: NotificationContentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { comments } = useStore();

  const openTransition = isOpen
    ? "opacity-100 h-24 overflow-y-auto transition-all delay-200 ease"
    : "overflow-hidden opacity-0 h-0 transition-all ease";

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const displayCreatedAtDate = () => {
    const DAYS_REGEX = /days/i;
    const createdAtFormatted = formatDistanceToNow(
      new Date(notification.createdAt),
      {
        addSuffix: true,
      }
    );

    if (DAYS_REGEX.test(createdAtFormatted)) {
      return format(notification.createdAt, "MMM dd");
    }

    return createdAtFormatted;
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-row items-baseline justify-between gap-2">
        <header>
          <div className="space-x-1 text-xs text-color-primary">
            <span className="font-semibold cursor-pointer hover:brightness-90">
              {notification.user.name}
            </span>
            <span>{notification.action.message}</span>
            <span className="font-semibold cursor-pointer hover:brightness-90">
              {notification.action.product}
            </span>
          </div>

          <div className="flex flex-col-reverse md:flex-row md:flex-nowrap md:items-center text-color-secondary text-xxs">
            <span>{displayCreatedAtDate()}</span>
            <Dot className="hidden md:block" />
            <a href="#" target="_blank" className="hover:underline">
              {notification.action.product}
            </a>
          </div>
        </header>

        {notification.read && (
          <div className="min-w-[8px] min-h-[8px] rounded-full bg-orange-600" />
        )}
      </div>

      <div className="flex flex-col gap-4">
        {notification.action.type === "asked" && (
          <AskedContainer
            productName={notification.action.product}
            updatedAt={displayCreatedAtDate()}
          />
        )}
        {notification.action.type === "mentioned" && <MentionedContainer />}
        {notification.action.type === "uploaded" && (
          <UploadedContainer
            productName={notification.action.product}
            updatedAt={displayCreatedAtDate()}
          />
        )}
      </div>

      {notification.action.type === "mentioned" && (
        <>
          <div
            className={`dark:divide-zinc-800 text-color-primary flex flex-col ${openTransition}`}
          >
            {comments.map((comment) => {
              return (
                <div className="py-[2px] space-x-1 leading-none" key={comment}>
                  <span className="text-xs lowercase">
                    @{notification.user.name}
                  </span>
                  <span className="text-color-secondary text-xxs">
                    {comment}
                  </span>
                </div>
              );
            })}
          </div>
          <button
            onClick={handleOpen}
            className="flex flex-row gap-2 items-center text-color-primary cursor-pointer"
          >
            {!!comments.length && (
              <>
                <ChevronDown
                  size={18}
                  className={`transition-all delay-200 ease ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
                <span className="text-xs font-semibold">
                  {isOpen
                    ? "View less"
                    : !comments.length
                    ? ""
                    : `View more ${comments.length}`}
                </span>
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
}
