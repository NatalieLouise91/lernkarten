import lernKartenAPI from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginFormData {
  email: string;
  password: string;
}
export const logIn = async (data: LoginFormData) => {
  try {
    const result = await lernKartenAPI("/auth/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const signUp = async (data: SignUpFormData) => {
  try {
    const result = await lernKartenAPI("/auth/register", {
      method: "POST",
      headers: {
        accept: "application/json",
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
  AsyncStorage.clear();
  return "Logged out";
};
