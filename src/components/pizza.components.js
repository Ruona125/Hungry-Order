import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Logo from "../../images/01-bg.jpg";

export const Pizza = () => {
  return (
    <View style={styles.pic}>
      <Image source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  pic: {
    position: "relative",
    alignItems: "center",
  },
});
