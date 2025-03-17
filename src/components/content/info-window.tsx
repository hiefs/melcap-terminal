import { User } from "@/lib/features/user-reducer";

interface InfoWindowProps {
  user: User;
}

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const InfoWindow = (props: InfoWindowProps) => {
  const { user } = props;

  return (
    <div>
      <p className="mb-4">Name: {user.name}</p>
      <p>Employee ID: {user.eId}</p>
      <p>Race: {capitalizeFirstLetter(user.race)}</p>
      <p className="mb-4">Age: {user.age}</p>

      <p>Department: {user.department}</p>
      <p>Position: {user.title}</p>
    </div>
  );
};
