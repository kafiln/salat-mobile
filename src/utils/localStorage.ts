//TODO: Remove axios dependency from this projet
// TODO: create an api to handle requests

import axios from "axios";
import { NEVER_REMOVE_FROM_STORAGE } from "../settings";
import { AsyncStorage } from "react-native";

/**
*Fetch a value either from asyncStorage identified by name,
  or from the api using the provided url
 *
 * @param {string} name the name to get from the asyncStorage
 * @param {string} url the url to use to get data from the api,
 *  if not found in the asyncStorage 
 * @returns the data 
 */
export const getFromLocalStorageOrApi = async (name: string, url: string) => {
  if (!(await AsyncStorage.getItem(name))) {
    const value = (await axios.get(url)).data;
    await AsyncStorage.setItem(name, JSON.stringify(value));
    return value;
  }

  return JSON.parse((await AsyncStorage.getItem(name)) || "");
};

/**
 *Delete all items in the localStorage that are not specified as arguments
 *
 * @param {*} args  keys that should not be deleted from localStorage
 */

/**
 *
 * Create a key to use with the localStorage
 * @param {number} cityId the id of the city
 */
export const cleanLocalStorage = async (cityId: number) => {
  const rest = [...NEVER_REMOVE_FROM_STORAGE];
  const dailyKey = getStorageKey(cityId, true).split("_").slice(0, 3).join("_");
  const monthlyKey = getStorageKey(cityId, false)
    .split("_")
    .slice(0, 2)
    .join("_");

  Object.keys({ ...(await AsyncStorage.getAllKeys()) })
    .filter((e) => !e.startsWith(dailyKey))
    .filter((e) => !e.startsWith(monthlyKey))
    .filter((e) => !rest.includes(e))
    .forEach(async (e) => await AsyncStorage.removeItem(e));
};

export const getStorageKey = (cityId: number, isDaily: boolean): string => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return isDaily
    ? `daily_${month}_${day}_${cityId}`
    : `monthly_${month}_${cityId}`;
};
