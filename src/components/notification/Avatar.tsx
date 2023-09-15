import Image from "next/image";

export function Avatar({
  urlPic,
  status,
}: {
  urlPic: string;
  status: "online" | "offline" | "disabled";
}) {
  return (
    <div className="relative w-10 h-10">
      <Image
        className="max-w-[40px] max-h-[40px] rounded-full"
        src={urlPic}
        width={40}
        height={40}
        alt="profile pic"
      />

      <div className="absolute top-7 right-0 rounded-full border-[3px] border-zinc-100 dark:border-zinc-950">
        <div
          data-status={status}
          className="w-3 h-3 rounded-full data-[status=offline]:bg-red-800 data-[status=online]:bg-green-500 data-[status=disabled]:bg-color-secondary data-[status=disabled]:border-[3px] data-[status=disabled]:border-gray-400"
        />
      </div>
    </div>
  );
}
