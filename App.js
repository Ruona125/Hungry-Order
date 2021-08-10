import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomePage } from "./src/Screens/welcomePage";
import { SignInScreen } from "./src/Screens/Signin.screen";
import { SignUpScreen } from "./src/Screens/Signup.screen";
import { Explore } from "./src/Screens/Explore.screen";
import { Description } from "./src/Screens/description.screen";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInAndSignUp"
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
          title: "Sign Up",
          headerStyle: {
            backgroundColor: "#111317",
          },
          headerTintColor: "#fff",
        }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="SignInpage"
        options={{
          title: "Sign In ",
          headerStyle: {
            backgroundColor: "#111317",
          },
          headerTintColor: "#fff",
        }}
        name="SignInpage"
        component={SignInScreen}
      />
      <Stack.Screen
        name="Explore"
        options={{
          title: "Explore",
          headerStyle: {
            backgroundColor: "#111317",
          },
          headerTintColor: "#fff",
        }}
        name="Explore"
        component={Explore}
      />
      <Stack.Screen
        name="Description"
        options={{
          title: "Description",
          headerStyle: {
            backgroundColor: "#111317",
          },
          headerTintColor: "#fff",
        }}
        name="Description"
        component={Description}
      />
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
