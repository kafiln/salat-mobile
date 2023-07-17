import moment from "moment";
import { useEffect, useState } from "react";
import { API_URL } from "../settings";
import {
  cleanLocalStorage,
  getFromLocalStorageOrApi,
  getStorageKey,
} from "../utils/localStorage";

const mapTimeFromApiToMoment = (data) =>
  Object.keys(data).reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: moment(data[curr], "HH:mm"),
    };
  }, {});

export default (cityId) => {
  const [prayers, setPrayers] = useState(null);

  useEffect(() => {
    async function init() {
      // init prayers on change
      setPrayers(null);

      // Form the key string
      const key = getStorageKey(cityId);

      // Form the URL
      let URL = `${API_URL}${cityId}/${
        new Date().getUTCMonth() + 1
      }/${new Date().getUTCDate()}`;

      // Load initial values from localstorage or API
      const rawData = await getFromLocalStorageOrApi(key, URL);
      setPrayers(mapTimeFromApiToMoment(rawData));

      // Clean the localStorage
      cleanLocalStorage(key);
    }
    init();
  }, [cityId]);

  return prayers;
};
