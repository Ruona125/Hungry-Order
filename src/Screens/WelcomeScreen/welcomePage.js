import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { HomeLogo } from "../../components/logo.components";

export const WelcomePage = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "#111317" }}>
      <HomeLogo />

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUppage")}
          style={{
            borderWidth: 3,

            backgroundColor: "#fd9c1b",
            width: 350,
            borderRadius: 40,
            top: 200,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              textAlign: "center",
              padding: 20,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignInpage")}
          style={{
            borderWidth: 3,
            borderColor: "#fd9c1b",
            width: 350,
            borderRadius: 40,
            top: 230,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              textAlign: "center",
              padding: 20,
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// import React from "react";
// import { View } from "react-native";

// import { SignIn } from "../../components/signIn.components";
// import { SignUp } from "../../components/signUp.components";
// import { HomeLogo } from "../../components/logo.components";

// export const Welcome = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#111317" }}>
//       <HomeLogo />
//       <SignUp />
//       <SignIn />
//     </View>
//   );
// };

// import React from "react";
// import { Image, View } from "react-native";

// import { SignIn } from "../components/signIn.components";
// import {SignUp}
