import moment from "moment";
import "moment/locale/ar-ma";
import React, { useContext } from "react";
import cities from "../data/cities.json";
import { TIME_OFFSET } from "../settings";

moment.locale("ar-ma");

export const initialState = {
  cities,
  languages: ["ar-ma", "fr-fr"], //TODO: This should not be here
  time: moment().utcOffset(TIME_OFFSET),
};

export const AppContext = React.createContext(initialState);
export const ApplicationContext = () => useContext(AppContext);
