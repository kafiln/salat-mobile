import React from "react";
import { StyleSheet, View } from "react-native";

const Center = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
