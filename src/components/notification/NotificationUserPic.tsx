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
      ? "bg-green-500"
      : status === "offline"
      ? "bg-red-800"
      : "w-3 h-3 bg-zinc-900 border-gray-300 outline outline-[3px] outline-zinc-900";

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
        className={`w-4 h-4 absolute top-7 right-0 border-[3px] border-zinc-100 dark:border-zinc-900 rounded-full ${statusColor}`}
      />
    </div>
  );
}
