import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//TODO: Refactor this, is there a better way ?
export const getIcon = (name, styles) => {
  switch (name) {
    case "chorouq":
      return <Feather name="sunrise" style={styles} size={24} />;
    case "fajr":
      return (
        <MaterialCommunityIcons
          name="weather-sunset-up"
          style={styles}
          size={24}
        />
      );
    case "dhuhr":
      return <Feather name="sun" style={styles} size={24} />;
    case "asr":
      return <FontAwesome name="sun-o" style={styles} size={24} />;
    case "maghrib":
      return <Feather name="sunset" style={styles} size={24} />;
    case "ishae":
      return (
        <MaterialCommunityIcons name="weather-night" style={styles} size={24} />
      );
    default:
      return <Feather name="sunrise" style={styles} size={24} />;
  }
};

const PrayerItem = ({ name, time, next }) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
    },
    next: {
      backgroundColor: "#fff",
      borderRadius: 15,
    },
    name: {
      fontSize: 18,
      fontWeight: next ? "bold" : "normal",
      color: "#212B46",
      textTransform: "capitalize",
    },
    nameContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    time: {
      fontSize: 18,
      fontWeight: next ? "bold" : "normal",
      color: "#212B46",
    },
    icon: {
      marginHorizontal: 10,
      color: "#212B46",
      fontWeight: next ? "bold" : "normal",
    },
  });
  return (
    <View style={[styles.container, next && styles.next]}>
      <View style={styles.nameContainer}>
        {getIcon(name, styles.icon)}
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default PrayerItem;
