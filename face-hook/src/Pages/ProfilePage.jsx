import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { api } = useAxios();
  const { auth } = useAuth();
  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      try {
        const userResponse = await api.get(`/profile/${auth?.user?.id}`);

        console.log(userResponse.data);

        setUser(userResponse.data.user);
        setPost(userResponse.data.post);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);
  if (loading) {
    return <div>Fetching profile data...</div>;
  }
  return <div>{user?.firstName}</div>;
}

export default ProfilePage;
