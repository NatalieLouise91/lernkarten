import lernKartenAPI from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCardsByUser = async (data: any) => {
    try {
        const result = await lernKartenAPI(`/cards`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
        });
        return result;
    } catch (error: any) {
        return error.response.data;
    }
}

export const createCard = async (data: any) => {
    const token = await AsyncStorage.getItem("token");
    try {
        const result = await lernKartenAPI("/cards", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            data: data,
        });
        return result;
    } catch (error:any) {
        return error.response.data;
    }
}