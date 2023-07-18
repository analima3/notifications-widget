import Image from "next/image";

import figmaLogo from "@/assets/figma-logo.svg";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { ThumbsDown, ThumbsUp } from "lucide-react";

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

      <div className="space-x-2 flex self-end md:self-start">
        <Button variant="outline">
          <span className="hidden md:block">decline</span>
          <ThumbsDown className="block md:hidden" size={18} />
        </Button>
        <Button>
          <span className="hidden md:block">approve</span>
          <ThumbsUp className="block md:hidden" size={18} />
        </Button>
      </div>
    </Card>
  );
}
