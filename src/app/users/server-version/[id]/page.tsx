import { User } from "@/types";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function UserDetails({ params }: PageProps) {
  const { id } = params;
  
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch user with id: ${id}`);
  }
  
  const user: User = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="mt-2"><span className="font-medium">Email:</span> {user.email}</p>
        <p><span className="font-medium">Role:</span> {user.role}</p>
        {user.avatar && (
          <div className="mt-4">
            <img 
              src={user.avatar} 
              alt={`Avatar of ${user.name}`} 
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}