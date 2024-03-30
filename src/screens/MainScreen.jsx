import moment from "moment";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import DateTimePlace from "../components/DateTimePlace";
import PrayerList from "../components/PrayerList";
import Spinner from "../components/Spinner";
import TimeCard from "../components/TimeCard";
import { ApplicationContext } from "../context";
import { REFRESH_TIME } from "../context/types";
import NAMES from "../data/prayers.json";
import usePrayer from "../hooks/usePrayers";
import { DEFAULT_TIME_FORMAT } from "../settings";

const MainScreen = ({ navigation }) => {
  const { id, dispatch, time } = ApplicationContext();
  let [diff, setDifference] = useState("");
  let [next, setNextOne] = useState("");

  const prayers = usePrayer(id);
  let prayer = prayers


  useEffect(() => {
    if (prayer) {
      const nextOnes = Object.keys(prayer).filter((t) =>
        time.isBefore(prayer[t])
      );
      const next = nextOnes.length === 0 ? Object.keys(NAMES)[0] : nextOnes[0];
      setNextOne(next);
      const diff = moment
        .utc(moment(prayer[next]).diff(time))
        .format(DEFAULT_TIME_FORMAT);
      setDifference(diff);
    }
  }, [time, prayer]);

  useEffect(() => {
    const timeout = setTimeout(() => dispatch({ type: REFRESH_TIME }), 1000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return prayers ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TimeCard name={next} remaining={diff} time={prayer[next]} />
      </View>
      <View style={styles.bottom}>
        <DateTimePlace navigation={navigation} />
        {prayer && <PrayerList data={prayer} next={next} />}
      </View>
    </SafeAreaView>
  ) : (
    <Spinner />
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
