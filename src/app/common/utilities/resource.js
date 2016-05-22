import axios from "axios";
import { toCamelCase, toDashCase } from './convert';

var axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/wp-json/wp/v2'
});
axiosInstance.interceptors.request.use(function (config) {
  config.headers = {
    'Authorization': 'Basic YWRtaW46MW5kM24xQGw='
  };
  return config;
});

export function GET(url) {
  return axiosInstance.get(url)
    .then((response) => toCamelCase(response.data));
}

export function PUT(url, data) {
  return axiosInstance.put(url, data);
}

export function POST(url, data) {
  return axiosInstance.put(url, toDashCase(data));
}