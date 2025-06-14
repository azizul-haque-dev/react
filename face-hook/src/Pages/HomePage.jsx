import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function HomePage() {
  const { auth } = useAuth();

  return (
    <div>
      <p>HomePage</p>
      <Link to="/me">Go to Profile Page</Link>
    </div>
  );
}

export default HomePage;
