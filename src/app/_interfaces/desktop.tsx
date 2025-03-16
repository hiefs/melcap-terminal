import { Taskbar } from "@/components/taskbar";

export const Desktop = () => {
    return (
        <div className="flex w-full h-full flex-col">
            <div className="flex-grow relative p-8 ">
                {/* Desktop Windows */}
                <div className="absolute w-1/6 h-2/3 top-2 right-2">
                    <div
                        id="terminal_icons"
                        className="flex flex-col justify-center items-center"
                    >
                        {/* Desktop Icons */}
                    </div>
                </div>
            </div>
            <div>
                <Taskbar />
            </div>
        </div>
    );
};