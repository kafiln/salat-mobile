import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//TODO: Refactor this, is there a better way ?
const getIcon = (name) => {
  switch (name) {
    case "Chorouq":
      return <Feather name="sunrise" style={styles.icon} size={24} />;
    case "Fajr":
      return (
        <MaterialCommunityIcons
          name="weather-sunset-up"
          style={styles.icon}
          size={24}
        />
      );
    case "Dhuhr":
      return <Feather name="sun" style={styles.icon} size={24} />;
    case "Asr":
      return <FontAwesome name="sun-o" style={styles.icon} size={24} />;
    case "Maghrib":
      return <Feather name="sunset" style={styles.icon} size={24} />;
    case "Ishae":
      return (
        <MaterialCommunityIcons
          name="weather-night"
          style={styles.icon}
          size={24}
        />
      );
    default:
      return <Feather name="sunrise" style={styles.icon} size={24} />;
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
  },
  time: {
    fontSize: 18,
    color: "#212B46",
  },
  icon: {
    color: "#212B46",
  },
});
