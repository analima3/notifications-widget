import Image from "next/image";

export function NotificationUserPic({
  urlPic,
  status,
}: {
  urlPic: string;
  status: "online" | "offline" | "disabled";
}) {
  const statusColor =
    status === "online"
      ? "w-4 h-4 border-zinc-100 dark:border-zinc-950 bg-green-500"
      : status === "offline"
      ? "w-4 h-4 border-zinc-100 dark:border-zinc-950 bg-red-800"
      : "w-3 h-3 bg-color-secondary border-gray-400 outline outline-[3px] outline-zinc-100 dark:outline-zinc-950";

  return (
    <div className="relative w-10 h-10">
      <Image
        className="max-w-[40px] max-h-[40px] rounded-full"
        src={urlPic}
        width={40}
        height={40}
        alt="profile pic"
      />

      <div
        className={`absolute top-7 right-0 border-[3px] rounded-full ${statusColor}`}
      />
    </div>
  );
}
