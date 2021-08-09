import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import RightArrow from "../../images/Icons/right-arrow.png";
import { Searchbar } from "react-native-paper";
import { SnackIcon } from "../components/ExploreComponent/snackIcon";
import { SnackCard } from "../components/ExploreComponent/snackCard";

export const Explore = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textAndSearch}>
        <Text style={{ color: "#fff", fontWeight: "900", fontSize: 23 }}>
          Explore
        </Text>
        <Searchbar
          placeholderTextColor="#686868"
          placeholder="Search"
          style={styles.searchBar}
        />
      </View>

      <View>
        <SnackIcon />
      </View>

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

      <View>
        <SnackCard />
      </View>

      <View
        style={{
          margin: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
          Special <Text style={{ color: "#fd9c1b" }}>Offers</Text>
        </Text>
        <Image source={RightArrow} />
      </View>

      <View>
        <SnackCard />
      </View>

      <View
        style={{
          margin: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
          Midnight <Text style={{ color: "#fd9c1b" }}>Deals</Text>
        </Text>
        <Image source={RightArrow} />
      </View>

      <View>
        <SnackCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111317",
  },
  searchBar: {
    height: 33,
    width: 170,
    borderRadius: 20,
  },
  textAndSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 17,
  },
});
