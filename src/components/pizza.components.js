import React from "react";
import { Image, View, StyleSheet } from "react-native";

import PizzaLogo from "../../images/preview.jpg";

export const Pizza = () => {
  return (
    <View style={styles.pic}>
      <Image style={{ width: 370 }} source={PizzaLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  pic: {
    position: "relative",
    alignItems: "center",
  },
});
