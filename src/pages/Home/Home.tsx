import React from "react";
import { useGetUsersQuery } from "../../apis/userApi";

const Home: React.FC = () => {
  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetUsersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    return <p>Error:</p>;
  } else if (isFetching) {
    return <p>Fetching...</p>;
  } else if (isSuccess) {
    return <>{JSON.stringify(data)}</>;
  } else {
    return <p>Something went wrong</p>;
  }
};

export default Home;
