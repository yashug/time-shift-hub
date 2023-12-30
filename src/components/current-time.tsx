"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { useTimeHubStore } from "@/store";

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { timeFormat } = useTimeHubStore();
  
  const time = format(currentTime, timeFormat === 12 ? "hh:mm a" : "HH:mm");
  const [hour, minute] = time.split(":");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <Badge
      className="h-8 bg-white border-0 shadow-sm px-4 font-normal"
      variant="outline"
    >
      {hour}
      <span className="animate-hide-and-show">:</span>
      {minute}
    </Badge>
  );
}
