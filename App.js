import React from "react";
import Spinner from "./src/components/Spinner";
import { AppContext, initialState } from "./src/context";
import reducer from "./src/context/reducer";
import useAsyncReducer from "./src/hooks/useAsyncReducer";
import MainScreen from "./src/screens/MainScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  const [state, dispatch] = useAsyncReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <NavigationContainer>
        {state.id ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={MainScreen} />
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
