import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [pass, setpass] = useState("");
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);
  const handaleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, pass });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="user"
      />
      <br /> <br />
      <input
        value={pass}
        onChange={(e) => setpass(e.target.value)}
        type="text"
        placeholder="pass"
      />{" "}
      <br />
      <button onClick={handaleSubmit}>Submit</button>
    </div>
  );
}
export default Login;
