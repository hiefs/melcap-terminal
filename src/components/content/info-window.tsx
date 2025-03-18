import { User } from "@/lib/features/user-reducer";
import { UtilityButton } from "../ui/utility-button";
import { useAppDispatch } from "@/lib/hooks";
import { userLogout } from "@/lib/features/user-actions";
import { setStartup } from "@/lib/features/app-reducer";

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
      <p className="mb-4">Name: {user.name}</p>
      <p>Employee ID: {user.eId}</p>
      <p>Race: {capitalizeFirstLetter(user.race)}</p>
      <p className="mb-4">Age: {user.age}</p>

      <p>Department: {user.department}</p>
      <p>Position: {user.title}</p>
      <div className="mt-4">
        <UtilityButton text="Log out" onClick={() => logout()} />
      </div>
    </div>
  );
};
