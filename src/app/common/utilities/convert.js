import _ from "lodash";

export function toCamelCase(model) {
  if(_.isArray(model))
    return model.map((item) => toCamelCase(item));

  return _.reduce(model, (result, value, key) => {
    var field = _.map(key.split('_'), (part, i) => i === 0 ? part : _.capitalize(part)).join('');
    result[field] = value;
    return result;
  }, {});
}

export function toDashCase(model) {
  return _.reduce(model, (result, value, key) => {
    var field = key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    result[field] = value;
    return result;
  }, {});
}