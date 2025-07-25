import UserCard from "@/components/UserCard/UserCard";
import { User } from "@/types";

export default async function UsersServerVersion() {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    next: { tags: ["users"] },
  });

  if (!res.ok) {
    throw new Error("Fetch users failed");
  }
  
  const users = await res.json();

  return (
    <div>
      <ul>
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}