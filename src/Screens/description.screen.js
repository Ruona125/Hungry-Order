import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Circle from "../../images/ellipse-bg.png";
import Burger from "../../images/burger.png";
import Plus from "../../images/Icons/plus-copy.png";
import Minus from "../../images/Icons/minus-copy.png";

export const Description = ({ navigation }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image style={styles.circle} source={Circle} />
        <Image style={styles.burger} source={Burger} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Description</Text>
        <Text style={styles.textParagraph}>
          Lorem ipsum dolor sit amet, pro an eligendi senserit. An unum fastidii
          antiopam mea, esse porro ei nam. Per mandamus deseruisse et, cum
          timeam intellegat ei.
        </Text>
      </View>

      <View style={{ flex: 1, top: 50, paddingLeft: 20 }}>
        <Text style={styles.textHeading}>Quantity</Text>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <TouchableOpacity onPress={() => setCount(count - 1)}>
            <Image source={Minus} style={{ marginRight: 10 }} />
          </TouchableOpacity>

          <Text style={{ color: "#fff", fontSize: 20 }}>{count}</Text>

          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Image source={Plus} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CartPage")}
          style={{
            borderWidth: 3,
            backgroundColor: "#fd9c1b",
            width: 350,
            borderRadius: 40,
            bottom: 60,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              textAlign: "center",
              padding: 12,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111317",
  },
  textContainer: {
    flex: 1,
    top: 150,
    paddingLeft: 20,
    paddingRight: 20,
    position: "relative",
  },
  textHeading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  textParagraph: {
    marginTop: 20,
    color: "#686868",
  },
  circle: {
    position: "relative",
    right: 210,
    bottom: 95,
  },
  burger: {
    position: "relative",
    bottom: 400,
    left: 70,
  },
});
