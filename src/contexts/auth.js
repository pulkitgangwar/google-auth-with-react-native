import React, { createContext, useContext, useState, useEffect } from "react";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import envConfig from "../../config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("@user");

        if (!userData) return;

        setUser(JSON.parse(userData));
      } catch (err) {
        console.log("🚀 ~ file: auth.js ~ line 19 ~ getUserData ~ err", err);
      }
    };

    getUserData();
  }, []);

  const storeData = async (user) => {
    try {
      await AsyncStorage.setItem("@user", JSON.stringify(user));
    } catch (e) {
      console.log("🚀 ~ file: auth.js ~ line 14 ~ storeData ~ e", e);
    }
  };

  const signInWithGoogle = async () => {
    const config = {
      iosClientId: envConfig.IOS_CLIENT_ID,
      androidClientId: envConfig.ANDROID_CLIENT_ID,
      scopes: ["profile", "email"],
    };
    const { type, user } = await Google.logInAsync(config);

    if (type === "success") {
      console.log("success");
      setUser(user);
      storeData(user);
    } else {
      console.log("failed");
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("@user");
      setUser(null);
    } catch (err) {
      console.log("🚀 ~ file: auth.js ~ line 55 ~ signOut ~ err", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ name: "bhakul", user, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth === undefined) throw new Error("context not working");
  return auth;
};
