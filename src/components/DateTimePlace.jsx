import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DateTimePlace = ({ date, place }) => {
  return (
    <View style={styles.container}>
      <View style={styles.placeContainer}>
        <FontAwesome name="map-marker" size={24} />
        <Text style={styles.place}>{place}</Text>
      </View>
      <Text style={styles.time}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  placeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  place: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#212B46",
  },
  time: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7486AE",
  },
});

export default DateTimePlace;
