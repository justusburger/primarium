import axios from "axios";
import Store from "../../Store";

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

export function GET(url, data) {
  return axiosInstance.get(url)
    .then(response => response.data);
}

export function PUT(url, data) {
  return axiosInstance.put(url, data)
    .then(response => response.data);
}

export function POST(url, data) {
  return axiosInstance.post(url, data)
    .then(response => response.data);
}

export function DELETE(url, data) {
  return axiosInstance.post(url, data)
    .then(response => response.data);
}