import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApplicationContext } from "../context";
import CITIES from "../data/cities.json";
import { DEFAULT_DATE_FORMAT } from "../settings";

const DateTimePlace = ({ navigation }) => {
  const { id, time } = ApplicationContext();
  const place = CITIES.find((e) => e.id === id).name;
  return (
    <View style={styles.container}>
      <View style={styles.placeContainer}>
        <Text style={styles.place}>{place}</Text>
        <FontAwesome name="map-marker" size={24} onPress={() => {navigation.navigate("Settings") }} />
      </View>
      <Text style={styles.time}>{time.format(DEFAULT_DATE_FORMAT,)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  placeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding:10,
  },
  place: {
    marginLeft: 5,
    fontSize: 24,
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
