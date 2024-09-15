import { useAuth, useUser } from "@clerk/clerk-react";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
  });
  const [globalReports, setGlobalReports] = useState([]);
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      setUserProfile((prevProfile) => ({
        ...prevProfile,
        name: user.fullName || "",
        email: user.emailAddresses[0]?.emailAddress || "",
      }));
    }
  }, [user, isSignedIn]);

  return (
    <UserContext.Provider
      value={{ userProfile, globalReports, setGlobalReports }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
