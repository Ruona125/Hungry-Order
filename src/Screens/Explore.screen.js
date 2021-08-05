import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Searchbar } from "react-native-paper";
import { SnackIcon } from "../components/ExploreComponent/snackIcon";
export const Explore = () => {
  return (
    <View style={styles.container}>
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
    </View>
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
    padding: 17,
  },
});
