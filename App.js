import { StatusBar } from "expo-status-bar";
import React from "react";
import { SignUpScreen } from "./src/Screens/WelcomeScreen/Signup.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomePage } from "./src/Screens/WelcomeScreen/welcomePage";
import { SignInScreen } from "./src/Screens/WelcomeScreen/Signin.screen";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In & Sign Up"
        component={WelcomePage}
        options={{
          title: "Sign In and Sign Up",
          headerStyle: {
            backgroundColor: "#111317",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="SignUppage"
        options={{
          title: "Sign Up page",
          headerStyle: {
            backgroundColor: "#111317",
          },
          headerTintColor: "#fff",
        }}
        component={SignUpScreen}
      />
      <Stack.Screen name="SignInpage" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
