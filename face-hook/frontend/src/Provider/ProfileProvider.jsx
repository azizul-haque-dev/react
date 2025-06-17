import React, { useReducer } from "react";
import { ProfileContext } from "../context/index";
import { initialState, profileReducer } from "../reducers/ProfileReducer";

function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  console.log(state);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
