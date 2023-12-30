import Link from "next/link";
import { Icons } from "@/components/icons";
import { Menu } from "lucide-react";
import CurrentTime from "@/components/current-time";
import SwitchTimeFormat from "./switch-time-format";

export default function Header() {
  return (
    <header className="flex p-6 justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">TimeZone Hub</span>
      </Link>
      <div className="flex items-center gap-2">
        <CurrentTime />
        <SwitchTimeFormat />
        <Menu />
      </div>
    </header>
  );
}
