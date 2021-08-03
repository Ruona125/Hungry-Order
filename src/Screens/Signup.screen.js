import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Pizza } from "../components/pizza.components";
import { EmailAndPassword } from "../components/FormComponent/emailAndPasswordForm";

export const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pizza />

      <Text style={styles.textStyle}>Sign Up</Text>
      <View style={styles.formStyle}>
        <TextInput
          placeholderTextColor="#686868"
          style={{
            borderColor: "#686868",
            height: 40,
            margin: 12,
            borderBottomWidth: 1,
            width: 300,
          }}
          placeholder="Username"
          color="white"
        />
        <EmailAndPassword />
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Explore")}
          style={{
            borderWidth: 3,
            backgroundColor: "#fd9c1b",
            width: 350,
            borderRadius: 40,
            bottom: 120,
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
        <TouchableOpacity>
          <Text
            style={{ color: "#686868", top: 140 }}
            onPress={() => navigation.navigate("SignInpage")}>
            Already a Member? <Text style={{ color: "#fd9c1b" }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111317",
  },
  textStyle: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20,
    position: "relative",
    top: 60,
    paddingLeft: 19,
  },
  formStyle: {
    alignItems: "center",
    top: 80,
    flex: 1,
  },
});
