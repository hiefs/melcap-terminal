import { useAppSelector } from "@/lib/hooks";
import { FileIcon } from "../ui/file-icon";

export const FilesWindow = () => {
  const files = useAppSelector((state) => state.file.files);

  return (
    <div className="w-full flex flex-row h-full flex-wrap gap-4 justify-start content-start">
      {files.map((file, index) => (
        <FileIcon key={index} title={file.title} url={file.img} />
      ))}

      {files.length === 0 && (
        <div className="w-full flex flex-col h-full justify-center items-center">
          <p className="mb-4 ">
            <span>No files Available.</span>
          </p>
        </div>
      )}
    </div>
  );
};
