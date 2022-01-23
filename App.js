import { StyleSheet } from "react-native";
import { AuthProvider } from "./src/contexts/auth";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/auth";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AuthNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
