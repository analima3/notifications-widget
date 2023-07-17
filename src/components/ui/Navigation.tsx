import { Bell } from "lucide-react";

interface NavigationProps {
  handleClick: () => void;
}

export function Navigation({ handleClick }: NavigationProps) {
  return (
    <header className="w-full fixed top-0 z-20 text-color-primary bg-color-secondary border-color flex justify-between items-center p-4">
      <span className="text-lg font-semibold select-none">
        Notification Widget
      </span>
      <button
        className="w-12 h-12 flex justify-center items-center border-color border-2 rounded-md p-2 shadow-sm shadow-zinc-800"
        onClick={handleClick}
      >
        <Bell />
      </button>
    </header>
  );
}
