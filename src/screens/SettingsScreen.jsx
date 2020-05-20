import React from "react";
import { StyleSheet, Text, Switch, View, Picker } from "react-native";
import { Center } from "../components/common";
import { ApplicationContext } from "../context";
import { CHANGE_LANGUAGE, CHANGE_THEME, CHANGE_CITY } from "../context/types";
import CITIES from "../data/cities.json";

const byLabel = (a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0);

const cities = CITIES.map((c) => ({ id: c.id, label: c.names["fr-fr"] })).sort(
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
    <Center>
      <Text>Settings</Text>
      <View style={styles.toggle}>
        <Text>Arabic</Text>
        <Switch
          // thumbColor={lang == "ar-ma" ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleLanguage}
          value={lang != "ar-ma"}
        />
        <Text>French</Text>
      </View>
      <View style={styles.toggle}>
        <Text>Dark</Text>
        <Switch
          // thumbColor={theme == "dark" ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleTheme}
          value={theme != "dark"}
        />
        <Text>Light</Text>
      </View>
      <Text>Is this showing ? </Text>
      <View>
        <Picker
          selectedValue={id}
          style={{ height: 50, width: 100 }}
          onValueChange={async (_, itemIndex) => {
            await dispatch({ type: CHANGE_CITY, payload: parseInt(_) });
          }}
        >
          {cities.map((city) => (
            <Picker.Item key={city.id} label={city.label} value={city.id} />
          ))}
        </Picker>
      </View>
    </Center>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  toggle: {
    paddingVertical: 10,
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
