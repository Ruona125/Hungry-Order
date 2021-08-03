import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Explore = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Explore page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
