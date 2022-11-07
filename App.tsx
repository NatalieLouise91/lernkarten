import { StatusBar } from "expo-status-bar";
import { Provider, useSelector, useDispatch } from "react-redux";
import store, { selectVocabs, addVocab, removeVocab } from "./utils/store";
import Navigation from "./navigation";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
} from "@expo-google-fonts/ubuntu";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Ubuntu_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Navigation />
        <StatusBar />
      </Provider>
    );
  }
}
