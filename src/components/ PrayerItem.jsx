import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Feather,
  Fontisto,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

//TODO: Refactor this
const getIcon = (name) => {
  switch (name) {
    case "Fajr":
      return <Feather name="sunrise" size={24} />;
    case "Chorouq":
      return (
        <MaterialCommunityIcons
          name="weather-sunset-up"
          size={24}
          color="black"
        />
      );
    case "Dhuhr":
      return <Feather name="sun" size={24} />;
    case "Asr":
      return <FontAwesome name="sun-o" size={24} />;
    case "Maghrib":
      return <Feather name="sunset" size={24} />;
    case "Ishae":
      return <MaterialCommunityIcons name="weather-night" size={24} />;
    default:
      return <Feather name="sunrise" size={24} />;
  }
};

const PrayerItem = ({ name, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        {getIcon(name)}
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default PrayerItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    color: "#212B46",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    // flex: 1,
  },
  time: {
    // flex: 3,
    alignItems: "flex-end",
    fontSize: 18,
    color: "#212B46",
  },
});
