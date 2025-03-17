import { User } from "@/lib/features/user-reducer";

interface InfoWindowProps {
  user: User;
}

export const InfoWindow = (props: InfoWindowProps) => {
  const { user } = props;

  return (
    <div>
      <p className="mb-4">Welcome {user.name}</p>
      <p>Employee ID: {user.eId}</p>
      <p>Department: {user.department}</p>
      <p>Position: {user.title}</p>
    </div>
  );
};
