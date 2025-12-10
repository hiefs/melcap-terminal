import { Role, User } from "@/lib/features/user-reducer";
import { UtilityButton } from "../ui/utility-button";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";

interface InfoWindowProps {
  user: User;
}

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const InfoWindow = (props: InfoWindowProps) => {
  const { user } = props;
  const router = useRouter();
  const role = useAppSelector((state) => state.user.role);

  return (
    <div>
      <p className="mb-4">
        <span>Name:</span> {user.name}
      </p>
      <p>
        <span>Employee ID: </span>
        {user.eId}
      </p>
      <p>
        <span>Race:</span> {capitalizeFirstLetter(user.race)}
      </p>
      <p className="mb-4">
        <span>Age:</span> {user.age}
      </p>

      <p>
        <span>Department:</span> {user.department}
      </p>
      <p>
        <span>Position:</span> {user.title}
      </p>
      <div className="mt-4 gap-4 flex flex-row">
        {role === Role.Admin && (
          <UtilityButton
            text="Console"
            onClick={() => router.push("/console")}
          />
        )}
      </div>
    </div>
  );
};
