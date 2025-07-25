import { User } from "@/types";

export default async function UserDetails({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${params.id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const user: User = await res.json();

  return (
    <section>
      <div className="flex justify-center flex-col gap-2 mx-2">
        <h1 className="text-3xl">User Details</h1>
        <div>
          <h2>{user.name}</h2>
          <div className="flex flex-row">
            {user.avatar && (
              <img
                src={user.avatar}
                alt={`Avatar of ${user.name}`}
                width={100}
                height={100}
              />
            )}
            <div>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              <p>Avatar: {user.avatar}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
