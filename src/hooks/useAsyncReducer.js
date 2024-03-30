import moment from "moment";
import { useEffect, useState } from "react";
import { TIME_OFFSET } from "../settings";

const init = () => ({
  id: parseInt("80"),
  lang: "ar-ma",
  theme: "light",
  periodicity: "daily",
});

const useAsyncReducer = (reducer, initialState = null) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    (async () => {
      const defaults = init();
      setState({
        ...state,
        ...defaults,
        time: moment.utc().utcOffset(TIME_OFFSET),
      });
    })();
  }, []);

  const dispatch = async (action) => {
    const result = await reducer(state, action);
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
