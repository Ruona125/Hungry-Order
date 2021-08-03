import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Explore = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "#fff" }}>Explore</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111317",
  },
});
