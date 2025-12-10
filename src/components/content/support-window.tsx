export const SupportWindow = () => {
  return (
    <div className="w-full flex flex-col h-full items-center relative">
      <p className="text-center mt-4">Have an issue?</p>
      <div className="text-center">
        <a
          className="text-blue-400 underline"
          href="https://github.com/hiefs/melcap-terminal/issues"
          target="_blank"
        >
          Submit an Issue
        </a>
      </div>
      <p className="absolute top-0 text-xs left-0">v.1.0.1</p>
    </div>
  );
};
