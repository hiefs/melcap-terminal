"use client"; // Error boundaries must be Client Components

interface ErrorProps {
  error: Error & { digest?: string };
}

const ErrorComponent: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <p>An error has occurred</p>
      {error.digest && <p>Digest: {error.digest}</p>}
    </div>
  );
};

export default ErrorComponent;
