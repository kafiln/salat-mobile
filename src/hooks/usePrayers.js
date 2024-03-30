import moment from "moment";
import { useEffect, useState } from "react";
import { API_URL } from "../settings";
import { getFromApi } from "../utils/localStorage";

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
      setPrayers(null);
      const URL = `${API_URL}${cityId}/${
        new Date().getUTCMonth() + 1
      }/${new Date().getUTCDate()}`;

      const rawData = await getFromApi(URL);
      const prayers = mapTimeFromApiToMoment(rawData);
      setPrayers(prayers);
    }
    init();
  }, [cityId]);

  return prayers;
};
