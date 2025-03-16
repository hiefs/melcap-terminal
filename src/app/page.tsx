import { WelcomeWindow } from "@/components/_windows/welcome";

export default function Home() {
  return (
    <div className="w-full h-full p-8">
      <WelcomeWindow />
      <div className="absolute w-1/6 h-2/3 top-2 right-2">
        <div
          id="terminal_icons"
          className="flex flex-col justify-center items-center"
        ></div>
      </div>
    </div>
  );
}
