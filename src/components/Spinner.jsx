import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";

const Spinner = () => {
  return (
    <ActivityIndicator style={styles.container} size="large" color="#0000ff" />
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
