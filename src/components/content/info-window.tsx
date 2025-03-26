import { Role, User } from "@/lib/features/user-reducer";
import { UtilityButton } from "../ui/utility-button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { userLogout } from "@/lib/features/user-actions";
import { setStartup } from "@/lib/features/app-reducer";
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
  const dispatch = useAppDispatch();
  const router = useRouter();
  const role = useAppSelector((state) => state.user.role);

  const logout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("role");
      window.localStorage.removeItem("isLoggedIn");
    }

    dispatch(userLogout());
    dispatch(setStartup(true));
  };

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
        <UtilityButton text="Log out" onClick={() => logout()} />
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
