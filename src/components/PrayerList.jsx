import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PrayerItem from "./ PrayerItem";

const PrayerList = () => {
  return (
    <View style={styles.container}>
      <PrayerItem name="Fajr" time="04:03"></PrayerItem>
      <PrayerItem name="Chorouq" time="05:59"></PrayerItem>
      <PrayerItem name="Dhuhr" time="12:56"></PrayerItem>
      <PrayerItem name="Asr" time="16:17"></PrayerItem>
      <PrayerItem name="Maghrib" time="19:17"></PrayerItem>
      <PrayerItem name="Ishae" time="20:48"></PrayerItem>
    </View>
  );
};

export default PrayerList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#e3e3e3",
    width: "80%",
    paddingVertical: 20,
  },
});
