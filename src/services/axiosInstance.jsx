import axios from "axios";
import { msalInstance } from "../lib/sso/msalInstance";
 
export const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  "Access-Control-Allow-Origin": "true",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
}; 

const API_URL = "http://10.234.89.187:6968";
 
// Defining the URL instance for requests using AXIOS
const instance = axios.create({
  baseURL: API_URL,
  headers: headers
});
 
// Function to acquire the token and add it to the request header
async function acquireToken(config) {
  const token = msalInstance.getActiveAccount()?.idToken;
  config.headers.Authorization = `Bearer ${token}`;
 
  return config;
}

// Adding the interceptor for all requests
instance.interceptors.request.use(acquireToken);
 
export default instance;