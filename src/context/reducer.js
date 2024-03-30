import moment from "moment";
import { TIME_OFFSET } from "../settings";
import {
  CHANGE_CITY,
  CHANGE_LANGUAGE,
  CHANGE_PERIOD,
  CHANGE_THEME,
  REFRESH_TIME,
} from "./types";

const withTime = (state) => {
  const time = moment.utc().utcOffset(TIME_OFFSET);
  return {
    ...state,
    time,
  };
};

const reducer = async (state, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...withTime(state),
        id: action.payload,
      };
    case CHANGE_LANGUAGE:
      const lang = state.lang === "fr-fr" ? "ar-ma" : "fr-fr";
      return {
        ...withTime(state),
        lang,
      };
    case CHANGE_PERIOD:
      const periodicity = state.periodicity === "daily" ? "monthly" : "daily";
      return {
        ...withTime(state),
        periodicity,
      };
    case CHANGE_THEME:
      const theme = state.theme === "light" ? "dark" : "light";
      return {
        ...withTime(state),
        theme,
      };
    case REFRESH_TIME:
      return {
        ...withTime(state),
      };
    default:
      return state;
  }
};

export default reducer;
