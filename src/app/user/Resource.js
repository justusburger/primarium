import { GET } from "../common/utilities/resource";
import { getLatency } from "../common/utilities/Mock";
import Config from "../Config";
import users from "./Mock";
import _ from "lodash";

export function query(request) {
  if(Config.api.mock) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(users), getLatency());
    });
  }
    
  return GET('/users', request);
}