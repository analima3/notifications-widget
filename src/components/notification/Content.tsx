"use client";

import { NotificationType } from "@/@types/global";
import { ChevronDown, Dot } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { MentionedContainer } from "../MentionedContainer";
import { AskedContainer } from "../AskedContainer";
import { UploadedContainer } from "../UploadedContainer";
import { useState } from "react";

interface ContentProps {
  notification: NotificationType;
}

export function Content({ notification }: ContentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <button
          onClick={handleOpen}
          className="flex flex-row gap-2 items-center text-color-primary cursor-pointer"
        >
          <ChevronDown
            size={18}
            className="transition-all delay-200 ease-in-out"
          />
          <span className="text-xs font-semibold">View more 32</span>
        </button>
      )}
    </div>
  );
}
