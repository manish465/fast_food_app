import axios from "axios";
const url = "http://localhost:8000/api/";

export const signIn = (data, history) =>
    axios
        .post(`${url}users/sign-in`, data)
        .then((res) => {
            return res.data ? history.push("/") : null;
        })
        .catch((err) => console.log(err));

export const signUp = (data, history) =>
    axios
        .post(`${url}users/sign-up`, data)
        .then((res) => {
            return res.data.msg ? history.push("/sign-in") : null;
        })
        .catch((err) => console.log(err));
