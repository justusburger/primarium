import Config from "../Config";
import { getLatency, generateRandomString } from "../common/utilities/Mock";
import { profile } from "./Mock";

export function getProfile(token) {
  if(Config.api.mock)
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(profile), getLatency());
    });
}

export function getToken(username, password) {
  if(Config.api.mock)
    return new Promise((resolve, reject) => {
      if(username == profile.email && password == profile.password)
        setTimeout(() => resolve({ token: generateRandomString(), profile }), getLatency());
      else
        setTimeout(() => reject('Incorrect username or password'), getLatency());
    });
}