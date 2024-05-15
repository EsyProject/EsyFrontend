import axios from "axios";
import { msalInstance } from "../authSSO/msalInstance";
 
// URL em que fazemos as requisições da API
 
const API_URL = "http://URLAQUI/api/v1/";
 
// Definindo a instância da URL para as requisições utilizando AXIOS
const instance = axios.create({
  baseURL: API_URL,
});
 

async function acquireToken(config) {
  const token = msalInstance.getActiveAccount()?.idToken;
  console.log(token);
  config.headers.Authorization = `Bearer ${token}`;
 
  return config;
}
 
instance.interceptors.request.use(acquireToken);
 
export default instance;