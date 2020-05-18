import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const TimeCard = ({ name, remaining, time }) => {
  const bgImage = require("../../assets/background.png");

  return (
    <ImageBackground style={styles.backgroundImage} source={bgImage}>
      <View style={styles.timeCard}>
        <View style={styles.name}>
          <Fontisto name="horizon-alt" size={24} color={"#fff"} />
          <Text style={styles.textSecondary}>{name}</Text>
        </View>
        <Text style={styles.textPrimary}>{remaining}</Text>
        <Text style={styles.textSecondary}>{time}</Text>
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
  timeCard: {
    backgroundColor: "rgba(43.9, 51.8, 67.8, 0.8)",
    padding: 20,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  name: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textPrimary: {
    color: "#FBF2DF",
    textAlign: "center",
    fontSize: 64,
    fontWeight: "bold",
    padding: 10,
  },
  textSecondary: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    paddingHorizontal: 5,
  },
});
