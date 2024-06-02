import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
function App() {
  return (
    <UserContextProvider>
      <h1> Raact with chai</h1>
      <Login> </Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
