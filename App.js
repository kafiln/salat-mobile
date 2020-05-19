import React from "react";
import Spinner from "./src/components/Spinner";
import { AppContext, initialState } from "./src/context";
import reducer from "./src/context/reducer";
import useAsyncReducer from "./src/hooks/useAsyncReducer";
import MainScreen from "./src/screens/MainScreen";

const App = () => {
  const [state, dispatch] = useAsyncReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {state.id ? <MainScreen /> : <Spinner></Spinner>}
    </AppContext.Provider>
  );
};

export default App;
