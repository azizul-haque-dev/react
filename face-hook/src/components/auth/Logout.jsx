import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";

function Logout() {
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/login");
  }
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
}

export default Logout;
