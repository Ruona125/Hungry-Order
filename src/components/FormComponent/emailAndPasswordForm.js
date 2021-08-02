import React from "react";
import { Text, View, TextInput } from "react-native";

export const EmailAndPassword = () => {
  return (
    <View>
      <TextInput
        placeholderTextColor="#686868"
        style={{
          borderColor: "#686868",
          height: 40,
          margin: 12,
          borderBottomWidth: 1,
          width: 300,
        }}
        placeholder="Email"
      />
      <TextInput
        placeholderTextColor="#686868"
        style={{
          borderColor: "#686868",
          borderBottomWidth: 1,
          height: 40,
          margin: 12,
          width: 300,
        }}
        placeholder="Password"
      />
    </View>
  );
};
