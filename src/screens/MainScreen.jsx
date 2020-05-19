import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import DateTimePlace from "../components/DateTimePlace";
import PrayerList from "../components/PrayerList";
import TimeCard from "../components/TimeCard";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TimeCard name="Chorouq" remaining="00:15:23" time="05:56" />
      </View>
      <View style={styles.bottom}>
        <DateTimePlace date="22 Décembre 2020" place="Marrakech" />
        <PrayerList />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 620,
    marginHorizontal: "auto",
  },

  top: {
    flex: 0.9,
    width: "100%",
    backgroundColor: "#e3e3e3",
  },

  bottom: {
    alignItems: "center",
    flex: 1.1,
    width: "100%",
    backgroundColor: "#FBF2DF",
  },
});
