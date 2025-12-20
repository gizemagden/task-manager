import {
  Command,
  // CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import { Settings, ChartArea, Calendar, User, DoorClosed } from "lucide-react";

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        {/* <CommandEmpty>No results found.</CommandEmpty> */}
        <CommandGroup heading="Tasks">
          <CommandItem>
            <ChartArea className="mr-2 h-4 w-4" />
            <Link href="/">Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <Link href="/calendar">Calendar</Link>
          </CommandItem>
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <Link href="/projects">Projects</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Account">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <Link href="/profile">Profile</Link>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <Link href="/settings">Settings</Link>
          </CommandItem>
          <CommandItem>
            <DoorClosed className="mr-2 h-4 w-4" />
            <Link href="/auth">Logout</Link>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
