"use client";

import { User } from "@/types";
import Link from "next/link";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <li className="m-2 p-4">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <Link className="underline" href={`/users/server-version/${user.id}`}>View Details</Link>
    </li>
  );
}