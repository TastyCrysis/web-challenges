import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Failed to load</div>;

  return (
    <div>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.twitter}</p>
      <p>{data.geohash}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.avatar}</p>
    </div>
  );
}
