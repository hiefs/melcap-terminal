import { Taskbar } from "@/components/taskbar";
import { DesktopIcon } from "@/components/ui/desktop-icon";
import { User } from "@/lib/features/user-reducer";

interface DesktopProps {
  user: User;
}

export const Desktop = (props: DesktopProps) => {
  const { user } = props;
  console.log(user);
  return (
    <div className="flex w-full h-full flex-col citadel">
      <div className="flex-grow relative p-8 ">
        {/* Desktop Windows */}
        <div className="absolute h-2/3 top-2 left-2 pl-8 pr-8 pt-4 pb-4 z-0">
          <div
            id="terminal_icons"
            className="flex flex-col justify-center items-center gap-8"
          >
            {/* Desktop Icons */}
            <DesktopIcon
              title={"Trash"}
              image="https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/recycle_bin.png"
            />
            <DesktopIcon
              title={"Tasks"}
              image="https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/tasks.png"
            />
            <DesktopIcon
              title={"Files"}
              image={
                "https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/folder_closed.png"
              }
            />
            <DesktopIcon
              title={"Inbox"}
              image="https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/mail.png"
            />
            <DesktopIcon
              title="Search"
              image="https://supabase.owlbear.cc/storage/v1/object/public/desktop-icons/search.png"
            />
          </div>
        </div>
      </div>
      <div>
        <Taskbar />
      </div>
    </div>
  );
};
