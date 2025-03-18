import { useAppSelector } from "@/lib/hooks";
import { FileIcon } from "../ui/file-icon";

export const FilesWindow = () => {
  const files = useAppSelector((state) => state.file.files);

  return (
    <div className="w-full flex flex-row h-full flex-wrap gap-4 justify-start content-start">
      {files.map((file, index) => (
        <FileIcon key={index} title={file.title} url={file.img} />
      ))}
    </div>
  );
};
