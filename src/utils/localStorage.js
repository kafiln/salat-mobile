//TODO: Remove axios dependency from this projet
// TODO: create an api to handle requests

import axios from "axios";
import { AsyncStorage } from "react-native";
import { NEVER_REMOVE_FROM_STORAGE } from "../settings";

/**
*Fetch a value either from asyncStorage identified by name,
  or from the api using the provided url
 *
 * @param {string} name the name to get from the asyncStorage
 * @param {string} url the url to use to get data from the api,
 *  if not found in the asyncStorage 
 * @returns the data 
 */
export const getFromLocalStorageOrApi = async (name, url) => {
  if (!(await AsyncStorage.getItem(name))) {
    const [value] = (await axios.get(url)).data;
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
export const cleanLocalStorage = async (key) => {
  const rest = [...NEVER_REMOVE_FROM_STORAGE];

  (await AsyncStorage.getAllKeys())
    .filter((e) => !e.startsWith(key))
    .filter((e) => !rest.includes(e))
    .forEach(async (e) => await AsyncStorage.removeItem(e));
};

export const getStorageKey = (cityId) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${cityId}/${month}/${day}`;
};
