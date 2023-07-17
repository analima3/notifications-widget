import Image from "next/image";

import figmaLogo from "@/assets/figma-logo.svg";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

interface AskedContainerProps {
  productName: string;
  updatedAt: string;
}

export function AskedContainer({
  productName,
  updatedAt,
}: AskedContainerProps) {
  return (
    <Card>
      <div className="flex flex-row gap-4">
        <Image width={18} src={figmaLogo} alt="" />

        <div className="flex flex-col gap-1 ">
          <span className="font-semibold text-xs text-color-primary">
            {productName}
          </span>
          <span className="text-xxs text-color-secondary">
            Edited {updatedAt}
          </span>
        </div>
      </div>

      <div className="space-x-2">
        <Button variant="outline">decline</Button>
        <Button>approve</Button>
      </div>
    </Card>
  );
}
