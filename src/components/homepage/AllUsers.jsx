import React, { use } from "react";
import UserCard from "../ui/UserCard";

const usersPromise = fetch("/public/usersData.json").then((res) => res.json());

const AllUsers = () => {
  const users = use(usersPromise);
  return (
    <div className="container mx-auto mt-8 w-3/4">
      <h1 className="text-2xl font-bold">Your Friends</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 text-center mt-8 space-x-8 space-y-8">
        {users.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    </div>
  );
};

export default AllUsers;
