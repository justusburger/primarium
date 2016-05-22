import axios from "axios";
import { toCamelCase, toDashCase } from './convert';
import Store from "../../Store";

export const apiNamespace = '/wp/v2';
export const authNamespace = '/auth/v1'
export const defaultNamespace = apiNamespace;

let authToken = null;
Store.subscribe(() => {
  var state = Store.getState();
  authToken = state.profile.login.token;
});

var axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/wp-json'
});
axiosInstance.interceptors.request.use(function (config) {
  config.headers = {
    'Authorization': authToken
  };
  return config;
});

export function GET(url, namespace = defaultNamespace) {
  return axiosInstance.get(namespace + url)
    .then((response) => toCamelCase(response.data));
}

export function PUT(url, data, namespace = defaultNamespace) {
  return axiosInstance.put(namespace + url, data);
}

export function POST(url, data, namespace = defaultNamespace) {
  return axiosInstance.post(namespace + url, toDashCase(data));
}