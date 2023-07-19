"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Picker from "@emoji-mart/react";
import { Smile } from "lucide-react";
import { Card } from "./ui/Card";

export function MentionedContainer() {
  const [inputValue, setInputValue] = useState<string>("");
  const [openEmojiPicker, setOpenEmojiPicker] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEmojiClick = (emoji: any) => {
    if (inputRef.current) {
      const cursorPos = inputRef.current.selectionStart as number;
      const newInputValue =
        inputValue.slice(0, cursorPos) +
        emoji.native +
        inputValue.slice(cursorPos);

      setInputValue(newInputValue);
    }
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    setInputValue("");
  };

  return (
    <Card>
      <div className="space-x-1">
        <span className="font-semibold text-color-primary cursor-pointer hover:brightness-90">
          @tranmautritam
        </span>
        <span className="text-color-secondary">
          Give feedback, ask a question, or just leave a note of apprectiation.{" "}
          😎
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center gap-2 p-3 bg-zinc-300 dark:bg-zinc-700/50 rounded-md outline-1 outline-zinc-100">
          <div className="relative">
            <button
              type="button"
              className="flex flex-row items-center text-color-primary"
              onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
            >
              <Smile size={18} />
            </button>
            {openEmojiPicker && (
              <div className="w-80 h-64 absolute -left-20 md:-left-3 bottom-3 z-10 translate-y-0">
                <Picker
                  onEmojiSelect={handleEmojiClick}
                  skinTonePosition="none"
                  previewPosition="none"
                  maxFrequentRows={0}
                  navPosition="none"
                  emojiSize={16}
                  perLine={6}
                  onClickOutside={() => setOpenEmojiPicker(false)}
                />
              </div>
            )}
          </div>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            maxLength={200}
            className="w-full text-sm text-color-primary bg-transparent rounded-md caret-green-600 outline-none placeholder-zinc-600"
            placeholder={`Reply @tranmautritam`}
          />
        </div>
      </form>
    </Card>
  );
}
