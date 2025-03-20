export const SupportWindow = () => {
  return (
    <div className="w-full flex flex-col h-fullitems-center mt-4">
      <p className="text-center">Have an issue?</p>
      <div className="text-center">
        <a
          className="text-blue-400 underline"
          href="https://github.com/hiefs/melcap-terminal/issues"
          target="_blank"
        >
          Submit an Issue
        </a>
      </div>
      <p className="text-center mt-4">Have an idea?</p>
      <div className="text-center">
        <a
          className="text-blue-400 underline"
          href="https://github.com/hiefs/melcap-terminal/discussions"
          target="_blank"
        >
          Let us know
        </a>
      </div>
    </div>
  );
};
