import React from "react";
import { Picker, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApplicationContext } from "../context";
import { CHANGE_CITY, CHANGE_LANGUAGE, CHANGE_THEME } from "../context/types";
import CITIES from "../data/cities.json";

const byLabel = (a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0);

const cities = CITIES.map((c) => ({ id: c.id, label: c.name })).sort(
  byLabel
);

const SettingsScreen = () => {
  const { id, lang, theme, dispatch } = ApplicationContext();
  const toggleLanguage = async () => {
    await dispatch({ type: CHANGE_LANGUAGE });
  };
  const toggleTheme = async () => {
    await dispatch({ type: CHANGE_THEME });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>City </Text>
      <View style={styles.cities}>
        <Picker
          selectedValue={id}
          style={{ height: 50, width: 200 }}
          onValueChange={async (_, itemIndex) => {
            await dispatch({ type: CHANGE_CITY, payload: parseInt(_) });
          }}
        >
          {cities.map((city) => (
            <Picker.Item key={city.id} label={city.label} value={city.id} />
          ))}
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  toggle: {
    paddingVertical: 10,
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cities: {
    marginTop: 20,
  },
});
