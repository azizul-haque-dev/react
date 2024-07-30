import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

// The Login component is used to handle user login functionality.
function Login() {
  // useState hooks to manage local state for 'username' and 'pass'.
  const [pass, setPass] = useState(""); // State to store the password input
  const [username, setUsername] = useState(""); // State to store the username input
  
  // useContext hook to access 'setUser' function from UserContext.
  const { setUser } = useContext(UserContext);
  
  // Function to handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setUser({ username, pass }); // Updates the user context with the entered username and password
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Input field for username */}
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Updates the username state on change
        type="text"
        placeholder="user"
      />
      <br /> <br />
      {/* Input field for password */}
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)} // Updates the password state on change
        type="text"
        placeholder="pass"
      />{" "}
      <br />
      {/* Button to submit the form */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
