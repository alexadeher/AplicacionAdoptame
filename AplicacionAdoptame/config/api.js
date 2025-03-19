import axios from 'axios';
import { API_URL, API_URL2, API_URL3 } from '@env'; 

export const api = axios.create({
  baseURL: API_URL,
  headers: {
      'Content-Type': 'application/json',
  },
});

export const api2 = axios.create({
  baseURL: API_URL2,
  headers: {
      "Content-Type": "application/json",
  },
});

export const api3 = axios.create({
  baseURL: API_URL3,
  headers: {
      "Content-Type": "application/json",
  },
});