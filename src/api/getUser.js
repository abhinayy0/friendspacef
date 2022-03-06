import axios from "axios";
import { APIUrls } from "../helpers/urls";

export const login = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    userCredential["username"] = userCredential["email"];
    const url = APIUrls.login();
    console.log(userCredential);
    const res = await axios.post(url, userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("token", res.data.access);
  } catch (err) {
    dispatch({ type: "LOGIN_FAILED", payload: err });
  }
};

export const signup = async (userCredential, dispatch) => {
  // dispatch({ type: "LOGIN_START" });
  try {
    const url = APIUrls.signup();
    const res = await axios.post(url, userCredential);
    // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    // localStorage.setItem("token", res.data.token);
  } catch (err) {
    // dispatch({ type: "LOGIN_FAILED", payload: err });
  }
};
