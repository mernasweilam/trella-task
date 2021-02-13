import axios from "axios";
let trellaAxios = axios.create({});
// trellaAxios.defaults.params = {};
// add the key to the instance for every call
trellaAxios.interceptors.request.use(function(config) {
  config.headers.authorization = 'mernahossam94@gmail.com';
  return config;
  
});

export default trellaAxios;
