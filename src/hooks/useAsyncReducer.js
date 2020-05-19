import { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import moment from "moment";
import { TIME_OFFSET } from "../settings";

const initFromStorage = async () => ({
  id: parseInt((await AsyncStorage.getItem("id")) || "80"),
  lang: (await AsyncStorage.getItem("lang")) || "ar-ma",
  theme: (await AsyncStorage.getItem("theme")) || "light",
  periodicity: (await AsyncStorage.getItem("periodicity")) || "daily",
});

const useAsyncReducer = (reducer, initialState = null) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    (async () => {
      const defaults = await initFromStorage();
      setState({
        ...state,
        ...defaults,
        time: moment.utc().utcOffset(TIME_OFFSET),
      });
    })();
  }, []);

  const dispatch = async (action) => {
    const result = reducer(state, action);
    if (typeof result.then === "function") {
      try {
        const newState = await result;
        setState(newState);
      } catch (err) {
        setState({ ...state, error: err });
      }
    } else {
      setState(result);
    }
  };

  return [state, dispatch];
};

export default useAsyncReducer;
