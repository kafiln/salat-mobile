import moment from "moment";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TIME_OFFSET } from "../settings";
import { getIcon, prayersInArabic } from "./ PrayerItem";

const TimeCard = ({ name, remaining, time, onPress }) => {
  const bgImage = require("../../assets/background.png");

  return (
    <ImageBackground style={styles.backgroundImage} source={bgImage}>
      <View style={styles.settingsView}></View>
      <View style={styles.timeCard}>
        <View style={styles.name}>
          <Text style={styles.textSecondary}>{prayersInArabic[name.toLowerCase()]}</Text>
          {getIcon(name, styles.icon)}
        </View>
        <Text style={styles.textPrimary}>-{remaining}</Text>
        <Text style={styles.textSecondary}>
          {moment.utc(time).utcOffset(TIME_OFFSET).format("HH:mm")}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default TimeCard;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  settingsView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    color: "#fff",
  },
  timeCard: {
    backgroundColor: "rgba(43.9, 51.8, 67.8, 0.8)",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
    justifyContent: "space-between",
    width: "90%",
  },
  name: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textPrimary: {
    color: "#FBF2DF",
    textAlign: "center",
    fontSize: 48,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontWeight: "bold",
  },
  textSecondary: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    paddingHorizontal: 20,
    textTransform: "capitalize",
  },
});
