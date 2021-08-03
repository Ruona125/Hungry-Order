import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export const EmailAndPassword = () => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholderTextColor="#686868"
        style={styles.input}
        placeholder="Email"
        color="white"
      />
      <TextInput
        placeholderTextColor="#686868"
        style={styles.input}
        placeholder="Password"
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#686868",
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    width: 300,
  },
});
