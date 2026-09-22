import React from "react";
import { Link } from "react-router";

const UserCard = ({ user }) => {
  return (
    <Link to={`/userDetails/${user.id}`}>
      <div className="flex justify-center">
        <img
          src={user.picture}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <h1>{user.name}</h1>
      <p>{user.days_since_contact}d ago</p>
      <div className="flex gap-2 justify-center">
        {user.tags.map((tag) => {
          return <span>{tag}</span>;
        })}
      </div>
      <p
        className={
          user.status === "overdue"
            ? "bg-[#EF4444] inline-block p-1 rounded-full text-white"
            : user.status === "almost due"
              ? "bg-[#EFAD44] inline-block p-1 rounded-full text-white"
              : "bg-[#244D3F] inline-block p-1 rounded-full text-white"
        }
      >
        {user.status}
      </p>
    </Link>
  );
};

export default UserCard;
