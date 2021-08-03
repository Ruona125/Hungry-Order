import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Pizza } from "../components/pizza.components";
import { EmailAndPassword } from "../components/FormComponent/emailAndPasswordForm";

export const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pizza />

      <Text style={styles.textStyle}>Sign In</Text>
      <View style={styles.formStyle}>
        <EmailAndPassword />
      </View>

      <View style={{ alignItems: "center", top: 125 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Explore")}
          style={{
            borderWidth: 3,
            backgroundColor: "#fd9c1b",
            width: 350,
            borderRadius: 40,
            top: 120,
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
        <View>
          <TouchableOpacity>
            <Text
              style={{ color: "#686868", top: 140 }}
              onPress={() => navigation.navigate("SignUppage")}>
              New to Fine Food?
              <Text style={{ color: "#fd9c1b" }}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
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
  },
});