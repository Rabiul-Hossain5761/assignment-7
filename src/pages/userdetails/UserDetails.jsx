import React, { use, useContext } from "react";
import { useInRouterContext, useParams } from "react-router";
import DetailsCard from "../../components/ui/DetailsCard";
import UserProvider, { UserContext } from "../../context/UserProvider";

const userPromise = fetch("/public/usersData.json").then((res) => res.json());

const UserDetails = () => {
  const { id } = useParams();
  const users = use(userPromise);

  const expectedUsers = users.find((user) => user.id == id);
  


  return <DetailsCard user={expectedUsers} />;
};

export default UserDetails;
