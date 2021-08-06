import React from "react";
import { View, Text, Image } from "react-native";

import RightArrow from "../../../images/Icons/right-arrow.png";

export const SnackHeading = () => {
  return (
    <View
      style={{
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
      <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
        Popular <Text style={{ color: "#fd9c1b" }}>Foods</Text>
      </Text>
      <Image source={RightArrow} />
    </View>
  );
};
