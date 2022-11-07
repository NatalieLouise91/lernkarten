import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import VocabForm from "../screens/VocabForm";
import Test from "../screens/Test";

export type RootStackParamList = {
  Home: undefined;
  VocabForm: undefined;
  Test: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VocabForm" component={VocabForm} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
