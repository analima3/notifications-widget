import { Button } from "./ui/Button";

import { FileText } from "lucide-react";
import { Card } from "./ui/Card";

interface UploadedContainerProps {
  productName: string;
  updatedAt: string;
}

export function UploadedContainer({
  productName,
  updatedAt,
}: UploadedContainerProps) {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <FileText className="text-cyan-600" size={34} />

            <div>
              <p className="font-semibold text-xs text-color-primary">
                {productName}
              </p>
              <div className="flex flex-row gap-2 ">
                <span className="text-xxs text-color-primary text-opacity-60 font-semibold">
                  2.85 GB
                </span>
                <span className="text-xxs text-color-secondary">
                  Edited {updatedAt}
                </span>
              </div>
            </div>
          </div>

          <Button variant="outline">Download</Button>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <FileText className="text-pink-600" size={34} />

            <div>
              <p className="font-semibold text-xs text-color-primary">
                {productName}
              </p>
              <div className="flex flex-row gap-2 ">
                <span className="text-xxs text-color-primary text-opacity-60 font-semibold">
                  2.85 GB
                </span>
                <span className="text-xxs text-color-secondary">
                  Edited {updatedAt}
                </span>
              </div>
            </div>
          </div>

          <Button variant="outline">Download</Button>
        </div>
      </Card>
    </div>
  );
}
