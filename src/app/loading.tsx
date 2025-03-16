import { Loader } from "@/components/ui/loading-dots";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <Loader />
    </div>
  );
}
