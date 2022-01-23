import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useAuth } from "../contexts/auth";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <View>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Image
            source={{ uri: user.photoUrl }}
            style={{ height: 50, width: 50, borderRadius: 100 }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>{user.email}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>{user.name}</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Button title="Log Out" onPress={signOut} />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
