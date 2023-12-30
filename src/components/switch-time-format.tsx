"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTimeHubStore } from "@/store";

export default function SwitchTimeFormat() {
  const { timeFormat, setTimeFormat } = useTimeHubStore();
  return (
    <div className="flex items-center gap-1">
      <Switch
        id="24h-mode"
        checked={timeFormat === 24}
        onCheckedChange={() => setTimeFormat(timeFormat === 12 ? 24 : 12)}
      />
      <Label htmlFor="airplane-mode" className="font-normal text-xs">
        24h
      </Label>
    </div>
  );
}
