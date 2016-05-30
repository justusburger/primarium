import Config from "../../Config";
import _ from "lodash";

export function getLatency() {
  let latency = 0;

  if(Config.api.latency)
    latency = _.random(Config.api.latency[0], Config.api.latency[1]);

  return latency;
}

export function generateRandomString() {
  return _.range(50).map(() => String.fromCharCode(97 + _.random(0, 36))).join();
}