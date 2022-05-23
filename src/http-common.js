import axios from "axios";

export default axios.create({
  baseURL: "https://pallabi-event-managment.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});