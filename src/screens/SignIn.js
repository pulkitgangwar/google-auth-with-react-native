import { View, Text, Button } from "react-native";
import React from "react";
import * as Google from "expo-google-app-auth";
import { useAuth } from "../contexts/auth";
import config from "../../config";

const SignIn = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <View>
      <Button title="Sign in with google" onPress={signInWithGoogle} />
    </View>
  );
};

export default SignIn;
