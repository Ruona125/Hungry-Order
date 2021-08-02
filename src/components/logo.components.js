import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Logo from "../../images/logo.png";

export const HomeLogo = () => {
  return (
    <View style={styles.pic}>
      <Image source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  pic: {
    top: 90,
    position: "relative",
    alignItems: "center",
  },
});
