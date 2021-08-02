import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Pizza } from "../../components/pizza.components";

export const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Pizza />
      <Text style={styles.textStyle}>Sign Up</Text>
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
    top: 100,
    paddingLeft: 19,
  },
});
