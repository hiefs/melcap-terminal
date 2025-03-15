import Window from "../components/standard-window";
export default function Home() {
  return (
    <div className="w-full h-full p-8">
      <Window width={400} height={200} title="Welcome">
        Please log in
      </Window>
      <div className="absolute w-1/6 h-2/3 top-2 right-2">
        <div
          id="terminal_icons"
          className="flex flex-col justify-center items-center"
        ></div>
      </div>
    </div>
  );
}
