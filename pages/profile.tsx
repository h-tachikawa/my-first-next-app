import useSWR from 'swr';

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

function Profile() {
  const url = `${process.env.NEXT_PUBLIC_API_BASE}/users/1`;
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.website}</p>
      </div>
  );
}

export default Profile;
