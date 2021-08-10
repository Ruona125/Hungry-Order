import React from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import Burger from "../../../images/item-1.png";
import FireBurger from "../../../images/item-3.png";

export const SnackCard = () => {
  return (
    <ScrollView horizontal={true}>
      <ImageBackground source={Burger} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Zinger Burger</Text>
          <Text style={{ color: "#fff", fontSize: 5, fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 6,
              fontWeight: "bold",
              marginTop: 3,
            }}>
            4 USD$
          </Text>
        </View>
      </ImageBackground>

      <ImageBackground source={Burger} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Zinger Burger</Text>
          <Text style={{ color: "#fff", fontSize: 5, fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 6,
              fontWeight: "bold",
              marginTop: 3,
            }}>
            4 USD$
          </Text>
        </View>
      </ImageBackground>

      <ImageBackground source={FireBurger} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Zinger Burger</Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 5,
              fontWeight: "bold",
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>

          <Text
            style={{
              color: "#fff",
              fontSize: 6,
              fontWeight: "bold",
              marginTop: 3,
            }}>
            4 USD$
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 120,
    margin: 10,
    overflow: "hidden",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  textContainer: {
    margin: 9,
    top: 60,
  },
});
