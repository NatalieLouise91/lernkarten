import lernKartenAPI from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = async (data: any) => {
  try {
    const result = await lernKartenAPI("/auth/login", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};


export const signUp = async (data: any) => {
    try {
      const result = await lernKartenAPI("/auth/register", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        data: data,
      });
      return result;
    } catch (error: any) {
      return error.response.data;
    }
  };

  export const signOut = (data: any) => {
    AsyncStorage.clear()
    return "Logged out"
}