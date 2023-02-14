import axios from "axios";
import { Component } from "react";

const urlapi = "http://localhost:8080/clients";

export const getInfoApi = () => {
    return axios.get (urlapi);
}
