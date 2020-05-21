import React from "react";
import Spinner from "./src/components/Spinner";
import reducer from "./src/context/reducer";
import useAsyncReducer from "./src/hooks/useAsyncReducer";
import MainScreen from "./src/screens/MainScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

import { AppContext, initialState } from "./src/context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Octicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const App = () => {
  const [state, dispatch] = useAsyncReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <NavigationContainer>
        {state.id ? (
          <Stack.Navigator>
            <Stack.Screen
              styles={{ maxWidth: "620" }}
              options={({ navigation, route }) => ({
                headerRightContainerStyle: {
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  maxWidth: 640,
                  marginHorizontal: "auto",
                },
                headerStyles: {},
                headerTransparent: true,
                title: "",
                headerRight: () => (
                  <Octicons
                    onPress={() => navigation.navigate("Settings")}
                    name="settings"
                    size={24}
                    color="#fff"
                  />
                ),
              })}
              name="Home"
              component={MainScreen}
            />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        ) : (
          <Spinner />
        )}
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
