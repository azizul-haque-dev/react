import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;
