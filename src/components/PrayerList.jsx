import React from "react";
import { StyleSheet, View } from "react-native";
import PrayerItem from "./ PrayerItem";
import moment from "moment";

const PrayerList = ({ data, next }) => {
  const { id, day, ...prayers } = data;
  const list = Object.keys(prayers).map((key) => (
    <PrayerItem
      key={key}
      name={key}
      next={next === key}
      time={moment.utc(prayers[key]).format("HH:mm")}
    />
  ));
  return <View style={styles.container}>{list}</View>;
};

export default PrayerList;

const styles = StyleSheet.create({
  container: {
    width: "75%",
    paddingVertical: 20,
  },
});
