import { Suspense } from "react";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const SWR = () => {
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher,
    { suspense: true }
  );
  return <div>My name is {data.name}</div>;
};

export const Profile = () => (
  <div>
    <h1>Profile</h1>
    <Suspense fallback={<div>loading...</div>}>
      <SWR />
    </Suspense>
  </div>
);
