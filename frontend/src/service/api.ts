import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
   "Content-Type" : "application/json",
  },
});

export class APIURL {
  static SALES: string = "sales";
}