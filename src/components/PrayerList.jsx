import moment from "moment";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TIME_OFFSET } from "../settings";
import PrayerItem from "./ PrayerItem";

const PrayerList = ({ data, next }) => {
  const { id, day, ...prayers } = data;
  const list = Object.keys(prayers).map((key) => (
    <PrayerItem
      key={key}
      name={key}
      next={next === key}
      time={moment.utc(prayers[key]).utcOffset(TIME_OFFSET).format("HH:mm")}
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
