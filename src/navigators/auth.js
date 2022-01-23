import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../contexts/auth";
import SignIn from "../screens/SignIn";
import Dashboard from "../screens/Dashboard";

const HomeStack = createNativeStackNavigator();

const AuthNavigator = () => {
  const { user } = useAuth();
  return (
    <HomeStack.Navigator>
      {user ? (
        <>
          <HomeStack.Screen name="Dashboard" component={Dashboard} />
        </>
      ) : (
        <>
          <HomeStack.Screen name="SignIn" component={SignIn} />
        </>
      )}
    </HomeStack.Navigator>
  );
};

export default AuthNavigator;
